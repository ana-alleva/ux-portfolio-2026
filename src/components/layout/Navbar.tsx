import { useState } from "react";
import { Menu } from "lucide-react";
import { useLocation } from "react-router";

import { Button } from "@/components/ui/button";
import { navData } from "@/data/navBar";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activeHash = location.hash;

  const getLinkClass = (hash: string) => {
    const isActive = activeHash === hash;

    return `
      rounded-full px-3 py-2 text-sm font-medium
      transition-all duration-300
      ${isActive ? "text-white" : "text-primary hover:text-white"}
    `;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white transition hover:text-pink-500"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {navData.title}
        </a>

        {/* Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            <li>
              <a
                href="/#featuredProjects"
                className={getLinkClass("#featuredProjects")}
              >
                {navData.work}
              </a>
            </li>

            <li>
              <a href="/#experience" className={getLinkClass("#experience")}>
                {navData.experience}
              </a>
            </li>

            <li>
              <a href="/#skills" className={getLinkClass("#skills")}>
                {navData.skills}
              </a>
            </li>

            <li className="ml-2">
              <a href="/#contact">
                <Button
                  variant="outline"
                  className="rounded-lg border-white/20 px-5 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  {navData.button}
                </Button>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile */}
        <Button
          className="flex md:hidden"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <Menu />
        </Button>

        {menuOpen && (
          <div className="absolute right-6 top-15 w-64 rounded-2xl border border-white/30 bg-black/95 p-6 shadow-2xl md:hidden">
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/#featuredProjects"
                  onClick={closeMenu}
                  className={getLinkClass("#featuredProjects")}
                >
                  {navData.work}
                </a>
              </li>

              <li>
                <a
                  href="/#experience"
                  onClick={closeMenu}
                  className={getLinkClass("#experience")}
                >
                  {navData.experience}
                </a>
              </li>

              <li>
                <a
                  href="/#skills"
                  onClick={closeMenu}
                  className={getLinkClass("#skills")}
                >
                  {navData.skills}
                </a>
              </li>

              <li className="mt-4">
                <a href="/#contact" onClick={closeMenu}>
                  <Button
                    variant="outline"
                    className="w-full rounded-lg border-white/20 hover:border-pink-500 hover:bg-pink-500 hover:text-black"
                  >
                    {navData.button}
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
