import { FaGithub, FaLinkedin } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Ana Clara Alleva</h3>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-primary">
            Lead UX/UI Designer specialized in AI-powered and Enterprise SaaS
            products. Available for remote opportunities.
          </p>

          <p className="mt-4 text-xs text-primary">
            © {new Date().getFullYear()} Ana Clara Alleva. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ana-alleva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-primary transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/aalleva/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
