import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Tv,
  Wrench,
  Users,
  HelpCircle,
  FileText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/ui/InfoCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { mailLink, siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Strong 8K – IPTV Support & Assistance",
  description:
    "Contact Strong 8K for IPTV subscription, installation, technical and reseller support. Get assistance through WhatsApp, email or our contact form.",
  alternates: { canonical: "/contact-us" },
};

const helpCategories = [
  { icon: Tv, title: "IPTV Subscription", description: "Questions about Strong 8K IPTV plans, pricing, trials or subscription activation." },
  { icon: Wrench, title: "IPTV Setup & Installation", description: "Need help setting up Strong 8K on Firestick, Android TV, Smart TV, mobile or an IPTV box?" },
  { icon: HelpCircle, title: "Technical Support", description: "Trouble with your IPTV player, login, M3U playlist, Xtream Codes or EPG?" },
  { icon: Users, title: "Reseller Support", description: "Interested in the reseller panel or managing customer subscriptions already?" },
];

const beforeContact = [
  "Your device type and model",
  "IPTV app or player you are using",
  "A description of the problem",
  "Any error message displayed",
  "A screenshot where useful",
  "The steps you have already tried",
];

const quickLinks = [
  { title: "Strong 8K IPTV Subscription", description: "Compare available subscription durations, pricing and plan options.", href: "/iptv-subscription" },
  { title: "Strong 8K App & IPTV Player", description: "Find the 8K Pro app, Downloader setup and supported players.", href: "/strong-8k-app" },
  { title: "Strong 8K IPTV Setup & Installation", description: "Device-specific instructions for Firestick, Android TV, Smart TV and more.", href: "/strong-8k-iptv-installation" },
  { title: "Strong 8K Reseller Panel", description: "Learn about reseller credits, panel features and packages.", href: "/strong-8k-reseller-panel" },
];

const faqs = [
  { question: "How can I contact Strong 8K?", answer: "You can contact Strong 8K through WhatsApp or email. You can also use the contact form for subscription, installation, technical and reseller enquiries." },
  { question: "Can I contact Strong 8K through WhatsApp?", answer: "Yes. WhatsApp is available for quick questions about Strong 8K subscriptions, activation, installation and general support." },
  { question: "Can you help me install Strong 8K IPTV?", answer: "Yes. Support can help with general installation questions for compatible devices and IPTV players. You can also follow our Strong 8K IPTV Setup & Installation Guide for step-by-step instructions." },
  { question: "Can I ask about Strong 8K subscription plans before purchasing?", answer: "Yes. Contact support if you need clarification about available subscription plans, pricing, trial options or activation before placing an order." },
  { question: "How can I contact Strong 8K reseller support?", answer: "Resellers can contact support through WhatsApp or email for questions about reseller packages, credits, panel access, customer subscriptions and account-related issues." },
  { question: "What information should I provide when reporting a technical issue?", answer: "Tell us which device and IPTV player you are using, describe the problem, include any error message and provide a screenshot when it helps explain the issue." },
  { question: "How long does Strong 8K support take to respond?", answer: "Response times can vary depending on the type and volume of enquiries. Providing complete information with your initial message can help the support team understand your request more efficiently." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact Strong 8K"
        description="Need help with your Strong 8K IPTV subscription, app, installation or reseller account? Our support team is here to help via WhatsApp or email."
        actions={
          <>
            <a
              href={whatsappLink("Hi Strong 8K, I need some help.")}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Support
            </a>
            <a href={mailLink()} className="btn-outline">
              <Mail className="h-4 w-4" />
              Email Support
            </a>
          </>
        }
      />

      {/* How can we help */}
      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Support Topics" title="How Can We Help?" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {helpCategories.map((c) => (
              <div key={c.title} className="card-hover flex flex-col gap-3 p-6">
                <c.icon className="h-6 w-6 text-brand-300" />
                <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-slate-400">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact methods + form */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="Get In Touch"
                title="Contact Strong 8K Support"
                description="Choose the contact method that works best for you."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappLink("Hi Strong 8K, I need some help.")}
                  target="_blank"
                  rel="noreferrer"
                  className="card-hover flex flex-col gap-3 p-6"
                >
                  <MessageCircle className="h-6 w-6 text-brand-300" />
                  <h3 className="text-sm font-semibold text-white">WhatsApp Support</h3>
                  <p className="text-sm text-slate-400">
                    Convenient for quick questions about subscriptions,
                    activation, installation and general assistance.
                  </p>
                </a>
                <a href={mailLink()} className="card-hover flex flex-col gap-3 p-6">
                  <Mail className="h-6 w-6 text-brand-300" />
                  <h3 className="text-sm font-semibold text-white">Email Support</h3>
                  <p className="text-sm text-slate-400">
                    Useful for detailed questions, account enquiries and
                    technical issues that require more information.
                  </p>
                  <p className="text-xs font-medium text-brand-300">{siteConfig.supportEmail}</p>
                </a>
              </div>

              <InfoCard title="Before Contacting Support">
                <FileText className="mb-3 h-5 w-5 text-brand-300" />
                <p className="mb-3">
                  Providing the right information helps us understand your
                  issue more quickly. For technical questions, include:
                </p>
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {beforeContact.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Never send your password or other sensitive login
                  information through a public form or message unless
                  specifically required through a secure support process.
                </p>
              </InfoCard>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Contact Form
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Quick links */}
      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Quick Links" title="Looking For Information Instead?" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((q) => (
              <Link key={q.href} href={q.href} className="card-hover flex flex-col gap-2 p-6">
                <h3 className="text-sm font-semibold text-white">{q.title}</h3>
                <p className="text-sm text-slate-400">{q.description}</p>
              </Link>
            ))}
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
    </>
  );
}
