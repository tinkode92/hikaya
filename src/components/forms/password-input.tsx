"use client";

import { useState } from "react";
import { Eye, EyeOff } from "../icons";
import { inputClass } from "./fields";

export function PasswordInput({
  autoComplete = "current-password",
  name = "password",
  minLength,
  placeholder,
}: {
  autoComplete?: string;
  name?: string;
  minLength?: number;
  placeholder?: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <span className="relative block">
      <input
        type={visible ? "text" : "password"}
        name={name}
        autoComplete={autoComplete}
        minLength={minLength}
        placeholder={placeholder}
        required
        className={`${inputClass} pr-12`}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
        className="absolute top-1.5 right-1 flex size-12 items-center justify-center rounded-xl text-encre/50 transition-colors hover:text-vert"
      >
        {visible ? <EyeOff /> : <Eye />}
      </button>
    </span>
  );
}
