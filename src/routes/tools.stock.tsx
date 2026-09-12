import { createFileRoute } from "@tanstack/react-router";
import { StockApp } from "../../tools/src/stock/App";
import { useBrand } from "@/lib/brand-state";

export const Route = createFileRoute("/tools/stock")({
  ssr: false,
  component: StockTool,
});

function StockTool() {
  const setBrand = useBrand((s) => s.setState);
  return <StockApp onBrand={setBrand} homeHref="/tools" />;
}
