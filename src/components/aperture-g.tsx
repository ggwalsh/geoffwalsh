import { cn } from "@/lib/utils";
import type { BrandState } from "@/lib/brand-state";

type Props = {
  state?: BrandState;
  className?: string;
  title?: string;
  decorative?: boolean;
};

export function ApertureG({
  state = "idle",
  className,
  title = "Geoff Walsh",
  decorative = false,
}: Props) {
  return (
    <svg
      className={cn("gw-mark overflow-visible text-silver", className)}
      viewBox="0 0 160 160"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      data-state={state}
    >
      <path className="arc" fill="none" stroke="currentColor" strokeWidth="11" d="M116 48 A42 42 0 1 0 122 100" />
      <g className="cross">
        <line className="bar" strokeWidth="10" strokeLinecap="square" x1="80" y1="80" x2="126" y2="80" />
        <rect className="tick" x="118" y="74" width="13" height="13" />
      </g>
    </svg>
  );
}
