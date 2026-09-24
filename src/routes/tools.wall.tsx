import { createFileRoute } from "@tanstack/react-router";
import { WallApp } from "../../tools/src/wall/App";
import { useBrand } from "@/lib/brand-state";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tools/wall")({
  ssr: false,
  head: () =>
    pageHead(
      "Wall",
      "Sketch a containment. Get a SHIELD WALL kit — panels, corners, doors, exhaust.",
      "/tools/wall",
    ),
  component: WallTool,
});

function WallTool() {
  const setBrand = useBrand((s) => s.setState);
  return <WallApp onBrand={setBrand} homeHref="/tools" />;
}
