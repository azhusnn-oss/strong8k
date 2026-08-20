# Strong 8K IPTV Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing site for Strong 8K IPTV.

## Pages

- `/` — Home
- `/iptv-subscription` — IPTV Subscription plans
- `/strong-8k-app` — Strong 8K App / IPTV Player
- `/strong-8k-iptv-installation` — Setup & Installation guide
- `/strong-8k-reseller-panel` — IPTV Reseller panel
- `/contact-us` — Contact Us

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live

Update the placeholders in `lib/site-config.ts`:

- `supportEmail` — real support email address
- `whatsappNumber` — real WhatsApp number in international format (no `+` or spaces)
- `downloaderCode` — keep current with the live 8K Pro Downloader code

The contact form on `/contact-us` is a working UI with client-side validation but is not wired to a backend/email service yet — connect it to an API route, form service (e.g. Formspree, Resend) or your CRM before launch.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- `next/font` for Inter (body) and Sora (display) via Google Fonts
