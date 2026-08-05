import { heroData } from "@/data/hero";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-row justify-center items-center gap:4 md:gap-8 p-8">
      <div>
        <p className="text-xs md:text-sm text-center uppercase tracking-[0.3em] text-primary">
          {heroData.badge}
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="md:mt-6 mt-2 text-center mb-0 max-w-4xl text-3xl md:text-6xl font-bold leading-none lg:text-8xl text-white">
            {heroData.title}
          </h1>
          <p className="max-w-xl text-center text-xs md:text-lg text-primary">
            {heroData.description}
          </p>
        </div>
        <div className="flex mt-4 gap-4 justify-center">
          <Button>{heroData.buttonPrimary}</Button>
        </div>
      </div>
    </section>
  );
}
