import { Link, useRouterState } from "@tanstack/react-router";
import { ApertureG } from "@/components/aperture-g";
import { useBrand } from "@/lib/brand-state";

const links = [
  { to: "/", hash: "work", label: "My work" },
  { to: "/tools", label: "My tools" },
  { to: "/notes", label: "My notes" },
] as const;

export function SiteHeader() {
  const state = useBrand((s) => s.state);
  const tv = useRouterState({
    select: (s) => s.location.pathname === "/tools/board" && s.location.searchStr.includes("view=tv"),
  });
  if (tv) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-3 text-fg no-underline"
          aria-label="Geoff Walsh home"
        >
          <ApertureG state={state} className="size-9 text-silver" />
          <span className="hidden leading-none sm:block">
            <span className="block font-semibold tracking-tight">Geoff</span>
            <span className="block text-sm font-medium text-silver">Walsh</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              className="inline-flex min-h-11 items-center px-3 text-sm text-silver transition-colors hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="ml-1 inline-flex min-h-11 items-center rounded-full bg-amaranth px-4 text-sm font-medium text-fg transition-transform duration-150 ease-out hover:bg-accent active:scale-[0.96]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
