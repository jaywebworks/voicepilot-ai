import type { Metadata } from "next";
import { business, privacy } from "@/site.config";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: privacy.title,
  description: `How ${business.name} handles your information.`,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title={privacy.title}
      lastUpdated={privacy.lastUpdated}
      intro={`This policy covers ${business.name}, run by ${business.owner} in ${business.city}, ${business.state}.`}
      sections={privacy.sections}
    />
  );
}
