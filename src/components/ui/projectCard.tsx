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
    <article className="rounded-3xl border border-border bg-card p-10">
      {number && <p className="text-4xl text-pink-500">{number}</p>}

      <div className={number ? "mt-8 flex flex-col" : "flex flex-col"}>
        <h3 className="text-4xl font-semibold text-white">{title}</h3>

        {subtitle && <p className="mt-6 text-lg text-primary">{subtitle}</p>}

        {listItems && listItems.length > 0 && (
          <>
            <div className="my-8 h-px bg-border" />

            <ul className="space-y-4">
              {listItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary">
                  <Check className="h-4 w-4 text-pink-500" />
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
