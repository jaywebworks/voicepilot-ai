import { Mail, Phone } from "lucide-react";
import { business, contact, CONTACT_FORM_MODE } from "@/site.config";
import { mailHref, telHref } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";

export function Contact() {
  return (
    <Section id="contact" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[620px] max-w-full translate-x-1/4 translate-y-1/4 rounded-full bg-accent-500/10 blur-[120px]"
      />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.headline} intro={contact.body} />
          <div className="mt-10 hidden lg:block">
            <NextSteps />
          </div>
        </div>

        <div className="self-start">
          <div className="rounded-3xl border border-white/10 bg-ink-800/80 p-2 shadow-2xl shadow-black/40 backdrop-blur sm:p-3">
            {CONTACT_FORM_MODE === "custom-form" ? <ContactForm /> : <GhlFormEmbed />}
          </div>
          <ContactLine />
        </div>

        <div className="lg:hidden">
          <NextSteps />
        </div>
      </div>
    </Section>
  );
}

/* "What happens next": three short steps beside the form. */
function NextSteps() {
  return (
    <div>
      <h3 className="text-lg font-bold">{contact.nextStepsHeading}</h3>
      <ol className="mt-5 space-y-5">
        {contact.nextSteps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-sm font-bold text-accent-300 ring-1 ring-accent-500/30">
              {i + 1}
            </span>
            <p className="pt-1">
              <span className="block font-semibold text-fg">{step.title}</span>
              <span className="text-muted">{step.text}</span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* Email + phone, small, under the form. */
function ContactLine() {
  return (
    <div className="mt-5 px-2 text-[15px] text-muted">
      <p className="font-medium text-body">{contact.altLabel}</p>
      <ul className="mt-2 space-y-1.5">
        <li className="flex flex-wrap items-center gap-x-2">
          <Mail aria-hidden className="size-4 text-accent-400" />
          <a href={mailHref(business.email)} className="font-semibold break-all text-fg hover:text-accent-400">
            {business.email}
          </a>
          <span>· {business.emailHours}</span>
        </li>
        <li className="flex flex-wrap items-center gap-x-2">
          <Phone aria-hidden className="size-4 text-accent-400" />
          <a href={telHref(business.phone)} className="font-semibold text-fg hover:text-accent-400">
            {business.phone}
          </a>
          <span>· {business.phoneHours}</span>
        </li>
      </ul>
    </div>
  );
}
