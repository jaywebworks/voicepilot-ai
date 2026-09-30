import { problem } from "@/site.config";
import { IconBadge, Section, SectionHeading } from "@/components/ui";

export function Problem() {
  return (
    <Section tone="alt">
      <SectionHeading eyebrow={problem.eyebrow} title={problem.headline} intro={problem.body} />

      <ul className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-6">
        {problem.cards.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="rounded-2xl border border-line bg-gradient-to-b from-ink-800 to-ink-900 p-6 sm:p-7"
          >
            <IconBadge>
              <Icon aria-hidden className="size-5" />
            </IconBadge>
            <h3 className="mt-6 text-xl leading-snug font-bold tracking-tight sm:text-2xl">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
