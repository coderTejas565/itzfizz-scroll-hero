export function HeroHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 sm:py-7 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span
            className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
            aria-hidden="true"
          />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
            Itzfizz
          </span>
        </div>

        {/* Center metadata */}
        <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-black/35 md:block">
          Digital studio · 2026
        </span>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3">
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-black/40 sm:block">
            Scroll
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </header>
  );
}
