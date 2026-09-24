import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ApertureG } from "@/components/aperture-g";
import { useBrand } from "@/lib/brand-state";

const links = [
  { to: "/", hash: "work", label: "Work" },
  { to: "/tools/board", label: "Board" },
  { to: "/tools/stock", label: "Stock" },
  { to: "/tools/wall", label: "Wall" },
] as const;

export function SiteHeader() {
  const state = useBrand((s) => s.state);
  const [open, setOpen] = useState(false);
  const tv = useRouterState({
    select: (s) => s.location.pathname === "/tools/board" && s.location.searchStr.includes("view=tv"),
  });
  if (tv) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-h-11 items-center gap-3 text-fg no-underline" aria-label="Geoff Walsh home">
          <ApertureG state={state} className="size-8 text-silver" />
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-tight">Geoff Walsh</span>
            <span className="block text-xs text-muted">Calgary</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              className="text-sm text-muted hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="inline-flex h-10 items-center rounded-full bg-amaranth px-4 text-sm font-medium text-fg hover:bg-accent"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={"hash" in link ? link.hash : undefined}
                className="inline-flex min-h-11 items-center text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contact"
              className="inline-flex min-h-11 items-center text-sm text-fg"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
