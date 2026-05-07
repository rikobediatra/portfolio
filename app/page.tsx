"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { LanguageToggle } from "@/components/language-toggle";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProfileSection } from "@/components/sections/profile-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { getPortfolioContent } from "@/lib/content";
import { Locale } from "@/lib/types";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("id");
  const content = getPortfolioContent(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-4 md:px-10 lg:px-16">
      <header className="sticky top-4 z-20 mb-6 flex justify-end lg:hidden">
        <div className="rounded-full bg-card/80 p-1 shadow-sm backdrop-blur">
          <LanguageToggle locale={locale} onChange={setLocale} />
        </div>
      </header>

      <div className="grid gap-16 lg:grid-cols-[minmax(320px,420px)_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-0 lg:h-svh lg:py-12">
          <div className="flex h-full flex-col justify-between">
            <HeroSection content={content.hero} />
            <div className="hidden lg:block">
              <LanguageToggle locale={locale} onChange={setLocale} />
            </div>
          </div>
        </aside>

        <div className="flex flex-col gap-16 pb-10 pt-2 lg:pt-14">
          <Reveal delay={0.1}>
            <ProfileSection content={content.profile} />
          </Reveal>

          <Reveal delay={0.16}>
            <ExperienceSection content={content.experience} />
          </Reveal>

          <Reveal delay={0.22}>
            <ProjectsSection content={content.projects} />
          </Reveal>

          <Reveal delay={0.28}>
            <ContactSection content={content.contact} />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
