import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { tools } from "@/lib/tools";

type Tool = (typeof tools)[number];

const href = {
  wall: "/tools/wall",
  board: "/tools/board",
  stock: "/tools/stock",
} as const;

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
      <Link to={href[tool.slug]} className="block transition-colors hover:text-silver">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          {tool.n} · {tool.name}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{tool.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm text-fg">
          Open my {tool.name} <ArrowRight className="size-4" />
        </span>
      </Link>
      <a
        href={tool.github}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex min-h-11 items-center font-mono text-xs tracking-wide text-silver uppercase hover:text-fg"
      >
        GitHub
      </a>
    </div>
  );
}
