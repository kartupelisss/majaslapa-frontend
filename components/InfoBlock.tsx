import { ReactNode } from "react";

interface InfoBlockProps {
  title: string;
  content: ReactNode;
  index: number;
}

export function InfoBlock({ title, content, index }: InfoBlockProps) {
  return (
    <div 
      className="group rounded-xl border border-border bg-gradient-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-start gap-3">
        <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent text-sm font-bold text-primary">
          {index + 1}
        </span>
        <span className="pt-1">{title}</span>
      </h3>
      <div className="text-muted-foreground leading-relaxed space-y-3 pl-11">
        {content}
      </div>
    </div>
  );
}