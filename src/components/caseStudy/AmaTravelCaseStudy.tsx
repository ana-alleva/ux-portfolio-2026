import { caseStudies } from "@/data/caseStudies";
import { AmaTravelHero } from "@/components/caseStudy/AmaTravel/AmaTravelHero";
import { AmaTravelContext } from "@/components/caseStudy/AmaTravel/AmaTravelContext";
import { CaseStudyNavigation } from "@/components/caseStudy/CaseStudyNavigation";
import { AmaTravelRole } from "@/components/caseStudy/AmaTravel/AmaTravelRole";
import { AmaTravelLearnings } from "@/components/caseStudy/AmaTravel/AmaTravelLearnings";
import { AmaTravelDesignDecisions } from "@/components/caseStudy/AmaTravel/AmaTravelDesignDecisions";
import { AmaTravelSolution } from "@/components/caseStudy/AmaTravel/AmaTravelSolution";
import { AmaTravelEvaluation } from "@/components/caseStudy/AmaTravel/AmaTravelEvaluation";
import { AmaTravelOutcomes } from "@/components/caseStudy/AmaTravel/AmaTravelOutcomes";
import { AmaTravelValidation } from "@/components/caseStudy/AmaTravel/AmaTravelValidation";

export function AmaTravelCaseStudy() {
  const caseStudy = caseStudies.find(
    (project) => project.slug === "travel-insurance-audit",
  );

  if (
    !caseStudy ||
    !caseStudy.hero.details ||
    !caseStudy.context ||
    !caseStudy.role ||
    !caseStudy.learnings ||
    !caseStudy.designDecisions ||
    !caseStudy.solutionOverview ||
    !caseStudy.evaluation ||
    !caseStudy.outcomes ||
    !caseStudy.validation
  ) {
    return null;
  }

  return (
    <div className="pb-20">
      <AmaTravelHero
        badge={caseStudy.hero.badge}
        title={caseStudy.hero.title}
        description={caseStudy.hero.description}
        image={caseStudy.hero.image}
        details={caseStudy.hero.details}
        actions={caseStudy.hero.actions}
      />
      <AmaTravelContext
        badge={caseStudy.context.badge}
        title={caseStudy.context.title}
        description={caseStudy.context.description}
        opportunity={caseStudy.context.opportunity}
        image={caseStudy.context.image}
      />
      <AmaTravelRole
        title={caseStudy.role.title}
        items={caseStudy.role.items}
      />
      <AmaTravelLearnings
        title={caseStudy.learnings.title}
        tags={caseStudy.learnings.tags}
        cards={caseStudy.learnings.cards}
      />
      <AmaTravelDesignDecisions decisions={caseStudy.designDecisions} />
      <AmaTravelSolution
        title={caseStudy.solutionOverview.title}
        description={caseStudy.solutionOverview.description}
        items={caseStudy.solutionOverview.items}
      />
      <AmaTravelEvaluation
        title={caseStudy.evaluation.title}
        description={caseStudy.evaluation.description}
        criteria={caseStudy.evaluation.criteria}
      />
      <AmaTravelOutcomes
        title={caseStudy.outcomes.title}
        metrics={caseStudy.outcomes.metrics}
        description={caseStudy.outcomes.description}
      />
      <AmaTravelValidation
        title={caseStudy.validation.title}
        paragraphs={caseStudy.validation.paragraphs}
      />
      <CaseStudyNavigation />
    </div>
  );
}
