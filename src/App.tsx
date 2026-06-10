import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/section/Hero";

function App() {
  return (
    <main className="max-w-[1440px] mx-auto min-h-screen overflow-x-hidden">
      <div className="w-full">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;
