import { Navbar } from "./components/layout/Navbar";
import { Experience } from "./components/section/Experience";
import { FeaturedProjects } from "./components/section/FeaturedProjects";
import { Hero } from "./components/section/Hero";
import { Methodology } from "./components/section/Methodology";
import { Skills } from "./components/section/Skills";

function App() {
  return (
    <main className="max-w-[1440px] mx-auto min-h-screen overflow-x-hidden">
      <div className="w-full">
        <Navbar />
        <Hero />
        <FeaturedProjects />
        <Methodology />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}

export default App;
