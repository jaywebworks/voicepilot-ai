import { ArrowRight, CalendarCheck, Check, Gift, Globe, ShieldCheck } from "lucide-react";
import { pricing, type Plan } from "@/site.config";
import { cn } from "@/lib/utils";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";

const styles = {
  light: {
    card: "border border-line bg-ink-800 md:my-5",
    name: "text-fg",
    description: "text-muted",
    price: "text-fg",
    period: "text-muted",
    setup: "border-line text-body",
    feature: "text-body",
    check: "text-accent-400",
    button: "outline",
  },
  featured: {
    card: "bg-gradient-to-b from-accent-600 to-accent-800 ring-1 ring-accent-400/40 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.7)] order-first md:order-none md:py-11",
    name: "text-white",
    description: "text-white/85",
    price: "text-white",
    period: "text-white/85",
    setup: "border-white/20 text-white",
    feature: "text-white",
    check: "text-white",
    button: "white",
  },
  dark: {
    card: "border border-violet-400/25 bg-gradient-to-b from-[#1a1840] to-navy-900 md:my-5",
    name: "text-white",
    description: "text-navy-200",
    price: "text-white",
    period: "text-navy-200",
    setup: "border-navy-600/60 text-navy-200",
    feature: "text-white",
    check: "text-violet-300",
    button: "primary",
  },
} as const;

export function Pricing() {
  const { consult } = pricing;

  return (
    <Section id="pricing" tone="alt">
      <SectionHeading eyebrow={pricing.eyebrow} title={pricing.headline} intro={pricing.intro} align="center" />

      {/* Free trial line */}
      <p className="mx-auto mt-6 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-center text-[15px] font-semibold text-emerald-300 sm:text-base">
        <Gift aria-hidden className="size-5 shrink-0" />
        {pricing.trial}
      </p>

      <ul className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-5 lg:gap-7">
        {pricing.plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </ul>

      {/* Results guarantee */}
      <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.07] p-5 sm:items-center sm:p-6">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
          <ShieldCheck aria-hidden className="size-6" />
        </span>
        <p className="text-[15px] leading-relaxed text-body sm:text-base">
          <span className="font-bold text-emerald-300">{pricing.guarantee.title}</span> {pricing.guarantee.text}
        </p>
      </div>

      <WebsiteOnlyCard />

      {/* Consultation nudge */}
      <div className="mt-14 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/25">
          <CalendarCheck aria-hidden className="size-6" />
        </span>
        <p className="mt-4 text-2xl font-bold text-fg">{consult.title}</p>
        <p className="mx-auto mt-2 max-w-md text-lg text-body">{consult.text}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.5 text-lg font-semibold text-accent-400 underline-offset-4 hover:underline"
        >
          {consult.button}
          <ArrowRight aria-hidden className="size-5" />
        </a>
        <p className="mt-8 font-semibold text-muted">{pricing.finePrint}</p>
      </div>
    </Section>
  );
}

/* Slim, full-width card for the website-only offer. */
function WebsiteOnlyCard() {
  const w = pricing.websiteOnly;

  return (
    <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-line bg-ink-800 p-7 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/25">
        <Globe aria-hidden className="size-6" />
      </span>
      <div className="flex-1">
        <h3 className="text-xl font-bold tracking-tight">{w.name}</h3>
        <p className="mt-1 text-body">{w.description}</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
          {w.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-[15px] text-muted">
              <Check aria-hidden className="size-4 text-accent-400" strokeWidth={2.5} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:text-right">
        <p className="flex items-baseline gap-1 lg:justify-end">
          <span className="text-4xl font-extrabold tracking-tight text-fg">{w.price}</span>
          <span className="text-lg font-medium text-muted">{w.period}</span>
        </p>
        <p className="mt-1 text-[15px] font-medium text-body">+ {w.setupFee} one-time build</p>
      </div>
      <ButtonLink href="#contact" variant="outline" size="lg" className="w-full lg:w-auto">
        {w.cta}
      </ButtonLink>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const s = styles[plan.style];

  return (
    <li className={cn("relative flex flex-col rounded-3xl p-7 sm:p-8", s.card)}>
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-ink-950 px-4 py-1.5 text-xs font-bold tracking-wide whitespace-nowrap text-accent-300 uppercase ring-1 ring-accent-500/40">
          {plan.badge}
        </span>
      )}

      <h3 className={cn("text-xl font-bold tracking-tight", s.name)}>{plan.name}</h3>
      <p className={cn("mt-2 text-[15px]", s.description)}>{plan.description}</p>

      <p className="mt-6 flex items-baseline gap-1">
        <span className={cn("text-5xl font-extrabold tracking-tight", s.price)}>{plan.price}</span>
        <span className={cn("text-lg font-medium", s.period)}>{plan.period}</span>
      </p>
      <p className={cn("mt-3 border-b pb-6 text-[15px] font-medium", s.setup)}>
        {plan.setupFee ? `+ ${plan.setupFee} one-time setup${pricing.setupSuffix}` : "+ one-time setup fee"}
      </p>

      <ul className="mt-6 mb-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className={cn("flex gap-3", s.feature)}>
            <Check aria-hidden className={cn("mt-0.5 size-5 shrink-0", s.check)} strokeWidth={2.5} />
            <span className={cn(feature.startsWith("Everything in") && "font-semibold")}>{feature}</span>
          </li>
        ))}
      </ul>

      <ButtonLink href="#contact" variant={s.button} size="lg" className="mt-auto w-full">
        {plan.cta}
      </ButtonLink>
    </li>
  );
}
