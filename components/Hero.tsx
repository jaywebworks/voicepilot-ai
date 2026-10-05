import { Check, Gift, MessageSquareText, Phone, PhoneIncoming, Siren } from "lucide-react";
import { business, hero, SHOW_DEMO } from "@/site.config";
import { telHref } from "@/lib/utils";
import { ButtonLink, Container } from "@/components/ui";

export function Hero() {
  const card = hero.exampleCard;
  const [before, after] = hero.headline.includes(hero.headlineHighlight)
    ? hero.headline.split(hero.headlineHighlight)
    : [hero.headline, ""];

  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-24 sm:pb-28">
      {/* Background: faint grid + warm glow */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[1000px] max-w-[160vw] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-body">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-400" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-extrabold tracking-tight sm:text-7xl">
            {before}
            {hero.headline.includes(hero.headlineHighlight) && (
              <span className="text-gradient">{hero.headlineHighlight}</span>
            )}
            {after}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl">{hero.subhead}</p>

          {/* Free trial banner */}
          <div className="mt-7 flex max-w-xl items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08] px-4 py-3.5 sm:px-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
              <Gift aria-hidden className="size-6" />
            </span>
            <p className="leading-snug">
              <span className="block text-xl font-extrabold tracking-tight text-white sm:text-2xl">{hero.trial.big}</span>
              <span className="text-[15px] text-body sm:text-base">{hero.trial.text}</span>
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-start">
            {SHOW_DEMO ? (
              <>
                <ButtonLink href="#contact" size="lg">
                  <Gift aria-hidden className="size-5" />
                  {hero.consultCta}
                </ButtonLink>
                <div className="flex flex-col">
                  <ButtonLink href={telHref(business.demoPhone)} size="lg" variant="outline">
                    <Phone aria-hidden className="size-5" />
                    {hero.demoCta}
                  </ButtonLink>
                  <p className="mt-2 text-center text-sm text-muted sm:text-left">{hero.demoNote}</p>
                </div>
              </>
            ) : (
              <>
                <ButtonLink href="#contact" size="lg">
                  <Gift aria-hidden className="size-5" />
                  {hero.consultCta}
                </ButtonLink>
                <ButtonLink href="#pricing" size="lg" variant="outline">
                  {hero.pricingCta}
                </ButtonLink>
              </>
            )}
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-muted">
            {hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Check aria-hidden className="size-4 text-accent-400" strokeWidth={3} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Example of the job summary a contractor receives */}
        <figure className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-500/25 via-transparent to-violet-500/20 blur-2xl"
          />
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-ink-800/80 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <p className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex size-9 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                    <PhoneIncoming aria-hidden className="size-4" />
                  </span>
                  <span>
                    <span className="block font-semibold text-fg">{card.callLabel}</span>
                    {card.callSub}
                  </span>
                </p>
                <Waveform />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="flex items-center gap-2 font-semibold text-fg">
                  <span aria-hidden className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
                  {card.label}
                </p>
                <p className="text-sm text-muted">{card.time}</p>
              </div>
              <dl className="mt-4 divide-y divide-line rounded-xl border border-line bg-ink-950/60 px-4">
                {card.rows.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-3 text-[15px]">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="text-right font-semibold text-fg">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex items-center gap-2 rounded-lg border border-accent-500/25 bg-accent-500/10 px-3 py-2.5 text-sm font-semibold text-accent-300">
                <Siren aria-hidden className="size-4 shrink-0" />
                {card.alert}
              </p>
            </div>

            {/* Floating chip */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-700/90 px-3.5 py-2.5 text-sm font-medium text-fg shadow-xl shadow-black/50 backdrop-blur sm:-left-8">
              <MessageSquareText aria-hidden className="size-4 text-accent-400" />
              {card.chip}
            </div>
          </div>
          <figcaption className="mt-12 text-center text-sm text-muted">{card.caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}

/* Static "voice" bars, purely decorative. */
function Waveform() {
  const bars = [8, 16, 11, 22, 14, 26, 12, 18, 9, 15, 7];
  return (
    <span aria-hidden className="flex h-7 items-center gap-[3px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-accent-600 to-sky-300"
          style={{ height: h }}
        />
      ))}
    </span>
  );
}
