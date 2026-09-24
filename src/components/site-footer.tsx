import { Link, useRouterState } from "@tanstack/react-router";
import { ApertureG } from "@/components/aperture-g";

export function SiteFooter() {
  const tv = useRouterState({
    select: (s) => s.location.pathname === "/tools/board" && s.location.searchStr.includes("view=tv"),
  });
  if (tv) return null;
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-center gap-3">
          <ApertureG state="idle" className="size-8" />
          <span>Geoff Walsh · Calgary</span>
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="https://x.com/Daghet" target="_blank" rel="noreferrer" className="hover:text-fg">
            @Daghet
          </a>
          <a href="https://github.com/ggwalsh" target="_blank" rel="noreferrer" className="hover:text-fg">
            GitHub
          </a>
          <Link to="/privacy" className="hover:text-fg">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
