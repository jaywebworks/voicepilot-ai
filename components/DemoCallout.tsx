import { Phone } from "lucide-react";
import { business, demo } from "@/site.config";
import { telHref } from "@/lib/utils";
import { ButtonLink, Container } from "@/components/ui";

export function DemoCallout() {
  const href = telHref(business.demoPhone);

  return (
    <section id="demo" className="py-8 sm:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-accent-500/25 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] max-w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/20 blur-[110px]"
          />
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative">
            <p className="text-sm font-semibold tracking-[0.14em] text-accent-400 uppercase">{demo.eyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl sm:leading-[1.1]">
              {demo.headline}
            </h2>

            <a
              href={href}
              className="text-gradient mt-9 inline-block rounded-lg text-4xl font-extrabold tracking-tight break-words sm:text-7xl"
            >
              {business.demoPhone}
            </a>

            <p className="mt-6 text-lg text-body sm:text-xl">{demo.body}</p>

            <ButtonLink href={href} size="lg" className="mt-9">
              <Phone aria-hidden className="size-5" />
              {demo.buttonLabel}
            </ButtonLink>

            {demo.tip && <p className="mx-auto mt-7 max-w-md text-[15px] text-muted">{demo.tip}</p>}
          </div>
        </div>
      </Container>
    </section>
  );
}
