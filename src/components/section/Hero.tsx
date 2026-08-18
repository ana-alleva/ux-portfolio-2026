import profileImage from "@/assets/alleva-ana.png";
import { heroData } from "@/data/hero";
import heroWork from "@/assets/hero-work.png";

export function Hero() {
  return (
    <section className="mt-20 px-8 p-0 md:py-8 relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <img
          src={profileImage}
          alt="Ana Clara Alleva"
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
          className="mb-8 h-24 w-24 rounded-full border border-white/10 object-cover shadow-2xl md:h-24 md:w-24"
        />

        <p className="text-xs uppercase tracking-[0.3em] text-primary md:text-sm">
          {heroData.badge}
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl leading-none text-white md:mt-6 md:text-7xl lg:text-8xl">
          {heroData.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary md:text-xl">
          {heroData.description}
        </p>
      </div>
      <br />
      <div className="pointer-events-none flex justify-center">
        <div className="w-full max-w-6xl">
          <img
            src={heroWork}
            alt=""
            aria-hidden="true"
            className="w-full object-contain"
          />
          <div className="absolute inset-0 hidden md:block md:bg-[linear-gradient(to_bottom,transparent_0%,transparent_58%,rgba(0,0,0,0.05)_65%,rgba(0,0,0,0.2)_72%,rgba(0,0,0,0.5)_80%,rgba(0,0,0,0.8)_88%,black_96%)]" />
        </div>
      </div>
    </section>
  );
}
