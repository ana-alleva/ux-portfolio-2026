type SolutionItem = {
  number: string;
  title: string;
  description: string;
  image: string;
};

type AmaTravelSolutionProps = {
  title: string;
  description: string;
  items: SolutionItem[];
};

export function AmaTravelSolution({
  title,
  description,
  items,
}: AmaTravelSolutionProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 md:py-28">
      <div>
        <h2 className="text-4xl leading-none text-white md:text-6xl">
          {title}
        </h2>

        <p className="mt-6 max-w-5xl text-base leading-8 text-primary md:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
        {items.map((item, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <div
              key={item.number}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={imageFirst ? "" : "lg:order-2"}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className={imageFirst ? "" : "lg:order-1"}>
                <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                  {item.number}
                </p>

                <h3 className="mt-4 text-4xl leading-none text-white md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-primary">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
