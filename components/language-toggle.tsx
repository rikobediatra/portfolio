"use client";

import { Locale } from "@/lib/types";
import { Button } from "@/components/ui/button";

type LanguageToggleProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 p-1 backdrop-blur">
      <Button
        variant={locale === "id" ? "primary" : "ghost"}
        className="rounded-full px-3 py-1 text-xs"
        onClick={() => onChange("id")}
      >
        ID
      </Button>
      <Button
        variant={locale === "en" ? "primary" : "ghost"}
        className="rounded-full px-3 py-1 text-xs"
        onClick={() => onChange("en")}
      >
        EN
      </Button>
    </div>
  );
}
