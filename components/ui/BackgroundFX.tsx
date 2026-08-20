export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}

export function GlowOrb({
  className = "",
  color = "brand",
}: {
  className?: string;
  color?: "brand" | "gold" | "live";
}) {
  const colors = {
    brand: "rgba(10,150,245,0.35)",
    gold: "rgba(255,176,32,0.28)",
    live: "rgba(255,59,78,0.25)",
  };
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
    />
  );
}

export function LiveBadge({ label = "LIVE" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-live-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-live-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-live-500" />
      </span>
      {label}
    </span>
  );
}
