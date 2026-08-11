type AmaTravelValidationProps = {
  title: string;
  paragraphs: string[];
};

export function AmaTravelValidation({
  title,
  paragraphs,
}: AmaTravelValidationProps) {
  return (
    <section className="mx-auto max-w-7xl px-8">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="text-4xl leading-none text-white md:text-5xl">
          {title}
        </h2>

        <div className="mt-8 border-t border-border pt-8">
          <div className="max-w-5xl space-y-6">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-primary md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
