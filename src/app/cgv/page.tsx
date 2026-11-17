import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("cgv");

export default function CgvPage() {
  return <LegalPage slug="cgv" />;
}
