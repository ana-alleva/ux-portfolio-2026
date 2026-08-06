import { Badge } from "@/components/ui/badge";

type SolutionFeature = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

type CaseStudySolutionProps = {
  badge: string;
  title: string;
  description: string;
  features: SolutionFeature[];
};

export function CaseStudySolution({
  badge,
  title,
  description,
  features,
}: CaseStudySolutionProps) {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <Badge variant="outline">{badge}</Badge>

      <h2 className="mt-6 max-w-4xl text-4xl leading-none text-white md:text-6xl">
        {title}
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-primary md:text-lg">
        {description}
      </p>

      <div className="mt-20 space-y-20 md:space-y-28">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                {feature.eyebrow}
              </p>

              <h3 className="mt-4 text-3xl text-white md:text-5xl">
                {feature.title}
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-primary">
                {feature.description}
              </p>
            </div>

            <img
              src={feature.image}
              alt={feature.title}
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              className="pointer-events-none h-[300px] w-full select-none rounded-3xl object-cover md:h-auto"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
