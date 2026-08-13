import profileImage from "@/assets/alleva-ana.png";
import { heroData } from "@/data/hero";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="mt-20 px-8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <img
          src={profileImage}
          alt="Ana Clara Alleva"
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
          className="mb-8 h-24 w-24 rounded-full border border-white/10 object-cover shadow-2xl md:h-36 md:w-36"
        />

        <p className="text-xs uppercase tracking-[0.3em] text-primary md:text-sm">
          {heroData.badge}
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-none text-white md:mt-6 md:text-7xl lg:text-8xl">
          {heroData.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary md:text-xl">
          {heroData.description}
        </p>
        {/* 
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {heroData.badges.map((badge) => (
            <Badge key={badge} variant="outline">
              {badge}
            </Badge>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
