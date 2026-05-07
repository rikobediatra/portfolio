import { ArrowRight, Download } from "lucide-react";
import { HeroContent } from "@/lib/types";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="flex min-h-[78svh] flex-col justify-between py-8 md:min-h-[82svh] md:py-0">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{content.greeting}</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">{content.name}</h1>
          <p className="text-lg text-primary md:text-2xl">{content.role}</p>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">{content.tagline}</p>
      </div>

      <div className="space-y-8">
        <nav className="hidden flex-col gap-3 md:flex">
          <a href="#profile" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/60 transition-all group-hover:w-16 group-hover:bg-primary" />
            About
          </a>
          <a href="#experience" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/60 transition-all group-hover:w-16 group-hover:bg-primary" />
            Experience
          </a>
          <a href="#projects" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/60 transition-all group-hover:w-16 group-hover:bg-primary" />
            Projects
          </a>
          <a href="#contact" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/60 transition-all group-hover:w-16 group-hover:bg-primary" />
            Contact
          </a>
        </nav>

        <div className="flex flex-wrap gap-3">
          <a href="#projects">
            <Button className="gap-2">
              {content.primaryCta}
              <ArrowRight size={16} />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="gap-2">
              {content.secondaryCta}
              <Download size={16} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
