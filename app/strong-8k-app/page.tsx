import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Tv,
  Apple,
  Laptop,
  KeyRound,
  ListVideo,
  Search,
  Heart,
  Tags,
  Gamepad2,
  Wifi,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/ui/StepCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strong 8K App & IPTV Player – Download & Setup",
  description:
    "Download and set up the Strong 8K app or compatible IPTV player. Find the 8K Pro Downloader code, device options, login methods and setup help.",
  alternates: { canonical: "/strong-8k-app" },
};

const deviceGuides = [
  { icon: Tv, title: "Android & Android TV", description: "Install the 8K Pro app or another compatible IPTV player, then enter your Strong 8K subscription details." },
  { icon: Tv, title: "Amazon Firestick & Fire TV", description: "Use the 8K Pro app via Downloader with the current code, then follow the installation instructions carefully." },
  { icon: Tv, title: "Samsung Smart TV", description: "Install a compatible IPTV application from the Samsung TV app store and configure it with your details." },
  { icon: Tv, title: "LG Smart TV", description: "Install a compatible IPTV player from the LG TV app store and enter your connection details." },
  { icon: Apple, title: "iPhone & iPad", description: "Install a compatible IPTV player from the Apple App Store, then configure it with your login or playlist information." },
  { icon: Laptop, title: "Windows PC", description: "Use a compatible IPTV application or player that supports your provided connection method." },
];

const installSteps = [
  { title: "Install Downloader", description: "On compatible Fire TV or Android-based devices, install the Downloader application if required." },
  { title: "Enter the 8K Pro Downloader Code", description: "Open Downloader and enter the current 8K Pro code supplied by Strong 8K." },
  { title: "Download the App", description: "Follow the on-screen instructions to download the 8K Pro installation package." },
  { title: "Install 8K Pro", description: "Open the downloaded file and complete the installation." },
  { title: "Open 8K Pro", description: "Launch the app after installation." },
  { title: "Enter Your Strong 8K Details", description: "Use the subscription information provided after purchasing your Strong 8K IPTV plan." },
  { title: "Start Watching", description: "Once your account or playlist has loaded, browse the available live TV, sports, movies, series and VOD content." },
];

const features = [
  { icon: Tv, title: "Live TV", description: "Browse available live channels." },
  { icon: ListVideo, title: "VOD", description: "Access available movies and series." },
  { icon: ListVideo, title: "EPG", description: "View programme information where supported." },
  { icon: ListVideo, title: "Catch-Up", description: "Access previously broadcast content where available." },
  { icon: Tags, title: "Channel Categories", description: "Organise channels for easier browsing." },
  { icon: Search, title: "Search", description: "Find available channels and VOD content." },
  { icon: Heart, title: "Favourites", description: "Save frequently watched channels in supported players." },
  { icon: Gamepad2, title: "TV-Friendly Navigation", description: "Use supported applications with a compatible remote control." },
];

const problems = [
  { title: "The 8K Pro App Will Not Install", description: "Check that your device supports the application and that you are using the correct installation method. Android APK files are not designed for every Smart TV platform." },
  { title: "The Downloader Code Does Not Work", description: "Downloader codes can change. Check that you are using the latest 8K Pro code provided by Strong 8K." },
  { title: "The App Opens but Shows No Content", description: "Check your Strong 8K login information and internet connection. Make sure the subscription details have been entered correctly." },
  { title: "Strong 8K IPTV Is Buffering", description: "Check your network connection and restart your router and streaming device. Ethernet or a suitable 5 GHz Wi-Fi connection may help." },
  { title: "EPG Is Not Showing", description: "Check whether your IPTV player has loaded the correct EPG information. Some players require EPG details to be entered separately." },
  { title: "Login Details Are Not Working", description: "Recheck your username, password and server information. Copy the details carefully and avoid adding unwanted spaces." },
];

const faqs = [
  { question: "What is the 8K Pro app?", answer: "The 8K Pro app is an IPTV application used on supported devices to access a compatible Strong 8K IPTV subscription." },
  { question: "What is the 8K Pro Downloader code?", answer: "The Downloader code is a short code used to access the 8K Pro installation package through the Downloader application. Because codes can change, use the latest code supplied by Strong 8K." },
  { question: "Where can I find the latest 8K Pro Downloader code?", answer: "Use the current code displayed on the official Strong 8K installation instructions or contact Strong 8K support if you need the latest installation information." },
  { question: "Can I install 8K Pro on Firestick?", answer: "The 8K Pro app can be installed on supported Fire TV and Firestick setups using the appropriate installation method and current Downloader code." },
  { question: "Does 8K Pro work on Android TV?", answer: "The 8K Pro app can be used on supported Android TV devices. The exact installation method depends on the device and application version." },
  { question: "Can I use another IPTV player with Strong 8K?", answer: "Yes, where the player supports the relevant Strong 8K connection method. Options can include compatible players that support M3U or Xtream Codes." },
  { question: "Does Strong 8K support M3U?", answer: "Strong 8K can be configured through an M3U-compatible IPTV player when an M3U playlist is provided with the subscription." },
  { question: "Does Strong 8K support Xtream Codes?", answer: "Compatible IPTV players can use Xtream Codes login details when this connection method is provided with your subscription." },
  { question: "Can I use Strong 8K on Samsung or LG Smart TV?", answer: "Yes, where a compatible IPTV application is available for the relevant TV platform. Samsung and LG Smart TVs require applications designed for their respective platforms rather than Android APK installation." },
  { question: "What should I do if I cannot install 8K Pro?", answer: "Check your device compatibility and make sure you are using the latest installation instructions and Downloader code. If you still need assistance, contact Strong 8K support." },
];

export default function AppPlayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Strong 8K App & IPTV Player"
        title="Strong 8K App & IPTV Player"
        description="Looking for the Strong 8K app or a compatible IPTV player? Access Strong 8K on supported devices, choose the right IPTV player and configure your subscription — with download options, login methods and troubleshooting guidance."
        actions={
          <>
            <a href="#download" className="btn-primary">
              <Download className="h-4 w-4" />
              Download Strong 8K App
            </a>
            <Link href="/strong-8k-iptv-installation" className="btn-outline">
              Installation Guide
            </Link>
          </>
        }
      />

      {/* Downloader code */}
      <section id="download" className="section-y">
        <Container>
          <SectionHeading
            eyebrow="8K Pro App"
            title="Download Strong 8K App"
            description="Strong 8K can be accessed through the 8K Pro app or other compatible IPTV players, depending on your device and available setup method."
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold-400/30 bg-gold-400/[0.06] p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              8K Pro App Downloader Code
            </p>
            <p className="mt-4 font-display text-4xl font-extrabold tracking-widest text-white">
              {siteConfig.downloaderCode}
            </p>
            <p className="mt-4 text-sm text-slate-400">
              If you are installing the 8K Pro app through Downloader, enter
              the current Strong 8K Downloader code provided by our support
              team or official installation instructions.
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-gold-300/90">
              <AlertTriangle className="h-4 w-4" />
              Downloader codes can change — always use the latest code
              published by Strong 8K or supplied by support.
            </p>
          </div>
        </Container>
      </section>

      {/* Device guides */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Choose Your Device"
            title="Set Up Strong 8K On Any Device"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deviceGuides.map((d) => (
              <FeatureCard key={d.title} {...d} />
            ))}
          </div>
        </Container>
      </section>

      {/* 8K Pro vs other players */}
      <section className="section-y">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Choosing A Player"
              title="8K Pro App vs Other IPTV Players"
              description="The 8K Pro app can be a convenient choice for supported Android-based devices. Other compatible IPTV players may be useful when:"
            />
            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Your device does not support the 8K Pro app.",
                "You already use a preferred IPTV player.",
                "You need a specific feature offered by another player.",
                "Your Smart TV requires an application designed for its platform.",
                "You want to use M3U or Xtream Codes login through a compatible application.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Install steps */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Step By Step"
              title="How to Install the 8K Pro App"
            />
            <div className="mt-10 flex flex-col">
              {installSteps.map((step, i) => (
                <StepCard key={step.title} index={i + 1} {...step} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Login methods */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Login Methods"
            title="Strong 8K Login Methods"
            description="The 8K Pro app or another compatible IPTV player may support different connection methods."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <InfoCard title="Xtream Codes">
              <KeyRound className="mb-3 h-5 w-5 text-brand-300" />
              <p className="mb-2">A compatible player may request:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Username</li>
                <li>Password</li>
                <li>Server or portal URL</li>
              </ul>
              <p className="mt-3">Enter the details exactly as provided.</p>
            </InfoCard>
            <InfoCard title="M3U Playlist">
              <Wifi className="mb-3 h-5 w-5 text-brand-300" />
              <p className="mb-2">An M3U-compatible player may request:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>M3U playlist URL</li>
                <li>EPG URL, where applicable</li>
              </ul>
              <p className="mt-3">Use the login method supplied with your Strong 8K subscription.</p>
            </InfoCard>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="App Features"
            title="Strong 8K App & IPTV Player Features"
            description="Depending on the application and device, available features can include:"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Container>
      </section>

      {/* Troubleshooting */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Troubleshooting"
            title="Common 8K Pro App Problems"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="card p-6">
                <AlertTriangle className="mb-3 h-5 w-5 text-gold-300" />
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Strong 8K App FAQs" />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Need Help Installing 8K Pro?"
        description="Having trouble with the Downloader code, app installation or IPTV player setup? Our support team can help with compatible devices, installation and subscription setup."
        primaryLabel="View Installation Guide"
        primaryHref="/strong-8k-iptv-installation"
        secondaryLabel={`Chat via WhatsApp`}
      />
    </>
  );
}
