export type Service = 90 | 95 | 99;
export type Tier = "zero" | "low" | "active";
export type Flag = "high" | "excess" | "review" | "ok";

export type StockInput = {
  sku: string;
  name: string;
  onHand: number;
  demand12: number;
  demandPrior: number;
  leadDays: number;
  moq: number;
  currentMin: number;
};

export type StockOptions = {
  service: Service;
  maxDays: number;
  cv: number;
};

export type StockRow = StockInput & {
  tier: Tier;
  add: number;
  growth: number | null;
  recommended: number;
  daysCover: number | null;
  recDays: number | null;
  gap: number;
  orderQty: number;
  flag: Flag;
  note: string;
};

export const ZERO_MAX = 5;
export const LOW_MAX = 30;
export const TOKEN = 1;
export const DEFAULT_CV = 0.4;
export const DEFAULT_MAX_DAYS = 60;
export const DEFAULT_LEAD = 14;
export const Z: Record<Service, number> = { 90: 1.28, 95: 1.65, 99: 2.33 };

const YEAR = 365;

export const DEFAULT_OPTIONS: StockOptions = {
  service: 95,
  maxDays: DEFAULT_MAX_DAYS,
  cv: DEFAULT_CV,
};

function num(v: string | undefined): number {
  if (!v) return 0;
  const n = Number(String(v).replace(/[$,]/g, "").trim());
  return Number.isFinite(n) ? n : 0;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function roundQty(n: number) {
  if (n <= 0) return 0;
  return Math.max(1, Math.round(n));
}

export function parseCsv(text: string): StockInput[] {
  const rows = splitCsv(text.replace(/^\uFEFF/, ""));
  if (rows.length < 2) return [];
  const head = rows[0].map((h) => h.trim().toLowerCase().replace(/[\s_-]+/g, ""));
  const idx = (names: string[]) => {
    for (const n of names) {
      const i = head.indexOf(n);
      if (i >= 0) return i;
    }
    return -1;
  };
  const c = {
    sku: idx(["partnum", "part", "sku", "item", "itemcode"]),
    name: idx(["partdescription", "description", "desc", "name", "partdesc"]),
    onHand: idx(["onhandqty", "onhand", "qtyonhand", "qoh", "quantityonhand"]),
    demand12: idx(["demand12m", "demand", "sold12", "units12", "ltm", "sales12m", "qty12"]),
    demandPrior: idx(["demandprior12m", "prior", "demandprior", "py", "prior12", "soldprior"]),
    lead: idx(["leadtimedays", "leadtime", "lead", "lt", "leadtimeday"]),
    moq: idx(["minorderqty", "moq", "minqty", "minimumorderqty"]),
    min: idx(["currentmin", "min", "reorder", "rop", "safetystock", "minimum"]),
  };
  if (c.sku < 0 || c.demand12 < 0) {
    throw new Error("Need a Part / SKU column and a 12-month demand column.");
  }
  const out: StockInput[] = [];
  for (const row of rows.slice(1)) {
    if (!row.some((cell) => cell.trim())) continue;
    const sku = (row[c.sku] ?? "").trim();
    if (!sku) continue;
    out.push({
      sku,
      name: c.name >= 0 ? (row[c.name] ?? "").trim() : "",
      onHand: c.onHand >= 0 ? num(row[c.onHand]) : 0,
      demand12: num(row[c.demand12]),
      demandPrior: c.demandPrior >= 0 ? num(row[c.demandPrior]) : 0,
      leadDays: c.lead >= 0 ? num(row[c.lead]) : 0,
      moq: c.moq >= 0 ? num(row[c.moq]) : 0,
      currentMin: c.min >= 0 ? num(row[c.min]) : 0,
    });
  }
  return out;
}

function splitCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else q = false;
      } else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") cell += ch;
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

export function packSku(row: StockInput, opt: StockOptions = DEFAULT_OPTIONS): StockRow {
  const add = row.demand12 / YEAR;
  const growth = row.demandPrior > 0 ? row.demand12 / row.demandPrior - 1 : null;
  const buf = growth != null ? clamp(growth, 0, 0.5) : 0;
  const eff = add * (1 + buf);

  let tier: Tier;
  let recommended: number;
  if (row.demand12 <= ZERO_MAX) {
    tier = "zero";
    recommended = 0;
  } else if (row.demand12 <= LOW_MAX) {
    tier = "low";
    recommended = TOKEN;
  } else {
    tier = "active";
    const lead = row.leadDays > 0 ? row.leadDays : DEFAULT_LEAD;
    const ss = Z[opt.service] * opt.cv * eff * Math.sqrt(lead);
    const raw = eff * lead + ss;
    const cap = eff * opt.maxDays;
    recommended = roundQty(Math.min(raw, cap));
  }

  const daysCover = add > 0 ? row.onHand / add : row.onHand > 0 ? Infinity : 0;
  const recDays = add > 0 && recommended > 0 ? recommended / add : recommended === 0 ? 0 : null;
  const gap = recommended - row.onHand;

  let orderQty = 0;
  if (gap > 0) {
    orderQty = roundQty(gap);
    if (tier === "active" && row.moq > 0) {
      const daysAfterMoq = add > 0 ? (row.onHand + row.moq) / add : Infinity;
      if (daysAfterMoq <= opt.maxDays || gap >= row.moq * 0.4) {
        orderQty = Math.max(orderQty, Math.round(row.moq));
      }
    }
  }

  const { flag, note } = flagRow(tier, row, recommended, daysCover, growth, opt.maxDays);

  return {
    ...row,
    tier,
    add,
    growth,
    recommended,
    daysCover: Number.isFinite(daysCover) ? daysCover : null,
    recDays,
    gap,
    orderQty,
    flag,
    note,
  };
}

function flagRow(
  tier: Tier,
  row: StockInput,
  rec: number,
  daysCover: number,
  growth: number | null,
  maxDays: number,
): { flag: Flag; note: string } {
  if (tier === "zero" && row.onHand > 0) {
    return { flag: "excess", note: "No demand in 12 months — dead stock." };
  }
  if (rec > 0 && row.onHand < rec * 0.5) {
    return { flag: "high", note: "On hand is under half the recommended min." };
  }
  const excessDays = Math.max(maxDays * 1.5, 90);
  if (daysCover > excessDays) {
    return { flag: "excess", note: `More than ${Math.round(excessDays)} days of cover.` };
  }
  if (rec > 0 && row.onHand > rec * 2.5 && daysCover > maxDays) {
    return { flag: "excess", note: "On hand is well above the 60-day cap." };
  }
  if (growth != null && growth > 0.5) {
    return { flag: "review", note: "Demand jumped more than 50% year on year." };
  }
  if (growth != null && growth < -0.4) {
    return { flag: "review", note: "Demand dropped more than 40% year on year." };
  }
  if (tier === "active" && row.leadDays <= 0) {
    return { flag: "review", note: "No lead time on file — used 14 days." };
  }
  if (tier === "low" && row.onHand > TOKEN * 3) {
    return { flag: "review", note: "Sporadic mover carrying more than token stock." };
  }
  return { flag: "ok", note: "" };
}

export function packFile(rows: StockInput[], opt: StockOptions = DEFAULT_OPTIONS): StockRow[] {
  const rank: Record<Flag, number> = { high: 0, excess: 1, review: 2, ok: 3 };
  return rows
    .map((r) => packSku(r, opt))
    .sort((a, b) => rank[a.flag] - rank[b.flag] || b.gap - a.gap || a.sku.localeCompare(b.sku));
}

export function summarize(rows: StockRow[]) {
  return {
    skus: rows.length,
    high: rows.filter((r) => r.flag === "high").length,
    excess: rows.filter((r) => r.flag === "excess").length,
    review: rows.filter((r) => r.flag === "review").length,
    buy: rows.reduce((n, r) => n + r.orderQty, 0),
    dead: rows.filter((r) => r.tier === "zero" && r.onHand > 0).reduce((n, r) => n + r.onHand, 0),
  };
}

export function toCsv(rows: StockRow[]): string {
  const head = [
    "PartNum",
    "PartDescription",
    "Tier",
    "Flag",
    "OnHandQty",
    "Demand12M",
    "YoY",
    "LeadTimeDays",
    "DaysCover",
    "RecommendedMin",
    "OrderQty",
    "MOQ",
    "Note",
  ];
  const body = rows.map((r) =>
    [
      r.sku,
      r.name,
      r.tier,
      r.flag,
      r.onHand,
      r.demand12,
      r.growth == null ? "" : (r.growth * 100).toFixed(0) + "%",
      r.leadDays,
      r.daysCover == null ? "" : r.daysCover.toFixed(0),
      r.recommended,
      r.orderQty,
      r.moq,
      r.note,
    ]
      .map(csvCell)
      .join(","),
  );
  return [head.join(","), ...body].join("\n");
}

function csvCell(v: string | number) {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
