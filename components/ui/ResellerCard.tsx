import { Coins } from "lucide-react";
import { ResellerPackage, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ResellerCard({ pkg }: { pkg: ResellerPackage }) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-6 sm:p-8",
        pkg.featured
          ? "border-gold-400/50 bg-gradient-to-b from-gold-400/10 to-white/[0.02] shadow-glow-gold"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      {pkg.featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
          Best Value
        </span>
      ) : null}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-400/20">
        <Coins className="h-6 w-6" />
      </div>
      <div>
        <h3 className="heading-md">{pkg.name}</h3>
        <p className="mt-1 text-2xl font-bold text-gold-300">{pkg.credits}</p>
      </div>
      <p className="text-sm text-slate-400">{pkg.bestFor}</p>
      <a
        href={whatsappLink(`Hi Strong 8K, I'm interested in the ${pkg.name} reseller package.`)}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "mt-auto w-full text-center",
          pkg.featured ? "btn-gold" : "btn-outline"
        )}
      >
        Choose {pkg.name}
      </a>
    </div>
  );
}
