import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BoardApp } from "../../tools/src/board/App";
import { useBrand } from "@/lib/brand-state";

export const Route = createFileRoute("/tools/board")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    view: s.view === "tv" ? ("tv" as const) : undefined,
  }),
  component: BoardTool,
});

function BoardTool() {
  const { view } = Route.useSearch();
  const nav = useNavigate();
  const setBrand = useBrand((s) => s.setState);
  return (
    <BoardApp
      onBrand={setBrand}
      tv={view === "tv"}
      onTv={(on) => nav({ to: "/tools/board", search: { view: on ? "tv" : undefined } })}
      homeHref="/tools"
    />
  );
}
