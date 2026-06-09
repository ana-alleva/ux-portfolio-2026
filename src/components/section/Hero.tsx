import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="mx-auto max-w-6xl px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          UX Researcher & Product Designer
        </p>

        <h1 className="mt-6 max-w-4xl text-6xl font-bold leading-none md:text-8xl">
          Ana Clara
        </h1>

        <p className="mt-8 max-w-xl text-lg text-zinc-400">
          Creating thoughtful digital experiences through research, strategy and
          design.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>View Work</Button>

          <Button variant="outline">Download CV</Button>
        </div>
      </div>
    </section>
  );
}
