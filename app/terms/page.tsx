import type { Metadata } from "next";
import { business, terms } from "@/site.config";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: terms.title,
  description: `Terms of service and SMS terms for ${business.name}.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage title={terms.title} lastUpdated={terms.lastUpdated} intro={terms.intro} sections={terms.sections} />
  );
}
