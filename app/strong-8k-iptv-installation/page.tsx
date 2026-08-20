import type { Metadata } from "next";
import {
  CheckSquare,
  Tv,
  Smartphone,
  Apple,
  Laptop,
  Box,
  KeyRound,
  Wifi,
  ListVideo,
  Gauge,
  AlertOctagon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/ui/StepCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { NumberedList } from "@/components/ui/NumberedList";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strong 8K IPTV Installation Guide – Setup & Downloader Code",
  description:
    "Follow the Strong 8K IPTV installation guide for Firestick, Android TV, Smart TV and more. Use Downloader code 1646512 and learn M3U and Xtream Codes setup.",
  alternates: { canonical: "/strong-8k-iptv-installation" },
};

const checklist = [
  "An active Strong 8K IPTV subscription",
  "A compatible streaming device",
  "A stable internet connection",
  "A compatible IPTV app or player",
  "Your Strong 8K login or playlist details",
  "The Downloader app on Firestick or supported Android-based devices",
];

const firestickSteps = [
  { title: "Install Downloader", description: "From your Firestick home screen, search for Downloader and install the application. Open it after installation." },
  { title: "Enter the Strong 8K Downloader Code", description: `Enter the following code into Downloader: ${siteConfig.downloaderCode}` },
  { title: "Download the App", description: "Follow the instructions displayed after entering the code. If an installation file is provided, allow it to download completely." },
  { title: "Install the Application", description: "Open the downloaded file and follow the on-screen instructions to complete installation." },
  { title: "Open Strong 8K", description: "Launch the installed application after the installation finishes." },
  { title: "Enter Your Subscription Details", description: "Use the Strong 8K login information supplied with your subscription — Xtream Codes credentials or an M3U playlist." },
  { title: "Load Your Content", description: "Allow the application to load available live TV, VOD, EPG and other supported content, then start browsing." },
];

const deviceGuides = [
  {
    icon: Tv,
    title: "Android TV",
    steps: [
      "Install the Strong 8K app where supported or choose a compatible IPTV player.",
      "Launch the player and select the appropriate login option.",
      "Enter the username, password and server information (Xtream Codes) or the playlist URL (M3U).",
      "Allow the application to load your channels, EPG and available VOD content.",
    ],
  },
  {
    icon: Tv,
    title: "Samsung Smart TV",
    steps: [
      "Open the Samsung TV app store.",
      "Search for and install a compatible IPTV player.",
      "Open the player and select the relevant login method.",
      "Enter your Strong 8K subscription details and load your content.",
    ],
  },
  {
    icon: Tv,
    title: "LG Smart TV",
    steps: [
      "Open the LG TV app store and find a compatible IPTV application.",
      "Install and open the player.",
      "Choose the appropriate login method and enter your subscription information.",
      "Allow the playlist and programme information to load.",
    ],
  },
  {
    icon: Smartphone,
    title: "Android Phones & Tablets",
    steps: [
      "Install a compatible IPTV player.",
      "Open the application and select Xtream Codes or M3U.",
      "Enter the required information and save the configuration.",
      "Allow the application to load your content, then select a channel or title.",
    ],
  },
  {
    icon: Apple,
    title: "iPhone & iPad",
    steps: [
      "Open the App Store and install a compatible IPTV player.",
      "Launch the application and select the supported login method.",
      "Enter your Strong 8K subscription information and save the connection.",
      "Allow the application to load available content.",
    ],
  },
  {
    icon: Box,
    title: "IPTV Boxes",
    steps: [
      "Install a compatible IPTV application on the box.",
      "Enter your Strong 8K subscription information (Xtream Codes or M3U).",
      "Load EPG information and VOD access where supported.",
      "Browse live TV categories and catch-up features where supported.",
    ],
  },
  {
    icon: Laptop,
    title: "Windows PC",
    steps: [
      "Install a compatible IPTV player.",
      "Open the application and select the appropriate login method.",
      "Enter your Strong 8K credentials and load the playlist or account.",
      "Wait for channels and VOD content to appear, then select what to watch.",
    ],
  },
];

const playbackTips = [
  { icon: Wifi, title: "Use a Stable Internet Connection", description: "A consistent connection can help reduce interruptions during streaming." },
  { icon: Gauge, title: "Consider Ethernet", description: "If your device supports Ethernet, a wired connection can be more consistent than congested Wi-Fi." },
  { icon: Wifi, title: "Try 5 GHz Wi-Fi", description: "Useful when your device and router support it and you're within suitable range." },
  { icon: Gauge, title: "Restart Your Router", description: "A router restart can sometimes resolve temporary network problems." },
  { icon: Gauge, title: "Reduce Other Network Activity", description: "Large downloads, cloud backups and other high-bandwidth activities can affect available bandwidth." },
  { icon: ListVideo, title: "Keep Your IPTV Player Updated", description: "Use the latest supported version of your chosen IPTV application where possible." },
];

const troubleshooting = [
  { title: "Strong 8K Is Buffering", description: "Check your internet connection first. Restart your router and streaming device, then test again. Try Ethernet or a suitable 5 GHz Wi-Fi connection." },
  { title: "Channels Are Not Loading", description: "Check your Strong 8K subscription details and make sure your login information has been entered correctly. Also check your internet connection." },
  { title: "Xtream Codes Login Is Not Working", description: "Recheck your username, password and server URL. Copy the details carefully and avoid adding spaces before or after the information." },
  { title: "M3U Playlist Is Not Loading", description: "Make sure you entered the complete M3U URL. If the player supports an EPG URL, check that it has also been entered correctly." },
  { title: "EPG Is Missing", description: "Refresh the EPG inside your IPTV player. If the player requires a separate EPG URL, verify that the correct information has been entered." },
  { title: "Strong 8K App Will Not Install", description: "Check that the application is compatible with your device. Android APK files cannot simply be installed on every Smart TV platform." },
  { title: "Downloader Code Is Not Working", description: `The current Strong 8K Downloader code is ${siteConfig.downloaderCode}. Make sure you have entered it correctly and that Downloader is connected to the internet.` },
  { title: "Black Screen or Playback Error", description: "Restart the IPTV player and your device, check your internet connection, then test another available channel or programme." },
];

const faqs = [
  { question: "What is the Strong 8K Downloader code?", answer: `The current Strong 8K Downloader code for this installation guide is ${siteConfig.downloaderCode}. Enter it in the Downloader application on a compatible Firestick or Android-based device.` },
  { question: "How do I install Strong 8K IPTV on Firestick?", answer: `Install Downloader on your Firestick, enter the Strong 8K code ${siteConfig.downloaderCode}, follow the download instructions and install the relevant application. Then open the app and enter your Strong 8K subscription details.` },
  { question: "Can I install Strong 8K on Android TV?", answer: "Yes. On compatible Android TV devices, install the Strong 8K app or a supported IPTV player, then configure it using your Strong 8K subscription details." },
  { question: "How do I set up Strong 8K on Samsung Smart TV?", answer: "Install a compatible IPTV player from the Samsung TV app environment. Open the player and enter your Strong 8K login or playlist information." },
  { question: "How do I set up Strong 8K on LG Smart TV?", answer: "Install a compatible IPTV player through the LG TV application environment, then enter your Strong 8K subscription details using the supported login method." },
  { question: "Can I use Strong 8K with Xtream Codes?", answer: "Yes, where the selected IPTV player supports Xtream Codes login. You normally need a username, password and server or portal URL." },
  { question: "Can I use an M3U playlist with Strong 8K?", answer: "Yes, where an M3U playlist is provided and your selected IPTV player supports M3U URLs. You may also have an EPG URL for programme information." },
  { question: "Why is my Strong 8K IPTV buffering?", answer: "Buffering can have several causes, including an unstable internet connection, Wi-Fi interference, network congestion, device issues or player-specific problems. Test your connection, restart your equipment and try Ethernet or 5 GHz Wi-Fi where available." },
  { question: "Why is my EPG not showing?", answer: "Check whether your IPTV player requires a separate EPG URL. Refresh the EPG and verify that the relevant information has been entered correctly." },
  { question: "Where can I get help with Strong 8K installation?", answer: "You can contact Strong 8K support through WhatsApp or email for help with installation, activation, compatible applications and subscription setup." },
];

export default function InstallationPage() {
  return (
    <>
      <PageHero
        eyebrow="Setup & Installation"
        title="Strong 8K IPTV Setup & Installation Guide"
        description="Setting up Strong 8K IPTV is straightforward when you use the correct application and installation method for your device. This guide covers Firestick, Android TV, Smart TV, mobile devices, IPTV boxes and Windows, along with M3U and Xtream Codes setup."
        actions={
          <a
            href={whatsappLink("Hi Strong 8K, I need help with installation.")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Get Setup Help
          </a>
        }
      />

      {/* Before you start */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Before You Start"
            title="Before Installing Strong 8K IPTV, Make Sure You Have:"
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                <CheckSquare className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Firestick walkthrough */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Most Popular"
              title="How to Install Strong 8K IPTV on Firestick"
              description="Amazon Firestick and Fire TV devices are commonly used for IPTV because they support a wide range of streaming applications."
            />
            <div className="mt-10 flex flex-col">
              {firestickSteps.map((step, i) => (
                <StepCard key={step.title} index={i + 1} {...step} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other devices */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Other Devices"
            title="Installation Steps By Device"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deviceGuides.map((d) => (
              <div key={d.title} className="card p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-base font-semibold text-white">{d.title}</h3>
                <NumberedList items={d.steps} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Xtream / M3U / EPG */}
      <section className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Connection Methods"
            title="Xtream Codes, M3U & EPG Setup"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <InfoCard title="Xtream Codes Setup">
              <KeyRound className="mb-3 h-5 w-5 text-brand-300" />
              <p className="mb-2">A compatible player may ask for three pieces of information:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Username</li>
                <li>Password</li>
                <li>Server / Portal URL</li>
              </ul>
              <p className="mt-3">Enter the details exactly as provided with your Strong 8K subscription. Do not use example credentials as real login information.</p>
            </InfoCard>
            <InfoCard title="M3U Playlist Setup">
              <Wifi className="mb-3 h-5 w-5 text-brand-300" />
              <NumberedList
                items={[
                  "Open your compatible IPTV player.",
                  "Select M3U Playlist or the equivalent option.",
                  "Enter the M3U URL supplied with your subscription.",
                  "Add the EPG URL if one is provided, then save.",
                ]}
              />
            </InfoCard>
            <InfoCard title="EPG Setup">
              <ListVideo className="mb-3 h-5 w-5 text-brand-300" />
              <p className="mb-2">
                EPG (Electronic Programme Guide) provides programme names,
                start times, schedules and channel information.
              </p>
              <p>If your EPG is missing: check the entered EPG information, refresh the EPG, restart the application, check your connection, or contact support.</p>
            </InfoCard>
          </div>
        </Container>
      </section>

      {/* Playback tips */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Performance"
            title="How to Improve Strong 8K IPTV Playback"
            description="Streaming performance depends on your internet connection, device, IPTV player and the available stream."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {playbackTips.map((tip) => (
              <div key={tip.title} className="card-hover flex flex-col gap-3 p-6">
                <tip.icon className="h-6 w-6 text-brand-300" />
                <h3 className="text-sm font-semibold text-white">{tip.title}</h3>
                <p className="text-sm text-slate-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Troubleshooting */}
      <section id="troubleshooting" className="section-y bg-ink-800/40">
        <Container>
          <SectionHeading
            eyebrow="Troubleshooting"
            title="Strong 8K IPTV Troubleshooting"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {troubleshooting.map((t) => (
              <div key={t.title} className="card p-5">
                <AlertOctagon className="mb-3 h-5 w-5 text-live-400" />
                <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Strong 8K IPTV Installation FAQs" />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Need Help Setting Up Strong 8K?"
        description="If you're having trouble installing the app, entering your Downloader code, configuring Xtream Codes or loading an M3U playlist, our support team can help."
        primaryLabel="View App & Player Guide"
        primaryHref="/strong-8k-app"
      />
    </>
  );
}
