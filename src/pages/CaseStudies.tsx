import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { caseStudies } from "@/data/caseStudies";

import { CaseStudyOverview } from "@/components/caseStudy/CaseStudyOverview";
import { CaseStudyChallenge } from "@/components/caseStudy/CaseStudyChallenge";
import { CaseStudyResearch } from "@/components/caseStudy/CaseStudyResearch";
import { CaseStudyInsights } from "@/components/caseStudy/CaseStudyInsights";
import { CaseStudySolution } from "@/components/caseStudy/CaseStudySolution";
import { CaseStudyResults } from "@/components/caseStudy/CaseStudyResults";
import { CaseStudyNavigation } from "@/components/caseStudy/CaseStudyNavigation";
import { OutcomeLearnings } from "@/components/ui/OutcomeLearnings";

export function CaseStudy() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find((project) => project.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <main id="top" className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-7xl px-8 pb-20 pt-24 md:pt-32">
        <div className="mt-4 flex flex-col items-start gap-4 md:mt-0">
          <Link
            to="/#featuredProjects"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-pink-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <Badge variant="outline">{caseStudy.hero.badge}</Badge>
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl leading-none text-white md:text-8xl">
          {caseStudy.hero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-primary">
          {caseStudy.hero.description}
        </p>

        {caseStudy.hero.actions?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {caseStudy.hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="inline-flex"
              >
                <Button variant="outline">
                  {action.label}

                  {action.external && <ExternalLink className="ml-2 h-4 w-4" />}
                </Button>
              </a>
            ))}
          </div>
        )}

        <img
          src={caseStudy.hero.image}
          alt={caseStudy.hero.title}
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
          className="mt-8 h-auto w-full rounded-xl object-contain md:mt-20 md:rounded-3xl"
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

        {caseStudy.outcome && (
          <OutcomeLearnings
            outcome={caseStudy.outcome.outcome}
            learnings={caseStudy.outcome.learnings}
            nextStep={caseStudy.outcome.nextStep}
          />
        )}

        <CaseStudyNavigation />
      </section>

      <Footer />
    </main>
  );
}
