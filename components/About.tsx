import Image from "next/image";
import { about } from "@/site.config";
import { asset } from "@/lib/utils";
import { IconBadge, Section, SectionHeading } from "@/components/ui";

export function About() {
  // With a photo: photo beside the text. Without one: heading beside three cards.
  if (about.photo) {
    return (
      <Section id="about">
        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1fr] md:gap-14 lg:gap-20">
          <figure className="order-last mx-auto w-full max-w-[280px] md:order-none md:max-w-sm">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent-500/20 to-transparent blur-2xl"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-ink-800">
                <Image
                  src={asset(about.photo)}
                  alt={about.photoAlt}
                  fill
                  sizes="(min-width: 768px) 384px, 280px"
                  className="object-cover"
                />
              </div>
            </div>
          </figure>
          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.headline} />
            <ul className="mt-9 space-y-7">
              {about.points.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <IconBadge>
                    <Icon aria-hidden className="size-5" />
                  </IconBadge>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                    <p className="mt-1 text-lg leading-relaxed text-body">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={about.eyebrow} title={about.headline} />
        </div>
        <ul className="grid gap-4">
          {about.points.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-5 rounded-2xl border border-line bg-gradient-to-b from-ink-800 to-ink-900 p-6 sm:p-7"
            >
              <IconBadge>
                <Icon aria-hidden className="size-5" />
              </IconBadge>
              <div>
                <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-1 text-lg leading-relaxed text-body">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
