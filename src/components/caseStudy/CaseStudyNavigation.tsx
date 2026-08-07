import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Link, useParams } from "react-router";

import { caseStudies } from "@/data/caseStudies";

export function CaseStudyNavigation() {
  const { slug } = useParams();

  const currentIndex = caseStudies.findIndex(
    (project) => project.slug === slug,
  );

  const previous = currentIndex > 0 ? caseStudies[currentIndex - 1] : undefined;

  const next =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : undefined;

  return (
    <div className="mx-auto mt-24 flex max-w-7xl items-center justify-between border-t border-white/10 pt-2 md:pt-10">
      <div className="flex flex-1">
        {previous ? (
          <Link
            to={`/projects/${previous.slug}`}
            className="group inline-flex items-center gap-3 text-primary transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />

            <div>
              <p className="text-xs uppercase tracking-wider">
                Previous Project
              </p>

              <p className="text-sm font-medium">{previous.hero.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <a
        href="#top"
        className="inline-flex items-center gap-2 text-primary transition-colors hover:text-white"
      >
        <ArrowUp size={18} />
        <span>Back to top</span>
      </a>

      <div className="flex flex-1 justify-end">
        {next ? (
          <Link
            to={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-3 text-right text-primary transition-colors hover:text-white"
          >
            <div>
              <p className="text-xs uppercase tracking-wider">Next Project</p>

              <p className="text-sm font-medium">{next.hero.title}</p>
            </div>

            <ArrowRight size={18} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
