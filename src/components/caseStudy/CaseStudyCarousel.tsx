import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CaseStudyCarouselProps = {
  images: string[];
  title: string;
};

export function CaseStudyCarousel({ images, title }: CaseStudyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="group relative mt-8 overflow-hidden rounded-xl border border-zinc-800 md:mt-20 md:rounded-3xl">
      <img
        src={images[currentIndex]}
        alt={`${title} — image ${currentIndex + 1}`}
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
        className="h-auto w-full object-contain"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-pink-500"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-pink-500"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "scale-125 bg-pink-500"
                    : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
