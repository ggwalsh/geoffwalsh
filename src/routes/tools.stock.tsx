import { createFileRoute } from "@tanstack/react-router";
import { StockApp } from "../../tools/src/stock/App";
import { useBrand } from "@/lib/brand-state";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tools/stock")({
  ssr: false,
  head: () =>
    pageHead(
      "Stock",
      "Drop a SKU export. Mins, safety stock, HIGH / EXCESS — the counter version.",
      "/tools/stock",
    ),
  component: StockTool,
});

function StockTool() {
  const setBrand = useBrand((s) => s.setState);
  return <StockApp onBrand={setBrand} homeHref="/tools" />;
}
