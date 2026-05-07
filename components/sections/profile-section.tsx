import { ProfileContent } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProfileSectionProps = {
  content: ProfileContent;
};

export function ProfileSection({ content }: ProfileSectionProps) {
  return (
    <section id="profile" className="space-y-5 scroll-mt-24">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">{content.title}</h2>
      <Card className="space-y-5 border-border/70 bg-transparent p-0 shadow-none">
        <p className="leading-relaxed text-muted-foreground">{content.description}</p>
        <div className="flex flex-wrap gap-2">
          {content.highlights.map((item) => (
            <Badge key={item} className="bg-secondary/60">
              {item}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
