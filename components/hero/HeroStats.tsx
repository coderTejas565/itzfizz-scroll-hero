import { heroStats } from "@/data/hero";

const positions = [
  "left-[5%] top-[15%] sm:left-[8%]",
  "right-[5%] top-[15%] sm:right-[8%]",
  "bottom-[14%] left-[5%] sm:left-[8%]",
  "bottom-[14%] right-[5%] sm:right-[8%]",
];

export function HeroStats() {
  return (
    <div data-hero-stats className="absolute inset-0 z-30 pointer-events-none">
      {heroStats.map((stat, index) => (
        <article
          key={stat.index}
          data-hero-stat
          className={`absolute ${positions[index]} w-[130px] sm:w-[170px] lg:w-[190px]`}
        >
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/35">
              {stat.index}
            </span>
          </div>

          <p className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.065em]">
            {stat.value}
          </p>

          <p className="mt-2 max-w-[160px] text-[9px] font-medium uppercase leading-[1.45] tracking-[0.13em] text-black/40">
            {stat.description}
          </p>
        </article>
      ))}
    </div>
  );
}
