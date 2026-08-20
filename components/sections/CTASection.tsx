import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowOrb } from "@/components/ui/BackgroundFX";
import { whatsappLink } from "@/lib/site-config";

type Props = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel = "View Subscription Plans",
  primaryHref = "/iptv-subscription",
  secondaryLabel = "Chat on WhatsApp",
  secondaryHref = whatsappLink("Hi Strong 8K, I'd like some help getting started."),
}: Props) {
  return (
    <section className="section-y relative overflow-hidden">
      <GlowOrb className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2" color="brand" />
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-600 via-ink-700 to-ink-900 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="heading-lg">{title}</h2>
            <p className="body-lg">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={primaryHref} className="btn-gold">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={secondaryHref} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle className="h-4 w-4" />
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
