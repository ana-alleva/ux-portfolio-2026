import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

type Metric = {
  value: string;
  label: string;
};

type CaseStudyResultsProps = {
  badge: string;
  title: string;
  description: string;
  metrics: Metric[];
  learnings: string[];
};

export function CaseStudyResults({
  badge,
  title,
  description,
  metrics,
  learnings,
}: CaseStudyResultsProps) {
  return (
    <section className="py-24">
      <Badge variant="outline">{badge}</Badge>

      <h2 className="mt-6 max-w-4xl text-4xl leading-none text-white md:text-6xl">
        {title}
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-primary md:text-lg">
        {description}
      </p>

      {/* Metrics */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <h3 className="text-5xl text-pink-500">{metric.value}</h3>

            <p className="mt-4 text-primary">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Learnings */}
      <div className="mt-20 rounded-3xl border border-border bg-card p-10">
        <h3 className="text-3xl text-white">Key Learnings</h3>

        <ul className="mt-8 space-y-5">
          {learnings.map((learning) => (
            <li key={learning} className="flex items-start gap-4 text-primary">
              <Check className="mt-1 h-5 w-5 shrink-0 text-pink-500" />

              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
