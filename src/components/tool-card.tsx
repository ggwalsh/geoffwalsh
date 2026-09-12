import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { tools } from "@/lib/tools";

type Tool = (typeof tools)[number];

const href = {
  wall: "/tools/wall",
  board: "/tools/board",
} as const;

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      to={href[tool.slug]}
      className="block rounded-lg border border-line bg-surface p-6 transition-colors hover:border-amaranth sm:p-8"
    >
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        {tool.n} · {tool.name}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{tool.blurb}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm text-fg">
        Open {tool.name} <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
