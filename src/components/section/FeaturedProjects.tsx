import { featuredProjectsData } from "@/data/featureProjects";
import { Badge } from "@/components/ui/badge";
import projectImage from "@/assets/project-1.png";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="px-8 py-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Badge variant="outline">{featuredProjectsData.badge}</Badge>

        <div className="mt-6 flex flex-col gap-4">
          <h2 className="max-w-4xl text-3xl md:text-5xl font-bold leading-none text-white">
            {featuredProjectsData.title}
          </h2>

          <p className="max-w-2xl text-sm md:text-lg text-primary">
            {featuredProjectsData.description}
          </p>
        </div>

        {/* Projects */}
        <div>
          {featuredProjectsData.projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid items-center gap-16 py-8 md:grid-cols-2 ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div className="space-y-6">
                <p className="text-sm font-medium text-primary">{project.id}</p>

                <h3 className="text-3xl md:text-5xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="max-w-xl text-base text-primary">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a className="flex gap-4 text-white text-base hover:text-pink-500">
                  {featuredProjectsData.link}
                  <ArrowRight />
                </a>
              </div>

              {/* Image */}
              <div>
                <img
                  src={projectImage}
                  alt={project.title}
                  className="w-full h-75 md:h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
