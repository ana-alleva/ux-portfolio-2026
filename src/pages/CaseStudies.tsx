import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyOverview } from "@/components/caseStudy/CaseStudyOverview";
import { CaseStudyChallenge } from "@/components/caseStudy/CaseStudyChallenge";
import { CaseStudyResearch } from "@/components/caseStudy/CaseStudyResearch";
import { CaseStudyInsights } from "@/components/caseStudy/CaseStudyInsights";
import { CaseStudySolution } from "@/components/caseStudy/CaseStudySolution";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyResults } from "@/components/caseStudy/CaseStudyResults";

export function CaseStudy() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find((project) => project.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-32 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary transition hover:text-pink-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <Badge variant="outline" className="mt-16">
          {caseStudy.hero.badge}
        </Badge>

        <h1 className="mt-8 max-w-5xl text-5xl leading-none text-white md:text-8xl">
          {caseStudy.hero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-primary">
          {caseStudy.hero.description}
        </p>

        <img
          src={caseStudy.hero.image}
          alt={caseStudy.hero.title}
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
          className="mt-8 md:mt-20 h-auto w-full rounded-xl md:rounded-3xl object-contain md:object-cover"
        />
        <CaseStudyOverview
          badge={caseStudy.overview.badge}
          title={caseStudy.overview.title}
          description={caseStudy.overview.description}
          details={caseStudy.overview.details}
        />
        <CaseStudyChallenge
          badge={caseStudy.challenge.badge}
          title={caseStudy.challenge.title}
          description={caseStudy.challenge.description}
          cards={caseStudy.challenge.cards}
        />
        <CaseStudyResearch
          badge={caseStudy.research.badge}
          title={caseStudy.research.title}
          description={caseStudy.research.description}
          metrics={caseStudy.research.metrics}
          image={caseStudy.research.image}
        />
        <CaseStudyInsights
          badge={caseStudy.insights.badge}
          title={caseStudy.insights.title}
          description={caseStudy.insights.description}
          cards={caseStudy.insights.cards}
        />
        <CaseStudySolution
          badge={caseStudy.solution.badge}
          title={caseStudy.solution.title}
          description={caseStudy.solution.description}
          features={caseStudy.solution.features}
        />
        <CaseStudyResults
          badge={caseStudy.results.badge}
          title={caseStudy.results.title}
          description={caseStudy.results.description}
          metrics={caseStudy.results.metrics}
          learnings={caseStudy.results.learnings}
        />
      </section>
      <Footer />
    </main>
  );
}
