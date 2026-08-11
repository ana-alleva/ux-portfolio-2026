type AmaTravelContextProps = {
  badge: string;
  title: string;
  description: string;
  opportunity: {
    title: string;
    description: string;
  };
  image: string;
};

export function AmaTravelContext({
  badge,
  title,
  description,
  opportunity,
  image,
}: AmaTravelContextProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_0.5fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-pink-500">
            {badge}
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl leading-none text-white md:text-6xl">
            {title}
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-primary md:text-lg">
            {description}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
            {opportunity.title}
          </p>

          <p className="mt-4 text-base leading-7 text-primary">
            {opportunity.description}
          </p>
        </div>
      </div>

      <img
        src={image}
        alt={title}
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
        className="mt-10 h-auto w-full rounded-xl object-contain md:mt-16 md:rounded-3xl"
      />
    </section>
  );
}
