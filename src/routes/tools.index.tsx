import { createFileRoute } from "@tanstack/react-router";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/lib/tools";

export const Route = createFileRoute("/tools/")({ component: ToolsIndex });

function ToolsIndex() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">Tools</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        Small systems for messy ops.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Wall is the planner. Board is the day. Both stay on this device.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}
