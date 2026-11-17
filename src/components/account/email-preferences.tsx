"use client";

import { useState } from "react";

// Préférence d'e-mails marketing (Brevo). Les e-mails liés au compte partent toujours.
export function EmailPreferences({ initial }: { initial: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p id="pref-marketing" className="text-[16px] font-medium text-encre">
          Nouveautés et offres HIKAYA
        </p>
        <p className="mt-1 max-w-[52ch] text-[14px] leading-relaxed text-encre/60">
          Les nouvelles histoires du mois et nos offres. Les e-mails liés à votre compte et à votre abonnement vous
          sont toujours envoyés.
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-labelledby="pref-marketing"
        onClick={() => setOn((v) => !v)}
        className={`relative h-8 w-14 shrink-0 rounded-full transition-colors ${on ? "bg-vert" : "bg-encre/15"}`}
      >
        <span
          className={`absolute top-1 left-1 size-6 rounded-full bg-white shadow-soft transition-transform duration-300 ease-[var(--ease-out-soft)] ${
            on ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}
