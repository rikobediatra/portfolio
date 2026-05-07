import { Mail, Link as LinkIcon } from "lucide-react";
import { ContactContent } from "@/lib/types";
import { Card } from "@/components/ui/card";

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="space-y-5 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">{content.title}</h2>
        <p className="max-w-3xl text-muted-foreground">{content.description}</p>
      </div>
      <Card className="space-y-4 border-border/60 bg-transparent p-0 shadow-none">
        {content.links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/20 px-4 py-3 transition-colors hover:bg-accent"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              {item.label === "Email" ? <Mail size={15} /> : <LinkIcon size={15} />}
              {item.label}
            </span>
            <span className="text-sm text-muted-foreground">{item.value}</span>
          </a>
        ))}
      </Card>
    </section>
  );
}
