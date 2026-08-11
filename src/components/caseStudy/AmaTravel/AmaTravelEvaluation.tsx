type AmaTravelEvaluationProps = {
  title: string;
  description: string;
  criteria: string[];
};

export function AmaTravelEvaluation({
  title,
  description,
  criteria,
}: AmaTravelEvaluationProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl leading-none text-white md:text-6xl">
            {title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-primary md:text-lg">
            {description}
          </p>
        </div>

        <ul className="space-y-4 lg:pt-16">
          {criteria.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-7 text-primary"
            >
              <span className="mt-2 text-pink-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
