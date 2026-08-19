import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/projectCard";
import { cards } from "@/data/cards";

export function Methodology() {
  return (
    <section id="methodology" className="px-8 py-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Badge>{cards.badge}</Badge>

        <h2 className="mt-6 max-w-4xl text-3xl leading-none text-white md:text-5xl">
          {cards.title}
        </h2>

        <p className="mt-6 max-w-2xl text-primary">{cards.description}</p>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cards.projects.map((project) => (
            <ProjectCard
              key={project.id}
              number={project.id}
              title={project.title}
              subtitle={project.description}
              listItems={project.listItems}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
