import { createFileRoute } from "@tanstack/react-router";
import { ToolCard } from "@/components/tool-card";
import { pageHead } from "@/lib/seo";
import { tools } from "@/lib/tools";

export const Route = createFileRoute("/tools/")({
  head: () =>
    pageHead(
      "Tools",
      "Wall, Board, and Stock. A containment, what is blocking the day, and the min file.",
      "/tools",
    ),
  component: ToolsIndex,
});

function ToolsIndex() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">Tools</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        My wall. My board. My min file.
      </h1>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}
