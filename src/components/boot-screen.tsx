import { useEffect, useState } from "react";
import { ApertureG } from "@/components/aperture-g";
import type { BrandState } from "@/lib/brand-state";

export function BootScreen() {
  const [state, setState] = useState<BrandState>("build");
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.boot === "done") {
      setGone(true);
      return;
    }

    const t1 = window.setTimeout(() => setState("done"), 1400);
    let t3 = 0;
    const t2 = window.setTimeout(() => {
      document.documentElement.dataset.boot = "done";
      try {
        localStorage.setItem("gw-boot", "1");
      } catch {
        /* private mode */
      }
      t3 = window.setTimeout(() => setGone(true), 480);
    }, 1880);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  if (gone) return null;

  return (
    <div className="gw-boot" role="status" aria-live="polite" aria-label="Loading">
      <div className="flex flex-col items-center gap-5">
        <ApertureG state={state} className="size-24 text-silver sm:size-28" />
        <p className="font-mono text-xs tracking-widest text-muted uppercase">Geoff Walsh</p>
      </div>
    </div>
  );
}
