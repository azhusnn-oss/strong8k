import Link from "next/link";
import {
  ArrowRight,
  Tv2,
  Trophy,
  Film,
  Smartphone,
  HeadphonesIcon,
  Sparkles,
  Gauge,
  ListVideo,
  Clock,
  Star,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DeviceCard } from "@/components/ui/DeviceCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScreenMockup } from "@/components/ui/ScreenMockup";
import { GridPattern, GlowOrb, LiveBadge } from "@/components/ui/BackgroundFX";
import { CTASection } from "@/components/sections/CTASection";
import { devices, plans, sports, whatsappLink } from "@/lib/site-config";

const whyChoose = [
  {
    icon: Gauge,
    title: "Flexible Subscription Options",
    description: "Choose from monthly, 3-month, 6-month and annual plans.",
  },
  {
    icon: Tv2,
    title: "Broad Entertainment Choice",
    description:
      "Live TV, sports, movies and series are available through one IPTV service.",
  },
  {
    icon: Trophy,
    title: "Sports-Focused Viewing",
    description:
      "Follow popular football competitions, boxing, PPV events and other major sports.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Flexibility",
    description: "Use compatible devices at home or on the move.",
  },
  {
    icon: Sparkles,
    title: "Simple IPTV Setup",
    description: "Configure the service through a supported IPTV player.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support When You Need It",
    description:
      "Get assistance through WhatsApp and email for setup and subscription questions.",
  },
];

const featureGrid = [
  { icon: Tv2, title: "Live TV Streaming", description: "Watch available live television channels over an internet connection." },
  { icon: Trophy, title: "Sports Coverage", description: "Access available sports programming, including football, boxing, basketball and more." },
  { icon: Film, title: "VOD Library", description: "Browse available movies and series through video-on-demand content." },
  { icon: ListVideo, title: "Electronic Programme Guide", description: "View programme information where EPG data is supported." },
  { icon: Clock, title: "Catch-Up TV", description: "Watch previously broadcast programmes where catch-up is available." },
  { icon: Smartphone, title: "Multiple Device Support", description: "Set up the service on compatible TVs, streaming devices, phones and IPTV boxes." },
];

const faqs = [
  {
    question: "What is Strong 8K IPTV?",
    answer:
      "Strong 8K IPTV is an IPTV service that delivers live television, sports, movies and series over an internet connection. It can be configured on compatible Smart TVs, streaming devices, mobile devices and IPTV players.",
  },
  {
    question: "What does a Strong 8K IPTV subscription include?",
    answer:
      "A subscription provides access to the content and features included with your selected plan. Depending on availability, this can include live TV, sports, VOD, movies, series, EPG and catch-up content.",
  },
  {
    question: "How much does Strong 8K IPTV cost?",
    answer:
      "Strong 8K IPTV plans currently start at £14.99 for one month. Longer options include £24.99 for three months, £39.99 for six months and £59.99 for one year.",
  },
  {
    question: "Can I watch Premier League and UEFA football?",
    answer:
      "Available sports programming can include major football competitions such as the Premier League and UEFA competitions, subject to the content available through the service at the time of viewing.",
  },
  {
    question: "Can I watch boxing, PPV events, NBA and other sports?",
    answer:
      "Sports availability can include boxing, PPV events, NBA, MLB and other leagues and competitions, depending on the available programming and event rights.",
  },
  {
    question: "Which devices can I use with Strong 8K IPTV?",
    answer:
      "You can configure Strong 8K on compatible Smart TVs, Firestick/Fire TV, Android TV devices, smartphones, tablets, IPTV boxes and supported IPTV players.",
  },
  {
    question: "How do I get help with my Strong 8K IPTV subscription?",
    answer:
      "For subscription, setup or general support questions, contact the Strong 8K team through WhatsApp or email. The support team can help with available setup information and account-related questions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div className="absolute inset-0">
          <GridPattern className="absolute inset-0 h-full w-full bg-grid-fade" />
          <GlowOrb className="absolute left-[-6rem] top-10 h-72 w-72" color="gold" />
          <GlowOrb className="absolute right-[-6rem] top-40 h-96 w-96" color="brand" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6 text-left">
              <LiveBadge label="Live TV · Sports · Movies · Series" />
              <h1 className="heading-xl">
                One IPTV Subscription. Every Screen.{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-gold-300 bg-clip-text text-transparent">
                  Strong 8K IPTV.
                </span>
              </h1>
              <p className="body-lg max-w-xl">
                Strong 8K IPTV is an IPTV service designed for viewers who
                want live television, sports, movies and series through an
                internet connection &mdash; across compatible TVs, streaming
                devices, mobile devices and IPTV players.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/iptv-subscription" className="btn-primary">
                  View Subscription Plans
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink("Hi Strong 8K, I'd like to start a trial.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Start IPTV Trial
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-slate-400">
                <span>Plans from <strong className="text-white">£14.99</strong></span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>Smart TV, Firestick, Android, iOS & more</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>WhatsApp &amp; email support</span>
              </div>
            </div>
            <ScreenMockup />
          </div>
        </Container>
      </section>

      {/* Trial & special offer strip */}
      <section className="border-y border-white/5 bg-ink-800/60">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-sm text-slate-300 sm:text-left">
            <span className="font-semibold text-gold-300">Trial &amp; Special Offer:</span>{" "}
            Try Strong 8K before choosing a longer package &mdash; special offer plans from{" "}
            <span className="font-semibold text-white">£49.99</span> when available.
          </p>
          <a
            href={whatsappLink("Hi Strong 8K, I'd like to claim the trial offer.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold shrink-0 !px-5 !py-2.5 text-sm"
          >
            Claim Offer
          </a>
        </Container>
      </section>

      {/* What is Strong 8K */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="About The Service"
            title="What Is Strong 8K IPTV?"
            description="Strong 8K IPTV brings different types of entertainment together in one IPTV service. Whether you watch live sports, entertainment channels or on-demand content, Strong 8K IPTV provides a flexible way to watch your favourite content online."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureGrid.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Container>
      </section>

      {/* Sports strip */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Sports Coverage"
            title="Follow The Sports You Love"
            description="Sports coverage can include popular competitions and events, alongside other sports and leagues, subject to availability."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {sports.map((sport) => (
              <span
                key={sport}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300"
              >
                {sport}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Plans preview */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Subscription Plans"
            title="Choose Your Strong 8K IPTV Plan"
            description="Flexible plans for different viewing needs — from a short-term trial period to the lowest average monthly cost with an annual plan."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/iptv-subscription" className="btn-outline">
              Compare All Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Devices */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Compatible Devices"
            title="Watch On The Devices You Already Own"
            description="Strong 8K IPTV can be used across a range of compatible devices and IPTV applications."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <DeviceCard key={device.name} device={device} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Why Strong 8K"
            title="Why Choose Strong 8K IPTV?"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Strong 8K IPTV Reviews"
            description="We value feedback from customers who use Strong 8K IPTV. Genuine reviews help new users understand the setup process, service experience and support available."
          />
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
            <div className="flex gap-1 text-gold-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Verified customer reviews are coming soon. Have you used Strong
              8K IPTV? Share your experience with our support team and we
              may feature it here.
            </p>
            <a
              href={whatsappLink("Hi Strong 8K, I'd like to share a review.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline !px-5 !py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Share Your Feedback
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Get Started With Strong 8K IPTV?"
        description="Need help choosing a subscription or setting up Strong 8K IPTV? Our support team is ready on WhatsApp and email."
      />
    </>
  );
}
