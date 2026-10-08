export function HeroProgress() {
  return (
    <div className="absolute bottom-6 left-5 right-5 z-40 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
      <p className="max-w-[240px] text-[9px] font-medium uppercase leading-[1.5] tracking-[0.15em] text-black/35">
        Digital experiences designed
        <br />
        to move people forward.
      </p>

      <div className="flex items-center gap-3">
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40">
          01
        </span>

        <div className="h-px w-12 bg-black/15">
          <div
            data-scroll-progress
            className="h-full w-0 origin-left bg-black"
          />
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40">
          04
        </span>
      </div>
    </div>
  );
}
