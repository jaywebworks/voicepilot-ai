import { Quote } from "lucide-react";
import { testimonials } from "@/site.config";
import { asset } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui";

/* Shown only when SHOW_TESTIMONIALS = true in site.config.ts. */
export function Testimonials() {
  if (testimonials.items.length === 0) return null;

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.headline} />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <li key={i} className="flex flex-col rounded-2xl border border-line bg-ink-800 p-6 sm:p-7">
            {item.type === "video" ? <Video url={item.videoUrl} title={`${item.name}, ${item.company}`} /> : null}
            {item.type === "text" || item.quote ? (
              <blockquote className="mt-1 flex-1">
                {item.type === "text" && <Quote aria-hidden className="mb-3 size-7 text-accent-400" />}
                <p className="text-lg leading-relaxed text-fg">“{item.quote}”</p>
              </blockquote>
            ) : null}
            <p className="mt-5 font-semibold text-fg">
              {item.name}
              <span className="block text-sm font-normal text-muted">
                {[item.company, item.location].filter(Boolean).join(" · ")}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Video({ url, title }: { url: string; title: string }) {
  const isFile = /\.(mp4|webm|mov)(\?|$)/i.test(url);

  return (
    <div className="mb-5 aspect-video overflow-hidden rounded-xl bg-black">
      {isFile ? (
        <video src={asset(url)} controls preload="metadata" playsInline className="size-full object-cover" />
      ) : (
        <iframe
          src={toEmbedUrl(url)}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className="size-full border-0"
        />
      )}
    </div>
  );
}

/** Turns a normal YouTube/Vimeo link into its embeddable version. */
function toEmbedUrl(url: string) {
  const youtube = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return url;
}
