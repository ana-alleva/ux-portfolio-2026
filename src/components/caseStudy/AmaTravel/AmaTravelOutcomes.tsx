type OutcomeMetric = {
  value: string;
  label: string;
};

type AmaTravelOutcomesProps = {
  title: string;
  metrics: OutcomeMetric[];
  description: string;
};

export function AmaTravelOutcomes({
  title,
  metrics,
  description,
}: AmaTravelOutcomesProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 md:py-28">
      <h2 className="text-4xl leading-none text-white md:text-6xl">{title}</h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-3xl leading-none text-pink-500 md:text-4xl">
              {metric.value}
            </p>

            <p className="mt-4 text-sm leading-6 text-primary">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-5xl text-base leading-8 text-primary md:text-lg">
        {description}
      </p>
    </section>
  );
}
