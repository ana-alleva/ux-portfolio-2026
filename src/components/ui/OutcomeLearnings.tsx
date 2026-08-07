type OutcomeLearningsProps = {
  outcome: string;
  learnings: string;
  nextStep?: string;
};

export function OutcomeLearnings({
  outcome,
  learnings,
  nextStep,
}: OutcomeLearningsProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
        Outcome & Learnings
      </p>

      <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
        What changed and what comes next
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-wider text-primary">
            Outcome
          </p>

          <p className="max-w-xl text-base leading-relaxed text-primary md:text-lg">
            {outcome}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-wider text-primary">
            Key Learning
          </p>

          <p className="max-w-xl text-base leading-relaxed text-primary md:text-lg">
            {learnings}
          </p>
        </div>
      </div>

      {nextStep && (
        <div className="mt-10 border-t border-white/10 pt-10">
          <p className="mb-3 text-sm uppercase tracking-wider text-primary">
            Next Step
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-primary md:text-lg">
            {nextStep}
          </p>
        </div>
      )}
    </section>
  );
}
