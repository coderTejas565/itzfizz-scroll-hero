import { heroHeadline } from "@/data/hero";

export function HeroHeadline() {
  return (
    <div className="absolute inset-x-0 top-[22%] z-20 px-5 sm:top-[24%]">
      <h1
        data-hero-headline
        aria-label={heroHeadline}
        className="
          mx-auto
          max-w-[1400px]
          text-center
          text-[clamp(2.4rem,8.2vw,8.5rem)]
          font-semibold
          uppercase
          leading-[0.86]
          tracking-[0.11em]
        "
      >
        {heroHeadline.split("").map((character, index) => (
          <span
            key={`${character}-${index}`}
            data-hero-letter
            className="inline-block"
          >
            {character === " " ? "\u00A0" : character}
          </span>
        ))}
      </h1>
    </div>
  );
}
