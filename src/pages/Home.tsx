import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/section/Contact";
import { Experience } from "@/components/section/Experience";
import { FeaturedProjects } from "@/components/section/FeaturedProjects";
import { Hero } from "@/components/section/Hero";
import { Methodology } from "@/components/section/Methodology";
import { Skills } from "@/components/section/Skills";

export function Home() {
  return (
    <main
      id="top"
      className="mx-auto min-h-screen max-w-[1440px] overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Methodology />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
