import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navData } from "@/data/navBar";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 backdrop-blur-md bg-background/50 px-4 py-2 w-full flex justify-between items-center border-b dark border-muted-foreground">
      <h1 className="flex text-white text-base">{navData.title}</h1>
      <nav className=" flex items-center justify-center">
        <ul className="hidden md:flex items-center gap-4 rounded-xl p-4">
          <li>
            <a
              className="text-white py-2 px-4 transition-all duration-300 hover:text-pink-500 rounded-md"
              href="#featuredProjects"
            >
              {navData.work}
            </a>
          </li>
          <li>
            <a
              className="text-white py-2 px-4 transition-all duration-300 hover:text-pink-500 rounded-md"
              href="#Methodology"
            >
              {navData.process}
            </a>
          </li>
          <li>
            <a
              className="text-white py-2 px-4 transition-all duration-300 hover:text-pink-500 rounded-md"
              href="#experience"
            >
              {navData.experience}
            </a>
          </li>
          <li>
            <a
              className="text-white py-2 px-4 transition-all duration-300 hover:text-pink-500 rounded-md"
              href="#skills"
            >
              {navData.about}
            </a>
          </li>
          <li>
            <a href="#contact">
              <Button variant="outline">{navData.button}</Button>
            </a>
          </li>
        </ul>
      </nav>
      <Button
        className="md:hidden flex"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Menu />
      </Button>
      {menuOpen && (
        <div className="absolute top-11 right-4 bg-background border border-muted-foreground rounded-lg p-2">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="text-base text-white py-2 transition-all duration-300 hover:text-pink-500 rounded-md"
                href="#featuredProjects"
              >
                {navData.work}
              </a>
            </li>
            <li>
              <a
                className="text-base text-white py-2 transition-all duration-300 hover:text-pink-500 rounded-md"
                href="#Methodology"
              >
                {navData.process}
              </a>
            </li>
            <li>
              <a
                className="text-base text-white py-2 transition-all duration-300 hover:text-pink-500 rounded-md"
                href="#experience"
              >
                {navData.experience}
              </a>
            </li>
            <li>
              <a
                className="text-base text-white py-2 transition-all duration-300 hover:text-pink-500 rounded-md"
                href="#skills"
              >
                {navData.about}
              </a>
            </li>
            <li>
              <a href="#contact">
                <Button variant="outline">{navData.button}</Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
