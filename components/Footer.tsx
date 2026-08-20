import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  footerLinks,
  mailLink,
  siteConfig,
  whatsappLink,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-800">
      <Container className="section-y !py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {siteConfig.fullName} brings live TV, sports, movies and series
              together in one flexible IPTV service &mdash; across the
              devices you already use.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-brand-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Support
              </a>
              <a
                href={mailLink()}
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-brand-300"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.supportEmail}
              </a>
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Support" links={footerLinks.support} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="max-w-xl text-center sm:text-right">
            Content, sports coverage and picture quality are subject to
            availability, source and device support.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-brand-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
