import { ChevronDown } from "lucide-react";
import { faq, SHOW_DEMO } from "@/site.config";
import { Section, SectionHeading } from "@/components/ui";

/** FAQ items to show. Demo-only questions are hidden until SHOW_DEMO is on. */
export const faqItems = faq.items.filter((item) => SHOW_DEMO || !item.demoOnly);

/* Uses the browser's built-in <details> accordion, so it works with no JavaScript. */
export function Faq() {
  return (
    <Section id="faq" tone="alt">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.headline} />

        <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-ink-800">
          {faqItems.map((item) => (
            <details key={item.question} name="faq" className="group open:bg-ink-700/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-lg font-semibold text-fg sm:px-7 [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  aria-hidden
                  className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180 group-open:text-accent-400"
                />
              </summary>
              <p className="-mt-1 px-5 pb-6 text-lg leading-relaxed text-body sm:px-7">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
