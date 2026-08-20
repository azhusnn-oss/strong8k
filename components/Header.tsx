"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { navItems, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink-900/90 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-white/5 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappLink("Hi Strong 8K, I'd like to know more.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline !px-4 !py-2 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link href="/iptv-subscription" className="btn-primary !px-4 !py-2 text-sm">
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-ink-900/95 backdrop-blur-lg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2.5 text-sm font-medium",
                  pathname === item.href
                    ? "bg-white/5 text-white"
                    : "text-slate-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={whatsappLink("Hi Strong 8K, I'd like to know more.")}
                target="_blank"
                rel="noreferrer"
                className="btn-outline w-full text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link href="/iptv-subscription" className="btn-primary w-full text-sm">
                Get Started
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
