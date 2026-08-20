import Link from "next/link";
import { Check } from "lucide-react";
import { Plan } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const perks = [
  "Live TV, sports, movies & series",
  "VOD library access",
  "EPG & catch-up where supported",
  "Multi-device compatibility",
  "WhatsApp & email support",
];

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-6 sm:p-8",
        plan.featured
          ? "border-brand-400/50 bg-gradient-to-b from-brand-500/10 to-white/[0.02] shadow-glow"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      {plan.featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
          Most Popular
        </span>
      ) : null}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
          {plan.name} IPTV Subscription
        </h3>
        <div className="mt-3 flex items-end gap-2">
          <span className="heading-lg">{plan.price}</span>
          <span className="pb-1 text-sm text-slate-400">
            / {plan.duration}
          </span>
        </div>
        <p className="mt-1 text-sm text-brand-300">{plan.monthly}</p>
      </div>
      <p className="text-sm text-slate-400">{plan.bestFor}</p>
      <ul className="flex flex-col gap-3">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
            {perk}
          </li>
        ))}
      </ul>
      <Link
        href="/contact-us"
        className={cn(
          "mt-auto w-full text-center",
          plan.featured ? "btn-primary" : "btn-outline"
        )}
      >
        Choose {plan.name}
      </Link>
    </div>
  );
}
