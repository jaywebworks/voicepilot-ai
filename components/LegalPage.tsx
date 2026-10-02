import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { business } from "@/site.config";
import { mailHref, telHref } from "@/lib/utils";
import { Container } from "@/components/ui";

type Props = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

/* Shared layout for the Privacy Policy and Terms pages. */
export function LegalPage({ title, lastUpdated, intro, sections }: Props) {
  return (
    <Container className="max-w-3xl py-14 sm:py-20">
      <Link href="/" className="inline-flex items-center gap-2 font-semibold text-accent-400 hover:underline">
        <ArrowLeft aria-hidden className="size-4" />
        Back to home
      </Link>

      <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-3 text-muted">Last updated: {lastUpdated}</p>

      <p className="mt-8 text-lg leading-relaxed">{intro}</p>

      {sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Questions? Email{" "}
          <a href={mailHref(business.email)} className="font-semibold break-words text-accent-400 hover:underline">
            {business.email}
          </a>{" "}
          or call{" "}
          <a href={telHref(business.phone)} className="font-semibold text-accent-400 hover:underline">
            {business.phone}
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
