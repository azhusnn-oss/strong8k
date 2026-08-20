"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const reasons = [
  "Subscription",
  "IPTV Trial",
  "Installation",
  "Technical Support",
  "Reseller",
  "Payment",
  "General Question",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-400/30 bg-brand-500/[0.06] p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-400" />
        <h3 className="text-lg font-semibold text-white">Message received</h3>
        <p className="max-w-sm text-sm text-slate-400">
          Thanks for reaching out. Our support team will get back to you as
          soon as possible. For faster help, you can also reach us on
          WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="input"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="input"
          />
        </Field>
      </div>

      <Field label="Reason for Contact" htmlFor="reason">
        <select id="reason" name="reason" required defaultValue="" className="input">
          <option value="" disabled>
            Choose the category that best describes your enquiry
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your question or issue as clearly as possible."
          className="input resize-none"
        />
      </Field>

      <p className="text-xs text-slate-500">
        For technical problems, including your device and IPTV player can
        help us understand the issue more quickly.
      </p>

      <button type="submit" className="btn-primary w-full sm:w-auto sm:self-start">
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}
