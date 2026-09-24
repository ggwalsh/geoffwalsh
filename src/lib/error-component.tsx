import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">Error</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Something broke.</h1>
      <p className="mt-4 text-sm leading-relaxed break-words text-muted">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 w-fit items-center rounded-full border border-line px-5 text-sm text-silver transition-colors hover:border-silver hover:text-fg"
      >
        Home
      </Link>
    </main>
  );
}
