import { Badge } from "@/components/ui/badge";

type ChallengeCard = {
  title: string;
  description: string;
};

type CaseStudyChallengeProps = {
  badge: string;
  title: string;
  description: string;
  cards: ChallengeCard[];
};

export function CaseStudyChallenge({
  badge,
  title,
  description,
  cards,
}: CaseStudyChallengeProps) {
  return (
    <section className="pt-4 md:py-20 lg:py-28">
      <Badge variant="outline">{badge}</Badge>

      <h2 className="mt-6 text-5xl text-white">{title}</h2>

      <p className="mt-6 max-w-3xl text-primary">{description}</p>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <h3 className="text-2xl text-white">{card.title}</h3>

            <p className="mt-4 text-primary">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
