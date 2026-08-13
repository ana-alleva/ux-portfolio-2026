import type { ReactNode } from "react";
import { Check } from "lucide-react";

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  number?: string;
  listItems?: string[];
  children?: ReactNode;
};

export function ProjectCard({
  title,
  subtitle,
  number,
  listItems,
  children,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 md:p-10 lg:p-12">
      {number && <p className="text-2xl text-pink-500">{number}</p>}

      <div className={number ? "mt-8 flex flex-col" : "flex flex-col"}>
        <h3 className="text-2xl font-semibold leading-tight text-white md:text-4xl">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-4 text-sm leading-6 text-primary md:mt-6 md:text-lg">
            {subtitle}
          </p>
        )}

        {listItems && listItems.length > 0 && (
          <>
            <div className="my-6 h-px bg-border md:my-8" />

            <ul className="space-y-3 md:space-y-4">
              {listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm leading-6 text-primary md:gap-3 md:text-base"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-pink-500 md:h-4 md:w-4" />
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </article>
  );
}
