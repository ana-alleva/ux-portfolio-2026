import { Badge } from "@/components/ui/badge";

type Metric = {
  value: string;
  label: string;
};

type CaseStudyResearchProps = {
  badge: string;
  title: string;
  description: string;
  metrics: Metric[];
  image: string;
};

export function CaseStudyResearch({
  badge,
  title,
  description,
  metrics,
  image,
}: CaseStudyResearchProps) {
  return (
    <section className="pt-4 md:py-20 lg:py-28">
      <Badge variant="outline">{badge}</Badge>

      <div className="mt-8 grid gap-16 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-5xl text-white">{title}</h2>

          <p className="mt-6 max-w-3xl leading-8 text-primary">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <h3 className="text-5xl text-pink-500">{metric.value}</h3>

              <p className="mt-2 text-primary">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <img
        src={image}
        alt={title}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="mt-16 block h-auto max-h-none w-full max-w-full rounded-2xl object-contain md:rounded-3xl border-1 border-zinc-800"
      />
    </section>
  );
}
