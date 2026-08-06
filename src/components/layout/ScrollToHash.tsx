import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToSection = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Espera a que la Home termine de renderizar sus secciones.
    const timeout = window.setTimeout(scrollToSection, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [location.pathname, location.hash]);

  return null;
}
