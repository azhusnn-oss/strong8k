import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Strong 8K home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-200 to-gold-600 font-display text-base font-extrabold text-ink-900 shadow-glow">
        S8
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Strong
        <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
          {" "}
          8K
        </span>
      </span>
    </Link>
  );
}
