import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProjectsContent } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectsSectionProps = {
  content: ProjectsContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-5 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">{content.title}</h2>
        <p className="max-w-3xl text-sm text-muted-foreground">{content.description}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-1">
        {content.items.map((project) => (
          <Card
            key={project.title}
            className="group grid overflow-hidden border-border/60 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/35 md:grid-cols-[220px_1fr]"
          >
            <div className="relative h-48 w-full overflow-hidden md:h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex h-full flex-col justify-between p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-cyan-300"
              >
                {content.projectCta}
                <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
