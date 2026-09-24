import { Link } from "@tanstack/react-router";
import type { tools } from "@/lib/tools";

type Tool = (typeof tools)[number];

const href = {
  wall: "/tools/wall",
  board: "/tools/board",
  stock: "/tools/stock",
} as const;

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      to={href[tool.slug]}
      className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors duration-150 ease-out hover:border-accent"
    >
      <p className="text-xs tracking-[0.16em] text-accent uppercase">
        {tool.n} · {tool.name}
      </p>
      <p className="mt-4 flex-1 text-lg leading-snug text-fg">{tool.blurb}</p>
      <p className="mt-6 text-sm text-muted">Open</p>
    </Link>
  );
}
