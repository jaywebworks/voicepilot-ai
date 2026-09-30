import { howItWorks } from "@/site.config";
import { Section, SectionHeading } from "@/components/ui";

/* A short timeline: one missed call, start to finish. */
export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.headline} intro={howItWorks.intro} />
        </div>

        <ol className="relative">
          {/* Vertical line */}
          <span
            aria-hidden
            className="absolute top-3 bottom-3 left-[27px] w-px bg-gradient-to-b from-accent-500/70 via-line to-accent-500/40"
          />
          {howItWorks.steps.map(({ icon: Icon, time, title, text }, i) => (
            <li key={title} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6">
              <span
                className={
                  i === howItWorks.steps.length - 1
                    ? "relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent-600 text-white shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
                    : "relative flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 text-accent-300"
                }
              >
                <Icon aria-hidden className="size-6" />
              </span>
              <div className="pt-1">
                <p className="text-sm font-semibold tracking-wide text-accent-400 tabular-nums">{time}</p>
                <h3 className="mt-1 text-xl leading-snug font-bold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
