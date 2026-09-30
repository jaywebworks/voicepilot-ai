import Image from "next/image";
import { UserRound } from "lucide-react";
import { about } from "@/site.config";
import { asset } from "@/lib/utils";
import { IconBadge, Section, SectionHeading } from "@/components/ui";

export function About() {
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
              {about.photo ? (
                <Image
                  src={asset(about.photo)}
                  alt={about.photoAlt}
                  fill
                  sizes="(min-width: 768px) 384px, 280px"
                  className="object-cover"
                />
              ) : (
                // Placeholder until a photo is added in site.config.ts (about.photo)
                <div className="flex h-full flex-col items-center justify-center gap-3 text-line-strong">
                  <UserRound aria-hidden className="size-20" strokeWidth={1.25} />
                  <span className="text-sm font-medium text-muted">Photo coming soon</span>
                </div>
              )}
            </div>
          </div>
          <figcaption className="mt-4 text-center text-sm font-medium text-muted">{about.photoCaption}</figcaption>
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
