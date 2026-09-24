import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        This page is not here.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        The work is on the home page. This URL is not.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-full bg-amaranth px-5 text-sm font-medium text-fg transition-transform duration-150 hover:bg-accent active:scale-[0.96]"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
