import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  CreditCard,
  RefreshCcw,
  ShieldCheck,
  PlusCircle,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { DeviceCard } from "@/components/ui/DeviceCard";
import { StepCard } from "@/components/ui/StepCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { devices, plans, sports, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strong 8K IPTV Subscription – Plans from £14.99",
  description:
    "Choose a Strong 8K IPTV subscription from £14.99. Compare 1, 3, 6 and 12-month plans with live TV, sports, VOD and device support.",
  alternates: { canonical: "/iptv-subscription" },
};

const included = [
  "Live TV across available entertainment, news, sports and international categories",
  "Movies and series through available VOD content",
  "Live sports covering popular competitions and sporting events",
  "EPG for programme information where supported",
  "Catch-up TV where available",
  "HD, Full HD and 4K content where supported by the source and device",
  "Compatible IPTV player support",
  "Multiple compatible device options",
  "Customer assistance through WhatsApp and email",
];

const recommendations = [
  {
    title: "New to IPTV?",
    plan: "1 Month — £14.99",
    description:
      "A flexible way to get started without choosing a longer subscription.",
  },
  {
    title: "Want a few months of access?",
    plan: "3 Months — £24.99",
    description:
      "A longer viewing period while keeping your commitment relatively short.",
  },
  {
    title: "A regular IPTV viewer?",
    plan: "6 Months — £39.99",
    description: "Suits viewers who expect to use Strong 8K regularly.",
  },
  {
    title: "Lowest average monthly cost?",
    plan: "1 Year — £59.99",
    description:
      "Works out at approximately £5 per month — the lowest average price among the available plans.",
  },
];

const steps = [
  { title: "Choose Your Plan", description: "Select the Strong 8K IPTV subscription that matches your preferred duration." },
  { title: "Complete Your Order", description: "Provide the required information and complete your purchase using the available payment method." },
  { title: "Receive Your IPTV Details", description: "After your order is processed, you will receive the information needed to configure the service." },
  { title: "Set Up Your IPTV Player", description: "Install a compatible IPTV application on your chosen device and enter your provided connection details." },
  { title: "Start Watching", description: "Once your IPTV player is configured, access the live TV, sports and VOD content included with your subscription." },
];

const faqs = [
  {
    question: "How much does a Strong 8K IPTV subscription cost?",
    answer:
      "Strong 8K IPTV subscriptions currently start at £14.99 for one month. The available plans are £24.99 for three months, £39.99 for six months and £59.99 for one year.",
  },
  {
    question: "Which Strong 8K IPTV subscription should I choose?",
    answer:
      "It depends on how long you expect to use the service. The one-month plan suits short-term viewing, while the six-month and one-year options are better suited to regular or long-term users.",
  },
  {
    question: "What is included with a Strong 8K IPTV subscription?",
    answer:
      "Depending on available programming, the service can include live TV, sports, movies, series, VOD, EPG and catch-up content. Available features and content can vary.",
  },
  {
    question: "Does Strong 8K offer an IPTV trial?",
    answer:
      "A Strong 8K IPTV trial may be available depending on the current offer. Contact support to confirm the current trial duration, availability and conditions.",
  },
  {
    question: "Can I watch Premier League and UEFA competitions?",
    answer:
      "Available sports programming can include Premier League and UEFA competitions. Specific channels and events can change, so availability should be confirmed before purchase.",
  },
  {
    question: "Can I use Strong 8K IPTV on Firestick?",
    answer:
      "Yes. Strong 8K can be configured on a compatible Firestick or Fire TV setup using a supported IPTV player.",
  },
  {
    question: "How do I activate my Strong 8K IPTV subscription?",
    answer:
      "Choose your plan, complete your order and follow the activation information provided after purchase. You can then configure a compatible IPTV player on your chosen device.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "Available payment methods are shown during the current checkout process. Contact support if you need help confirming an available payment option before ordering.",
  },
  {
    question: "Can I upgrade my IPTV subscription later?",
    answer:
      "Subscription changes depend on the applicable Strong 8K terms. Contact support before purchasing or changing a plan if you need information about upgrades or extensions.",
  },
  {
    question: "What is the Strong 8K refund policy?",
    answer:
      "Refund eligibility depends on the current refund terms and the circumstances of the purchase. Review the refund policy before completing your order or contact support if you need clarification.",
  },
];

export default function SubscriptionPage() {
  return (
    <>
      <PageHero
        eyebrow="IPTV Subscription"
        title="Strong 8K IPTV Subscription Plans"
        description="Choose a Strong 8K IPTV subscription that fits your viewing needs. Get access to live TV, sports, movies, series and VOD through compatible devices and IPTV players — with flexible durations from one month to one year."
        actions={
          <>
            <a href="#plans" className="btn-primary">
              View Plans
            </a>
            <a
              href={whatsappLink("Hi Strong 8K, I'd like to start a trial.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Start IPTV Trial
            </a>
          </>
        }
      />

      {/* Plans */}
      <section id="plans" className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Choose Your Strong 8K IPTV Plan"
            description="Every plan provides the core Strong 8K IPTV service — the main difference is the subscription period."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Compare Plans"
            title="Compare Strong 8K IPTV Subscription Plans"
            description="The longer plans reduce the average monthly cost. Choose the duration based on how frequently you expect to use the service."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-6 py-4 font-semibold">Subscription</th>
                  <th className="px-6 py-4 font-semibold">Total Price</th>
                  <th className="px-6 py-4 font-semibold">Approx. Monthly Cost</th>
                  <th className="px-6 py-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr
                    key={plan.id}
                    className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}
                  >
                    <td className="px-6 py-4 font-medium text-white">{plan.duration}</td>
                    <td className="px-6 py-4 text-slate-300">{plan.price}</td>
                    <td className="px-6 py-4 text-brand-300">{plan.monthly}</td>
                    <td className="px-6 py-4 text-slate-400">{plan.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="What's Included"
            title="What Is Included With Every Strong 8K IPTV Subscription?"
            description="A Strong 8K IPTV subscription brings different types of entertainment together in one service."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
            Content availability and picture quality can vary by programme,
            source, device and network connection.
          </p>
        </Container>
      </section>

      {/* Sports */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Live Sports"
            title="Watch Live Sports & Entertainment"
            description="Sports are a major reason many viewers choose an IPTV subscription. Depending on available programming, sports coverage can include:"
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
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
            Sports and event availability can change, so specific programming
            should always be checked before purchase.
          </p>
        </Container>
      </section>

      {/* Which plan */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Not Sure Which Plan?"
            title="Which Strong 8K IPTV Subscription Is Right for You?"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.map((rec) => (
              <div key={rec.title} className="card-hover flex flex-col gap-3 p-6">
                <PlusCircle className="h-6 w-6 text-gold-300" />
                <h3 className="text-base font-semibold text-white">{rec.title}</h3>
                <p className="text-sm font-semibold text-brand-300">{rec.plan}</p>
                <p className="text-sm text-slate-400">{rec.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Getting Started"
                title="How Strong 8K IPTV Subscription Works"
                description="Getting started is straightforward."
              />
              <div className="mt-10 flex flex-col">
                {steps.map((step, i) => (
                  <StepCard key={step.title} index={i + 1} {...step} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Devices"
                title="Devices & IPTV Player Compatibility"
              />
              <div className="mt-8 grid gap-4">
                {devices.slice(0, 6).map((device) => (
                  <DeviceCard key={device.name} device={device} />
                ))}
              </div>
              <Link
                href="/strong-8k-iptv-installation"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                View the full Strong 8K IPTV Setup Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Payment / renewal / refund */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Good To Know"
            title="Payment, Renewal & Refund Information"
            description="Before purchasing an IPTV subscription, it is useful to understand the basic payment and refund terms."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard title="Payment">
              <CreditCard className="mb-3 h-5 w-5 text-brand-300" />
              Strong 8K accepts the payment methods currently displayed
              during the checkout process. Available options may change over
              time.
            </InfoCard>
            <InfoCard title="Renewal">
              <RefreshCcw className="mb-3 h-5 w-5 text-brand-300" />
              Check the subscription terms provided at the time of purchase
              to understand whether your plan renews automatically or
              requires manual renewal.
            </InfoCard>
            <InfoCard title="Refunds">
              <ShieldCheck className="mb-3 h-5 w-5 text-brand-300" />
              Refund eligibility depends on the applicable Strong 8K refund
              policy and the circumstances of your purchase.
            </InfoCard>
            <InfoCard title="Additional Costs">
              <PlusCircle className="mb-3 h-5 w-5 text-brand-300" />
              Check the subscription price against current plan information
              before payment. Optional services should be clearly identified
              before purchase.
            </InfoCard>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Choose Your Strong 8K IPTV Subscription?"
        description="Get access to available live TV, sports, movies, series and VOD through compatible devices and IPTV players."
      />
    </>
  );
}
