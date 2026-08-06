import { Badge } from "@/components/ui/badge";

type OverviewDetail = {
  label: string;
  value: string;
};

type CaseStudyOverviewProps = {
  badge: string;
  title: string;
  description: string;
  details: OverviewDetail[];
};

export function CaseStudyOverview({
  badge,
  title,
  description,
  details,
}: CaseStudyOverviewProps) {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
        <div>
          <Badge variant="outline">{badge}</Badge>

          <h2 className="mt-6 text-4xl leading-none text-white md:text-6xl">
            {title}
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-primary md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-0 rounded-2xl border border-border bg-card px-6">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="border-b border-border py-6 last:border-b-0"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                {detail.label}
              </p>

              <p className="mt-2 text-base text-white">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
