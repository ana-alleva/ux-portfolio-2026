import { Hero } from "./components/section/Hero";

function App() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold">Ana Clara</h1>

        <p className="mt-4 text-xl text-zinc-400">
          UX Researcher & Product Designer
        </p>
        <Hero />
      </div>
    </main>
  );
}

export default App;
