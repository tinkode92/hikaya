import { brandPaths } from "@/lib/brand-paths";

// Moyens de paiement acceptés (CDC §05 : carte, PayPal, Apple Pay, Google Pay via Stripe).
function Badge({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li
      title={label}
      className="flex h-8 w-[52px] items-center justify-center rounded-md border border-encre/10 bg-white"
    >
      <span className="sr-only">{label}</span>
      {children}
    </li>
  );
}

const Mark = ({ d, color, className = "h-4 w-auto" }: { d: string; color: string; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d={d} fill={color} />
  </svg>
);

export function PaymentLogos({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`} aria-label="Moyens de paiement acceptés">
      <Badge label="Visa">
        <Mark d={brandPaths.visa} color="#1A1F71" className="h-5 w-auto" />
      </Badge>
      <Badge label="Mastercard">
        <svg viewBox="0 0 32 20" className="h-4 w-auto" aria-hidden>
          <circle cx="11" cy="10" r="8" fill="#EB001B" />
          <circle cx="21" cy="10" r="8" fill="#F79E1B" />
          <path d="M16 3.76a8 8 0 0 1 0 12.48 8 8 0 0 1 0-12.48Z" fill="#FF5F00" />
        </svg>
      </Badge>
      <Badge label="PayPal">
        <Mark d={brandPaths.paypal} color="#003087" />
      </Badge>
      <Badge label="Apple Pay">
        <Mark d={brandPaths.applePay} color="#000000" className="h-6 w-auto" />
      </Badge>
      <Badge label="Google Pay">
        <Mark d={brandPaths.googlePay} color="#3C4043" className="h-6 w-auto" />
      </Badge>
    </ul>
  );
}

export function AppleLogo({ className = "" }: { className?: string }) {
  return <Mark d={brandPaths.apple} color="currentColor" className={className} />;
}

export function GooglePlayLogo({ className = "" }: { className?: string }) {
  return <Mark d={brandPaths.googlePlay} color="currentColor" className={className} />;
}
