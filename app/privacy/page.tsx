import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { business, privacy } from "@/site.config";
import { mailHref, telHref } from "@/lib/utils";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: privacy.title,
  description: `How ${business.name} handles your information.`,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-14 sm:py-20">
      <Link href="/" className="inline-flex items-center gap-2 font-semibold text-accent-400 hover:underline">
        <ArrowLeft aria-hidden className="size-4" />
        Back to home
      </Link>

      <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">{privacy.title}</h1>
      <p className="mt-3 text-muted">Last updated: {privacy.lastUpdated}</p>

      <p className="mt-8 text-lg leading-relaxed">
        This policy covers {business.name}, run by {business.owner} in {business.city}, {business.state}.
      </p>

      {privacy.sections.map((section) => (
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
          Questions? Call{" "}
          <a href={telHref(business.phone)} className="font-semibold text-accent-400 hover:underline">
            {business.phone}
          </a>{" "}
          or email{" "}
          <a href={mailHref(business.email)} className="font-semibold break-words text-accent-400 hover:underline">
            {business.email}
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
