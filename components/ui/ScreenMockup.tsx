import { Play, Signal, Wifi } from "lucide-react";

const tiles = [
  { color: "from-gold-600 to-gold-900", label: "LIVE" },
  { color: "from-gold-400 to-gold-700", label: "SPORT" },
  { color: "from-live-500 to-live-600", label: "PPV" },
  { color: "from-ink-500 to-ink-700", label: "VOD" },
  { color: "from-gold-500 to-gold-800", label: "4K" },
  { color: "from-ink-600 to-gold-800", label: "EPG" },
];

export function ScreenMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float">
      {/* TV frame */}
      <div className="relative rounded-2xl border border-white/10 bg-ink-700/80 p-3 shadow-card backdrop-blur">
        <div className="flex items-center justify-between px-2 pb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span className="h-2 w-2 rounded-full bg-live-500" />
            Strong 8K
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Wifi className="h-3.5 w-3.5" />
            <Signal className="h-3.5 w-3.5" />
            <span className="rounded bg-gold-400/20 px-1.5 py-0.5 text-[10px] font-bold text-gold-300">
              8K
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-ink-900/60 p-2">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`relative flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br ${tile.color} shadow-inner`}
            >
              <Play className="h-5 w-5 text-white/90" fill="currentColor" />
              <span className="absolute bottom-1 left-1.5 text-[9px] font-bold tracking-wide text-white/85">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between px-1">
          <div className="h-1.5 w-24 rounded-full bg-white/10">
            <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-brand-400 to-gold-300" />
          </div>
          <span className="text-[10px] text-slate-500">Now Streaming</span>
        </div>
      </div>
      {/* Stand */}
      <div className="mx-auto h-4 w-24 rounded-b-xl bg-ink-600/80" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-ink-500/70" />
    </div>
  );
}
