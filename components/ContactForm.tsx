"use client";

import { useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { business, contact, GHL_WEBHOOK_URL, WEB3FORMS_ACCESS_KEY } from "@/site.config";
import { cn, isRealUrl, mailHref, telHref } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

// False in the static HTML, true once the page's JavaScript has loaded.
const subscribe = () => () => {};
const useHydrated = () => useSyncExternalStore(subscribe, () => true, () => false);

const hasWeb3FormsKey = /^[\w-]{20,}$/.test(WEB3FORMS_ACCESS_KEY.trim());

/*
  The built-in consultation form.
  Each request is emailed to you through Web3Forms, and also sent to your
  GoHighLevel webhook if GHL_WEBHOOK_URL is filled in.
*/
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");
  const [firstName, setFirstName] = useState("");
  const hydrated = useHydrated();
  const copy = contact.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    // Spam trap: people never see this field, bots fill it in.
    if (field("website")) {
      setStatus("success");
      return;
    }

    const digits = field("phone").replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) {
      setPhoneError("Please enter a 10-digit phone number.");
      form.querySelector<HTMLInputElement>("#phone")?.focus();
      return;
    }
    setPhoneError("");

    const lead = {
      name: field("name"),
      business: field("business_name"),
      phone: field("phone"),
      email: field("email"),
      trade: field("trade"),
      bestTime: field("best_time"),
      message: field("message"),
    };
    const [first, ...rest] = lead.name.split(/\s+/);

    const sends: Promise<void>[] = [];

    // 1. Email to you, via Web3Forms. The keys below become the labels in the email.
    if (hasWeb3FormsKey) {
      sends.push(
        post("https://api.web3forms.com/submit", {
          access_key: WEB3FORMS_ACCESS_KEY.trim(),
          subject: copy.emailSubject.replace("{name}", lead.name).replace("{business}", lead.business),
          from_name: `${business.name} website`,
          name: lead.name,
          email: lead.email, // hitting Reply in your inbox goes to this address
          phone: lead.phone,
          "Business name": lead.business,
          Trade: lead.trade,
          "Best time to reach": lead.bestTime,
          Message: lead.message || "(none)",
        }).then(async (res) => {
          const json = await res.json().catch(() => ({}));
          if (!res.ok || !json.success) throw new Error(`Web3Forms: ${json.message ?? res.status}`);
        }),
      );
    }

    // 2. Optional: GoHighLevel, so the lead lands in your CRM.
    if (isRealUrl(GHL_WEBHOOK_URL)) {
      sends.push(
        post(GHL_WEBHOOK_URL, {
          ...lead,
          first_name: first,
          last_name: rest.join(" "),
          source: "Website consultation form",
          page: window.location.href,
          submitted_at: new Date().toISOString(),
        }).then((res) => {
          if (!res.ok) throw new Error(`GoHighLevel webhook: ${res.status}`);
        }),
      );
    }

    if (sends.length === 0) {
      console.error("No form destination set. Add WEB3FORMS_ACCESS_KEY in site.config.ts.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    const results = await Promise.allSettled(sends);
    results.forEach((r) => r.status === "rejected" && console.error(r.reason));

    // Success as long as at least one destination got it.
    if (results.some((r) => r.status === "fulfilled")) {
      setFirstName(first);
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-10 sm:py-16">
        <CircleCheck aria-hidden className="mx-auto size-12 text-emerald-400" />
        <p className="mt-4 text-2xl font-bold text-fg">{firstName ? `Thanks, ${firstName}!` : "Thanks!"}</p>
        <p className="mt-2 text-lg text-body">{copy.successText}</p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form method="post" onSubmit={handleSubmit} className="relative rounded-2xl bg-ink-900 p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </Field>
        <Field label="Business name" htmlFor="business_name">
          <input
            id="business_name"
            name="business_name"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={phoneError}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
            onChange={() => phoneError && setPhoneError("")}
            className={cn(inputClass, phoneError && "border-red-500")}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </Field>

        <ChoiceGroup legend="Trade" name="trade" options={copy.tradeOptions} />
        <ChoiceGroup legend="Best time to reach you" name="best_time" options={copy.bestTimeOptions} />

        <Field label="Anything I should know?" optional htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="e.g. We miss a lot of calls on weekends"
            className={cn(inputClass, "h-auto py-3 placeholder:text-muted/70")}
          />
        </Field>

        {/* Spam trap, hidden from people */}
        <div aria-hidden className="absolute -left-[9999px]">
          <label htmlFor="website">Leave this empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-6 flex gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0" />
          <p>
            {copy.errorText}{" "}
            <a href={mailHref(business.email)} className="font-semibold break-words underline">
              {business.email}
            </a>{" "}
            ·{" "}
            <a href={telHref(business.phone)} className="font-semibold underline">
              {business.phone}
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={sending || !hydrated}
        className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-accent-600 text-lg font-semibold text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.7)] transition-colors hover:bg-accent-500 disabled:opacity-70"
      >
        {sending && <LoaderCircle aria-hidden className="size-5 animate-spin" />}
        {sending ? "Sending…" : copy.submitLabel}
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted">{copy.consent}</p>
    </form>
  );
}

function post(url: string, body: object) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
}

const inputClass =
  "block h-12 w-full rounded-lg border border-line bg-ink-950 px-4 text-base text-fg transition-colors hover:border-line-strong focus:border-accent-500 focus:outline-2 focus:outline-offset-0 focus:outline-accent-500/30";

/* A row of pill buttons that act like radio buttons. */
function ChoiceGroup({ legend, name, options }: { legend: string; name: string; options: string[] }) {
  return (
    <fieldset className="sm:col-span-2">
      <legend className="text-[15px] font-semibold text-fg">{legend}</legend>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {options.map((option, i) => (
          <label key={option} className="cursor-pointer">
            <input type="radio" name={name} value={option} required={i === 0} className="peer sr-only" />
            <span className="flex h-12 items-center justify-center rounded-lg border border-line bg-ink-950 px-2 text-center text-sm leading-tight font-semibold text-body transition-colors peer-checked:border-accent-500 peer-checked:bg-accent-500/10 peer-checked:text-accent-300 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-400 hover:border-line-strong sm:text-[15px]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-[15px] font-semibold text-fg">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm font-medium text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
