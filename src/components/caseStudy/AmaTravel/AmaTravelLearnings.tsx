type LearningCard = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type AmaTravelLearningsProps = {
  title: string;
  tags: string[];
  cards: LearningCard[];
};

export function AmaTravelLearnings({
  title,
  tags,
  cards,
}: AmaTravelLearningsProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 md:py-28">
      <h2 className="max-w-4xl text-4xl leading-none text-white md:text-6xl">
        {title}
      </h2>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-4 py-2 text-xs text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.number}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
              {card.number} · {card.label}
            </p>

            <h3 className="mt-6 text-3xl leading-tight text-white">
              {card.title}
            </h3>

            <div className="my-6 h-px bg-border" />

            <p className="text-base leading-7 text-primary">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
