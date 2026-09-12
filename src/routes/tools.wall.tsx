import { createFileRoute } from "@tanstack/react-router";
import { WallApp } from "../../tools/src/wall/App";
import { useBrand } from "@/lib/brand-state";

export const Route = createFileRoute("/tools/wall")({
  ssr: false,
  component: WallTool,
});

function WallTool() {
  const setBrand = useBrand((s) => s.setState);
  return <WallApp onBrand={setBrand} homeHref="/tools" />;
}
