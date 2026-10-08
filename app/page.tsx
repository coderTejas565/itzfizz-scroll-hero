import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="flex min-h-screen items-center bg-[#101010] px-6 text-[#f5f5f2]">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#c8f135]">
            Itzfizz Digital
          </p>

          <h2 className="max-w-5xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            BUILDING
            <br />
            <span className="text-white/30">MOMENTUM.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}