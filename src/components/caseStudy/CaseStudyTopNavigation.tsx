import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

type CaseStudyTopNavigationProps = {
  currentSlug: string;
};

export function CaseStudyTopNavigation({
  currentSlug,
}: CaseStudyTopNavigationProps) {
  const currentIndex = caseStudies.findIndex(
    (project) => project.slug === currentSlug,
  );

  const nextIndex =
    currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;

  const nextProject = caseStudies[nextIndex];

  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-pink-500"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Portfolio
      </Link>

      {nextProject && (
        <Link
          to={`/projects/${nextProject.slug}`}
          className="group inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-pink-500"
        >
          Next Case Study
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
