"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { whatsappMessage } from "@/lib/utils";

type InquiryFormProps = {
  title: string;
  type: "consumer" | "wholesale" | "dealer" | "salon" | "contact";
};

type InquirySegment = "consumer" | "wholesale" | "dealer" | "salon";

const labels: Record<InquirySegment | "contact", string> = {
  consumer: "Consumer",
  wholesale: "Wholesale",
  dealer: "Dealer",
  salon: "Salon",
  contact: "Consumer"
};

const segments = [
  { value: "consumer", label: "Consumer" },
  { value: "wholesale", label: "Wholesale" },
  { value: "dealer", label: "Dealer" },
  { value: "salon", label: "Salon" }
] as const;

export function InquiryForm({ title, type }: InquiryFormProps) {
  const [interest, setInterest] = useState<InquirySegment>(type === "contact" ? "consumer" : type);
  const message = `Hi Hezpo, I am interested in ${labels[interest]}. Please send me more information.`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = whatsappMessage(message);
  }

  return (
    <form className="rounded-md border border-line bg-white p-5 shadow-soft sm:p-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-charcoal sm:col-span-2">
          Inquiry Type
          <select className="mt-2 w-full rounded-md border border-line bg-white px-3 py-3 text-sm outline-none focus:border-hezpo-red" onChange={(event) => setInterest(event.target.value as InquirySegment)} value={interest}>
            {segments.map((segment) => (
              <option key={segment.value} value={segment.value}>
                {segment.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-charcoal">
          Name
          <input className="mt-2 w-full rounded-md border border-line px-3 py-3 text-sm outline-none focus:border-hezpo-red" placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-charcoal">
          Phone / WhatsApp
          <input className="mt-2 w-full rounded-md border border-line px-3 py-3 text-sm outline-none focus:border-hezpo-red" placeholder="+60" />
        </label>
        <label className="text-sm font-semibold text-charcoal">
          Company / Salon
          <input className="mt-2 w-full rounded-md border border-line px-3 py-3 text-sm outline-none focus:border-hezpo-red" placeholder="Optional" />
        </label>
        <label className="text-sm font-semibold text-charcoal">
          Location
          <input className="mt-2 w-full rounded-md border border-line px-3 py-3 text-sm outline-none focus:border-hezpo-red" placeholder="City, state" />
        </label>
        <label className="text-sm font-semibold text-charcoal sm:col-span-2">
          Message
          <textarea className="mt-2 min-h-32 w-full rounded-md border border-line px-3 py-3 text-sm outline-none focus:border-hezpo-red" placeholder="Tell us what you need" />
        </label>
      </div>
      {type === "contact" ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          {segments.map((segment) => (
            <ButtonLink
              className="w-full px-3"
              external
              href={whatsappMessage(`Hi Hezpo, I am interested in ${segment.label}. Please send me more information.`)}
              key={segment.value}
              variant={segment.value === "consumer" ? "primary" : "secondary"}
            >
              {segment.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-hezpo-red px-5 py-3 text-sm font-bold text-white transition hover:bg-ink" type="submit">
          Submit via WhatsApp
        </button>
        <ButtonLink href="mailto:hello@hezpo.com" variant="secondary" external>
          Email Hezpo
        </ButtonLink>
      </div>
    </form>
  );
}
