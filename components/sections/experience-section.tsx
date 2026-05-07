import { ExperienceContent } from "@/lib/types";
import { Card } from "@/components/ui/card";
import {
  Container,
  Database,
  FileCode2,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Server,
  Wind
} from "lucide-react";

type ExperienceSectionProps = {
  content: ExperienceContent;
};

function getTechIcon(tech: string) {
  const key = tech.toLowerCase();

  if (key.includes("react") || key.includes("next")) return Globe;
  if (key.includes("express") || key.includes("lumen")) return Server;
  if (key.includes("redis") || key.includes("postgres") || key.includes("mysql")) return Database;
  if (key.includes("docker")) return Container;
  if (key.includes("grafana")) return Gauge;
  if (key.includes("git")) return GitBranch;
  if (key.includes("tailwind")) return Wind;
  if (key.includes("vue")) return Layers;

  return FileCode2;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-5 scroll-mt-24">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">{content.title}</h2>
      <div className="space-y-4">
        {content.items.map((item) => (
          <Card
            key={`${item.company}-${item.period}`}
            className="space-y-3 border-border/60 bg-transparent p-5 transition-all duration-200 hover:border-primary/40 hover:bg-card/35"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold md:text-xl">{item.role}</h3>
              <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-secondary-foreground">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-primary">{item.company}</p>
            <p className="leading-relaxed text-muted-foreground">{item.description}</p>
            <div className="pt-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech) => {
                  const Icon = getTechIcon(tech);

                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      <Icon size={14} className="text-primary" />
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
