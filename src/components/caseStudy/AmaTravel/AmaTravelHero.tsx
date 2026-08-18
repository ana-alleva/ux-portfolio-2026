import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CaseStudyTopNavigation } from "@/components/caseStudy/CaseStudyTopNavigation";
import { ExternalLink } from "lucide-react";

type HeroDetail = {
  label: string;
  value: string;
};

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
};

type AmaTravelHeroProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
  details: HeroDetail[];
  actions?: HeroAction[];
};

export function AmaTravelHero({
  badge,
  title,
  description,
  image,
  details,
  actions,
}: AmaTravelHeroProps) {
  return (
    <section id="top" className="mx-auto max-w-7xl px-8 pt-24 md:pt-32">
      <div className="flex flex-col items-start">
        <CaseStudyTopNavigation currentSlug="travel-insurance-audit" />

        <Badge variant="outline" className="mt-6">
          {badge}
        </Badge>

        <h1 className="mt-6 max-w-5xl text-4xl leading-none text-white md:text-7xl lg:text-8xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary md:text-xl">
          {description}
        </p>

        {actions?.length ? (
          <div className="mt-8 flex flex-wrap gap-4">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
              >
                <Button variant="outline">
                  {action.label}

                  {action.external && <ExternalLink className="ml-2 h-4 w-4" />}
                </Button>
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid w-full gap-6 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
                {detail.label}
              </p>

              <p className="mt-2 text-sm text-white md:text-base">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <img
          src={image}
          alt={title}
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
          className="mt-10 h-auto w-full rounded-xl object-contain md:mt-16 md:rounded-3xl"
        />
      </div>
    </section>
  );
}
