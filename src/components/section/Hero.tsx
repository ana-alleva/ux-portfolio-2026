import { heroData } from "@/data/hero";
import { Reveal } from "@/components/ui/Reveal";
import heroShowcase from "@/assets/hero-showcase.png";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function Hero() {
  return (
    <section id="hero" className="px-6 pb-16 pt-28 md:px-12 md:pb-10 md:pt-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* LEFT */}
        <div className="w-full min-w-0">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-500 md:text-sm">
            {heroData.badge}
          </p>

          <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
            {heroData.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary md:text-xl">
            {heroData.description}
          </p>

          {/* STATS */}
          <div className="mt-10 grid w-full grid-cols-1 gap-6 border-t border-white/10 py-6 sm:grid-cols-3 sm:gap-4 md:gap-8 lg:max-w-xl">
            <div>
              <p className="text-3xl font-semibold text-pink-500">10+</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-pink-500">10+</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                Products Designed
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-pink-500">B2B</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                SaaS & AI
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <Reveal delay={200}>
          <div className="relative hidden lg:block">
            {/* Pink ambient glow */}
            <div
              className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[80%]
      w-[90%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-pink-500/50
      blur-[120px]
    "
            />

            {/* Artwork */}
            <img
              src={heroShowcase}
              alt="Selected product design work"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>

      <div className="hidden md:flex mb-4 justify-center md:mb-8">
        <ScrollIndicator />
      </div>
      {/* WORKED WITH */}
      <div className="mx-auto mt-4 flex max-w-7xl flex-col items-center border-y border-white/10 py-10 md:mt-8">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-primary">
          Selected work includes projects with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg font-semibold tracking-wide text-white/70 md:text-xl">
          <span>Nortal</span>
          <span>IOHK</span>
          <span>ConnectXD</span>
          <span>Renaiss AI</span>
          <span>Atix Labs</span>
        </div>
      </div>
    </section>
  );
}
