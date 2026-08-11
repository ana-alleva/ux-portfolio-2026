type DesignDecision = {
  number: string;
  title: string;
  problem: string;
  decision: string;
  why: string;
  image: string;
  imageLabel: string;
  takeaway: {
    label: string;
    description: string;
  };
};

type AmaTravelDesignDecisionsProps = {
  decisions: DesignDecision[];
};

export function AmaTravelDesignDecisions({
  decisions,
}: AmaTravelDesignDecisionsProps) {
  return (
    <section className="mx-auto max-w-7xl px-8">
      {/* sacaste el py28 y p20 */}
      <div className="flex flex-col gap-10">
        {decisions.map((item) => (
          <article
            key={item.number}
            className="rounded-2xl border border-border bg-card p-6 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
              Design Decision {item.number}
            </p>

            <h2 className="mt-4 max-w-5xl text-4xl leading-none text-white md:text-6xl">
              {item.title}
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                    Problem
                  </p>

                  <p className="mt-3 text-base leading-7 text-primary">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                    Decision
                  </p>

                  <p className="mt-3 text-base leading-7 text-primary">
                    {item.decision}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                    Why
                  </p>

                  <p className="mt-3 text-base leading-7 text-primary">
                    {item.why}
                  </p>
                </div>
              </div>

              <div className="flex min-h-80 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background">
                <img
                  src={item.image}
                  alt={item.imageLabel}
                  draggable={false}
                  onContextMenu={(event) => event.preventDefault()}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-pink-500/30 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                {item.takeaway.label}
              </p>

              <p className="mt-2 text-sm leading-6 text-primary">
                {item.takeaway.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
