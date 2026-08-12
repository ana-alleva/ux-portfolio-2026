type AmaTravelRoleProps = {
  title: string;
  items: string[];
};

export function AmaTravelRole({ title, items }: AmaTravelRoleProps) {
  return (
    <section className="mx-auto max-w-7xl px-8">
      {/* ana sacaste py-28  */}
      <div className="rounded-2xl border border-border bg-card px-8 p-6 md:p-10">
        <h2 className="text-4xl leading-none text-white md:text-5xl">
          {title}
        </h2>

        <div className="mt-8 border-t border-border pt-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-4 text-base leading-7 text-primary"
              >
                <span className="mt-2 text-pink-500">•</span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
