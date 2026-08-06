type ExperienceItemProps = {
  years: string;
  role: string;
  company: string;
  description: string;
};

export function ExperienceItem({
  years,
  role,
  company,
  description,
}: ExperienceItemProps) {
  return (
    <>
      {/* Mobile */}
      <div className="relative border-l-2 border-pink-500 pl-8 py-10 md:hidden">
        <div className="absolute left-0 top-11 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-pink-500 bg-background" />

        <p className="text-sm font-medium text-primary">{years}</p>

        <h3 className="mt-3 font-serif text-3xl text-white">{role}</h3>

        <p className="mt-1 text-primary">
          at <span className="font-semibold text-white">{company}</span>
        </p>

        <p className="mt-6 leading-8 text-primary">{description}</p>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[180px_40px_1fr] gap-6 py-12">
        <div>
          <p className="text-lg font-medium text-primary">{years}</p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute top-2 h-4 w-4 rounded-full border-2 border-pink-500 bg-background" />
          <div className="w-px bg-border" />
        </div>

        <div className="pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-serif text-4xl text-white">{role}</h3>

            <span className="text-primary">at</span>

            <span className="font-semibold text-white">{company}</span>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-primary">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
