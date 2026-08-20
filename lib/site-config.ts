export const siteConfig = {
  name: "Strong 8K",
  fullName: "Strong 8K IPTV",
  domain: "strong8k.com.co",
  description:
    "Strong 8K IPTV offers flexible IPTV subscriptions with live TV, sports, movies and series. Explore plans, compatible devices, features and support.",
  // TODO: replace with your real support contact details before publishing.
  supportEmail: "support@strong8k.com.co",
  whatsappNumber: "447000000000",
  whatsappDisplay: "+44 7000 000000",
  downloaderCode: "1646512",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const mailLink = (subject?: string) =>
  `mailto:${siteConfig.supportEmail}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }`;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "IPTV Subscription", href: "/iptv-subscription" },
  { label: "App / Player", href: "/strong-8k-app" },
  { label: "Installation", href: "/strong-8k-iptv-installation" },
  { label: "Reseller", href: "/strong-8k-reseller-panel" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerLinks = {
  product: [
    { label: "IPTV Subscription", href: "/iptv-subscription" },
    { label: "Strong 8K App & Player", href: "/strong-8k-app" },
    { label: "Installation Guide", href: "/strong-8k-iptv-installation" },
    { label: "Reseller Panel", href: "/strong-8k-reseller-panel" },
  ],
  support: [
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQs", href: "/#faq" },
    { label: "Setup & Installation", href: "/strong-8k-iptv-installation" },
    { label: "Troubleshooting", href: "/strong-8k-iptv-installation#troubleshooting" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export type Plan = {
  id: string;
  name: string;
  duration: string;
  price: string;
  monthly: string;
  bestFor: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "1-month",
    name: "1 Month",
    duration: "1 Month",
    price: "£14.99",
    monthly: "£14.99/month",
    bestFor: "Short-term viewing",
  },
  {
    id: "3-month",
    name: "3 Months",
    duration: "3 Months",
    price: "£24.99",
    monthly: "£8.33/month",
    bestFor: "Occasional or regular viewing",
  },
  {
    id: "6-month",
    name: "6 Months",
    duration: "6 Months",
    price: "£39.99",
    monthly: "£6.67/month",
    bestFor: "Regular viewers",
    featured: true,
  },
  {
    id: "12-month",
    name: "1 Year",
    duration: "12 Months",
    price: "£59.99",
    monthly: "£5.00/month",
    bestFor: "Long-term viewing, lowest average cost",
  },
];

export type ResellerPackage = {
  id: string;
  name: string;
  credits: string;
  bestFor: string;
  featured?: boolean;
};

export const resellerPackages: ResellerPackage[] = [
  {
    id: "starter",
    name: "Starter",
    credits: "120 Credits",
    bestFor: "New and small-scale resellers",
  },
  {
    id: "basic",
    name: "Basic",
    credits: "360 Credits",
    bestFor: "Growing IPTV resellers",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    credits: "1,000 Credits",
    bestFor: "High-volume resellers",
  },
];

export type Device = {
  name: string;
  setup: string;
  icon:
    | "tv"
    | "firestick"
    | "androidtv"
    | "mobile"
    | "apple"
    | "windows"
    | "box"
    | "samsung"
    | "lg";
};

export const devices: Device[] = [
  { name: "Smart TVs", setup: "Compatible IPTV player app", icon: "tv" },
  {
    name: "Amazon Firestick / Fire TV",
    setup: "8K Pro app or compatible IPTV player",
    icon: "firestick",
  },
  {
    name: "Android TV",
    setup: "8K Pro app or compatible IPTV player",
    icon: "androidtv",
  },
  {
    name: "Android Phones & Tablets",
    setup: "Compatible IPTV application",
    icon: "mobile",
  },
  {
    name: "iPhone & iPad",
    setup: "Compatible iOS IPTV player",
    icon: "apple",
  },
  {
    name: "IPTV Boxes",
    setup: "8K Pro app or compatible Android IPTV player",
    icon: "box",
  },
  {
    name: "Samsung Smart TV",
    setup: "Compatible Samsung IPTV player",
    icon: "samsung",
  },
  { name: "LG Smart TV", setup: "Compatible LG IPTV player", icon: "lg" },
  {
    name: "Windows PC",
    setup: "Compatible IPTV application",
    icon: "windows",
  },
];

export const sports = [
  "Premier League",
  "UEFA Competitions",
  "Boxing",
  "PPV Events",
  "NBA",
  "MLB",
  "Football Leagues",
  "Basketball",
];
