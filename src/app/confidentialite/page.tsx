import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("confidentialite");

export default function ConfidentialitePage() {
  return <LegalPage slug="confidentialite" />;
}
