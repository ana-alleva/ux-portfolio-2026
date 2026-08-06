import { Badge } from "@/components/ui/badge";

type InsightCard = {
  number: string;
  title: string;
  description: string;
};

type CaseStudyInsightsProps = {
  badge: string;
  title: string;
  description: string;
  cards: InsightCard[];
};

export function CaseStudyInsights({
  badge,
  title,
  description,
  cards,
}: CaseStudyInsightsProps) {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl">
        <Badge variant="outline">{badge}</Badge>

        <h2 className="mt-6 text-5xl text-white">{title}</h2>

        <p className="mt-6 max-w-3xl text-primary">{description}</p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.number}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <p className="text-4xl text-pink-500">{card.number}</p>

              <h3 className="mt-8 text-3xl text-white">{card.title}</h3>

              <p className="mt-6 leading-8 text-primary">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
