import { Button } from "@/components/ui/button";
import Img from "@/assets/alleva-ana.png";

export function Hero() {
  return (
    <section className="flex flex-row justify-center items-center gap-8 p-6">
      <div>
        <img className="size-96 rounded-full" src={Img} alt="profile-pic" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
          UX Researcher & Product Designer
        </p>
        <div>
          <h1 className="mt-6 mb-0 max-w-4xl text-6xl font-bold leading-none md:text-8xl text-white">
            Ana Clara Alleva
          </h1>
          <p className="max-w-xl text-lg text-neutral-400">
            Creating thoughtful digital experiences through research, strategy
            and design.
          </p>
        </div>

        <div className="mt-10 flex gap-4">
          <Button>View Work</Button>

          <Button variant="outline">Download CV</Button>
        </div>
      </div>
    </section>
  );
}
