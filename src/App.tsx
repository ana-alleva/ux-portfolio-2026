import { Navbar } from "./components/layout/Navbar";
import { FeaturedProjects } from "./components/section/FeaturedProjects";
import { Hero } from "./components/section/Hero";
import { Methodology } from "./components/section/Methodology";

function App() {
  return (
    <main className="max-w-[1440px] mx-auto min-h-screen overflow-x-hidden">
      <div className="w-full">
        <Navbar />
        <Hero />
        <FeaturedProjects />
        <Methodology />
      </div>
    </main>
  );
}

export default App;
