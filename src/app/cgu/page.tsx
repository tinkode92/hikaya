import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("cgu");

export default function CguPage() {
  return <LegalPage slug="cgu" />;
}
