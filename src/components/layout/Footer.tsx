import { footerData } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-primary md:flex-row">
        <p>{footerData.copyright}</p>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
          {footerData.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
