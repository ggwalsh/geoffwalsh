import { useRouterState } from "@tanstack/react-router";
import { ApertureG } from "@/components/aperture-g";

export function SiteFooter() {
  const tv = useRouterState({
    select: (s) => s.location.pathname === "/tools/board" && s.location.searchStr.includes("view=tv"),
  });
  if (tv) return null;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-silver">
          <ApertureG state="idle" className="size-7" />
          <p className="font-mono text-xs tracking-widest uppercase">
            Geoff Walsh · Calgary ·{" "}
            <a href="https://x.com/Daghet" target="_blank" rel="noreferrer" className="hover:text-fg">
              @Daghet
            </a>
          </p>
        </div>
        <p className="font-mono text-xs tracking-wide text-muted">
          Operations · Data · Tools
        </p>
      </div>
    </footer>
  );
}
