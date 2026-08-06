import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { featuredProjectsData } from "@/data/featureProjects";

export function FeaturedProjects() {
  return (
    <section id="featuredProjects" className="scroll-mt-28 px-8 py-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Badge variant="outline">{featuredProjectsData.badge}</Badge>

          <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-none text-white md:text-5xl">
            {featuredProjectsData.title}
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-primary md:text-lg">
            {featuredProjectsData.description}
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12">
          {featuredProjectsData.projects.map((project, index) => (
            <article
              key={project.id}
              className={`grid items-center gap-10 py-8 md:grid-cols-2 md:gap-16 ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div className="space-y-6">
                <p className="text-sm font-medium text-primary">{project.id}</p>

                <h3 className="text-3xl font-bold text-white md:text-5xl">
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

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-3 text-base text-white transition-colors duration-300 hover:text-pink-500"
                >
                  {featuredProjectsData.link}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="pointer-events-none h-[300px] w-full select-none rounded-3xl object-cover md:h-auto"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
