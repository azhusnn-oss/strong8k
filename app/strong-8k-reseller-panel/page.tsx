import type { Metadata } from "next";
import {
  Users,
  Coins,
  PlayCircle,
  RefreshCcw,
  Activity,
  UserCog,
  Sparkles,
  LifeBuoy,
  Palette,
  Network,
  Tv,
  Smartphone,
  Apple,
  Box,
  Laptop,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResellerCard } from "@/components/ui/ResellerCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StepCard } from "@/components/ui/StepCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { resellerPackages, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strong 8K Reseller Panel – IPTV Reseller Packages",
  description:
    "Start with the Strong 8K reseller panel. Explore 120, 360 and 1,000 credit packages, customer management, reseller tools and support.",
  alternates: { canonical: "/strong-8k-reseller-panel" },
};

const panelFeatures = [
  { icon: Users, title: "Customer Management", description: "Manage your customer subscriptions from one reseller dashboard rather than handling each account separately." },
  { icon: Coins, title: "Credit Management", description: "Keep track of your available reseller credits and plan future purchases based on customer demand." },
  { icon: PlayCircle, title: "Subscription Activation", description: "Create customer subscriptions through the panel using your available reseller balance." },
  { icon: RefreshCcw, title: "Subscription Renewals", description: "Extend customer subscriptions when they are ready to renew, subject to the available reseller options." },
  { icon: Activity, title: "Customer Status", description: "Check account and subscription information from your reseller dashboard." },
  { icon: Sparkles, title: "Flexible Customer Plans", description: "Offer different subscription durations where supported by the reseller panel." },
  { icon: UserCog, title: "Trial Accounts", description: "Create trial accounts for potential customers if trial functionality is enabled for your reseller account." },
  { icon: LifeBuoy, title: "Reseller Support", description: "Get assistance with panel access, credit-related questions, customer activation and technical issues." },
];

const becomeReseller = [
  { title: "Understand the Service", description: "Before selling subscriptions, become familiar with the Strong 8K service, compatible devices and basic setup process." },
  { title: "Choose a Reseller Package", description: "Select the credit package that matches your expected customer volume — Starter, Basic or Premium." },
  { title: "Get Your Reseller Panel", description: "After your reseller account is activated, use the provided panel access details." },
  { title: "Create Your First Customer", description: "Use your available reseller credits to create a customer subscription through the panel." },
  { title: "Provide Setup Information", description: "Give your customer the relevant activation and installation information they need to configure their IPTV player." },
  { title: "Manage Renewals", description: "Monitor customer subscriptions and use your reseller panel to manage renewals when required." },
  { title: "Grow Your Customer Base", description: "As your customer base grows, choose larger credit packages based on your actual subscription demand." },
];

const whyUs = [
  { icon: LifeBuoy, title: "Reseller-Focused Panel", description: "Manage customer subscriptions and reseller credits through a dedicated dashboard." },
  { icon: Coins, title: "Flexible Credit Packages", description: "Choose between 120, 360 and 1,000 credits based on your business needs." },
  { icon: Users, title: "Customer Management", description: "Keep track of customer subscriptions and available account information from your panel." },
  { icon: Network, title: "Broad Device Compatibility", description: "Your customers can use supported Smart TVs, Firestick, Android TV, mobile devices, IPTV boxes and compatible players." },
  { icon: Sparkles, title: "Multiple Subscription Durations", description: "Create customer subscriptions for different durations where supported by the reseller system." },
  { icon: LifeBuoy, title: "Support", description: "Get assistance with reseller panel access, subscriptions, activation and technical questions through available support channels." },
];

const customerDevices = [
  { icon: Tv, label: "Firestick / Fire TV" },
  { icon: Tv, label: "Android TV & Smart TVs" },
  { icon: Smartphone, label: "Android phones & tablets" },
  { icon: Apple, label: "iPhone & iPad" },
  { icon: Box, label: "Compatible IPTV boxes" },
  { icon: Laptop, label: "Windows PCs" },
];

const faqs = [
  { question: "What is the Strong 8K IPTV reseller panel?", answer: "The Strong 8K reseller panel is a dashboard used by resellers to manage customer IPTV subscriptions, credits and related account functions." },
  { question: "How does the Strong 8K reseller panel work?", answer: "You purchase a reseller credit package, receive panel access and use your available credits to create or manage customer subscriptions according to the current reseller terms." },
  { question: "How many credits are available in the reseller packages?", answer: "The current package structure includes 120 credits for Starter, 360 credits for Basic and 1,000 credits for Premium." },
  { question: "How do Strong 8K reseller credits work?", answer: "Credits are used when creating or extending customer subscriptions. The number of credits required can depend on the subscription duration and current reseller terms." },
  { question: "Can I create customer subscriptions from the reseller panel?", answer: "Yes, the reseller panel is designed to allow resellers to create customer subscriptions using their available reseller balance, subject to the functions enabled on the account." },
  { question: "Can I sell Strong 8K IPTV under my own brand?", answer: "A white-label option may be available depending on your reseller package and current terms. Contact reseller support to confirm the available white-label features." },
  { question: "Which devices can my IPTV customers use?", answer: "Customers can use supported devices such as Firestick, Android TV, Smart TVs, smartphones, tablets, IPTV boxes and compatible IPTV players." },
  { question: "Can I offer different subscription durations to customers?", answer: "Different subscription durations can be offered where supported by the reseller panel and current reseller terms." },
  { question: "Can I create sub-resellers?", answer: "Sub-reseller functionality depends on the reseller account and current Strong 8K reseller terms. Contact support to confirm whether it is available for your package." },
  { question: "How do I become a Strong 8K IPTV reseller?", answer: "Choose a reseller credit package, complete the reseller registration or purchase process and obtain access to the reseller panel. Once activated, you can use your available credits to manage customer subscriptions." },
];

export default function ResellerPage() {
  return (
    <>
      <PageHero
        eyebrow="IPTV Reseller"
        title="Strong 8K IPTV Reseller Panel"
        description="Start your own IPTV reseller business with the Strong 8K reseller panel. Manage customer subscriptions, use reseller credits and organise activations from one place."
        actions={
          <a
            href={whatsappLink("Hi Strong 8K, I'd like to get the reseller panel.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            Get Reseller Panel
          </a>
        }
      />

      {/* How it works */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Reseller Model"
            title="Start Your IPTV Reseller Business"
            description="The Strong 8K reseller model is designed for businesses and individuals who want to sell IPTV subscriptions to their own customers."
          />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-center text-sm font-semibold text-slate-300">
            {["Buy Reseller Credits", "Create Customer Subscriptions", "Set Your Selling Price", "Manage Customers", "Renew Subscriptions"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-brand-300">
                  {step}
                </span>
                {i < arr.length - 1 ? <span className="text-slate-600">&rarr;</span> : null}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Reseller Packages"
            title="Strong 8K Reseller Packages"
            description="Choose a reseller package based on the number of credits you expect to use."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resellerPackages.map((pkg) => (
              <ResellerCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
            Reseller package prices, credit validity and exact credit usage
            should be confirmed before purchase. Credit usage can depend on
            the subscription duration selected for each customer.
          </p>
        </Container>
      </section>

      {/* How credits work */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Credit System"
            title="How Strong 8K Reseller Credits Work"
            description="Credits provide the balance you use when creating or extending customer subscriptions through the reseller panel."
          />
          <div className="mx-auto mt-10 max-w-3xl overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-6 py-4 font-semibold">Customer Subscription</th>
                  <th className="px-6 py-4 font-semibold">Credits Used</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1 month customer subscription", "1 credit"],
                  ["3 month customer subscription", "3 credits"],
                  ["6 month customer subscription", "6 credits"],
                  ["12 month customer subscription", "12 credits"],
                ].map(([label, credit], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}>
                    <td className="px-6 py-4 text-slate-300">{label}</td>
                    <td className="px-6 py-4 font-semibold text-gold-300">{credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-400">
            Example: a reseller with 120 credits could potentially create 120
            one-month subscriptions under a one-credit-per-month model — or
            fewer customers with longer subscription durations. The exact
            credit requirements should always be checked against your
            current reseller panel terms.
          </p>
        </Container>
      </section>

      {/* Panel features */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Inside The Panel"
            title="Strong 8K Reseller Panel Features"
            description="The reseller panel is the central place for managing your customer subscriptions."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {panelFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Container>
      </section>

      {/* White label */}
      <section className="section-y">
        <Container>
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">White Label</span>
              <h2 className="heading-lg mt-4">White Label IPTV Reseller</h2>
              <p className="body-lg mt-4">
                Want to build your own IPTV brand? Where white-label
                functionality is available, the Strong 8K reseller model can
                allow you to present the service under your own business
                identity.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                The exact white-label features available depend on the
                reseller package and current Strong 8K reseller terms.
              </p>
            </div>
            <div className="card flex flex-col gap-3 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-400/20">
                <Palette className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-white">A white-label approach can help you create:</p>
              <ul className="flex flex-col gap-2 text-sm text-slate-400">
                {[
                  "Your own business name",
                  "Your own branding",
                  "Your own customer-facing website",
                  "Your own subscription offers",
                  "Your own customer support process",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What customers get + devices */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Your Customers"
            title="What Your Customers Get"
            description="Your customers receive access to the Strong 8K IPTV service associated with the subscription you create for them — live TV, sports, movies, series, VOD, EPG and catch-up where available."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {customerDevices.map((d) => (
              <div key={d.label} className="card flex flex-col items-center gap-3 p-5 text-center">
                <d.icon className="h-6 w-6 text-brand-300" />
                <span className="text-xs font-medium text-slate-300">{d.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Become a reseller steps */}
      <section className="section-y">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Getting Started"
              title="How to Become a Strong 8K IPTV Reseller"
            />
            <div className="mt-10 flex flex-col">
              {becomeReseller.map((step, i) => (
                <StepCard key={step.title} index={i + 1} {...step} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Why Strong 8K"
            title="Why Choose Strong 8K as Your IPTV Supplier?"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center text-sm text-slate-400">
            <span className="font-semibold text-white">Sub-Reseller Option: </span>
            If your reseller account includes sub-reseller functionality, you
            may be able to create or manage additional reseller accounts
            under your reseller business. Confirm eligibility with support
            before offering sub-reseller access to others.
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Start Your IPTV Reseller Business?"
        description="Choose the reseller package that matches your expected customer volume and start managing IPTV subscriptions through the Strong 8K reseller panel."
        primaryLabel="Contact Reseller Support"
        primaryHref="/contact-us"
      />
    </>
  );
}
