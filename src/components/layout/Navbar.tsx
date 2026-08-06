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
      rounded-md px-4 py-2
      text-white
      transition-colors duration-300
      hover:text-pink-500
      ${isActive ? "text-pink-500" : ""}
    `;
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-muted-foreground bg-background/50 px-4 py-2 backdrop-blur-md">
      <a href="/" className="text-base text-white">
        {navData.title}
      </a>

      {/* Desktop */}
      <nav>
        <ul className="hidden items-center gap-4 rounded-xl p-4 md:flex">
          <li>
            <a
              href="/#featuredProjects"
              className={getLinkClass("#featuredProjects")}
            >
              {navData.work}
            </a>
          </li>

          <li>
            <a href="/#methodology" className={getLinkClass("#methodology")}>
              {navData.process}
            </a>
          </li>

          <li>
            <a href="/#experience" className={getLinkClass("#experience")}>
              {navData.experience}
            </a>
          </li>

          <li>
            <a href="/#skills" className={getLinkClass("#skills")}>
              {navData.about}
            </a>
          </li>

          <li>
            <a href="/#contact">
              <Button
                variant="outline"
                className={
                  activeHash === "#contact"
                    ? "border-pink-500 bg-pink-500 text-white hover:bg-pink-600 hover:text-white"
                    : ""
                }
              >
                {navData.button}
              </Button>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile button */}
      <Button
        className="flex md:hidden"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        <Menu />
      </Button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute right-4 top-16 rounded-lg border border-muted-foreground bg-background p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="/#featuredProjects"
                onClick={closeMenu}
                className={`block ${getLinkClass("#featuredProjects")}`}
              >
                {navData.work}
              </a>
            </li>

            <li>
              <a
                href="/#methodology"
                onClick={closeMenu}
                className={`block ${getLinkClass("#methodology")}`}
              >
                {navData.process}
              </a>
            </li>

            <li>
              <a
                href="/#experience"
                onClick={closeMenu}
                className={`block ${getLinkClass("#experience")}`}
              >
                {navData.experience}
              </a>
            </li>

            <li>
              <a
                href="/#skills"
                onClick={closeMenu}
                className={`block ${getLinkClass("#skills")}`}
              >
                {navData.about}
              </a>
            </li>

            <li>
              <a href="/#contact" onClick={closeMenu}>
                <Button
                  variant="outline"
                  className={
                    activeHash === "#contact"
                      ? "border-pink-500 bg-pink-500 text-white hover:bg-pink-600 hover:text-white"
                      : ""
                  }
                >
                  {navData.button}
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
