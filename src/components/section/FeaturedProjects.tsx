import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { featuredProjectsData } from "@/data/featureProjects";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProjects() {
  return (
    <section id="featuredProjects" className="scroll-mt-28 px-8 py-4">
      <div className="mx-auto max-w-7xl">
        {/* Projects */}
        <div className="mt-8">
          {featuredProjectsData.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 120}>
              <article
                className={`grid items-center gap-10 py-8 md:grid-cols-2 md:gap-16 ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="space-y-6">
                  <p className="text-sm font-medium text-primary">
                    {project.id}
                  </p>
                  <h3 className="text-3xl font-bold text-white md:text-5xl">
                    {project.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Problem
                      </p>
                      <p className="mt-2 text-sm text-white">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Role
                      </p>
                      <p className="mt-2 text-sm text-white">{project.role}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm text-white">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                  <p className="max-w-xl text-base text-primary">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center gap-3 text-base font-medium text-pink-500"
                  >
                    <span className="relative">
                      {featuredProjectsData.link}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-pink-500 transition-all duration-300 group-hover/link:w-full" />
                    </span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Image */}
                <div>
                  <Link
                    to={`/projects/${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                    className="group block overflow-hidden rounded-3xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="pointer-events-none h-auto w-full select-none rounded-3xl
  border border-zinc-800 object-contain
  transition-all duration-500 ease-out
  group-hover:scale-[1.02]
  group-hover:brightness-75"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
