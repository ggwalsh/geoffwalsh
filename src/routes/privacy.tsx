import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy",
      "Nothing is collected here. No accounts, no analytics, no forms.",
      "/privacy",
    ),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">Privacy</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Nothing is collected here.</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        No accounts, no analytics, no forms. A CSV you drop into Stock stays in the browser and is not
        uploaded. Email goes to your mail app, not to this site.
      </p>
    </main>
  );
}
