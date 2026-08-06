import { Badge } from "@/components/ui/badge";
import { ExperienceItem } from "@/components/ui/experienceItem";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <Badge>{experienceData.badge}</Badge>

        <div className="mt-6">
          <h2 className="mt-6 text-5xl text-white">{experienceData.title}</h2>

          <p className="mt-6 max-w-2xl text-primary">
            {experienceData.description}
          </p>
        </div>

        <div className="mt-20">
          {experienceData.jobs.map((job) => (
            <ExperienceItem
              key={job.company}
              years={job.years}
              role={job.role}
              company={job.company}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
