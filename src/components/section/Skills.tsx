import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/projectCard";
import { skillsData } from "@/data/skills";

export function Skills() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge variant="outline">{skillsData.badge}</Badge>

        <h2 className="mt-6 text-4xl text-white md:text-6xl">
          {skillsData.title}
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillsData.categories.map((category) => (
            <ProjectCard
              key={category.id}
              title={category.title}
              listItems={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
