"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "58%",
    label: "Faster digital experiences",
    position: "top-[16%] left-[5%] md:left-[8%]",
  },
  {
    value: "27%",
    label: "Higher user engagement",
    position: "top-[16%] right-[5%] md:right-[8%]",
  },
  {
    value: "42%",
    label: "More efficient workflows",
    position: "bottom-[13%] left-[5%] md:left-[8%]",
  },
  {
    value: "91%",
    label: "Projects delivered with impact",
    position: "bottom-[13%] right-[5%] md:right-[8%]",
  },
];

function Car() {
  return (
    <svg
      className="car-visual h-auto w-[280px] md:w-[420px] lg:w-[500px]"
      viewBox="0 0 640 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Abstract digital vehicle"
      role="img"
    >
      {/* shadow */}
      <ellipse
        cx="320"
        cy="228"
        rx="210"
        ry="15"
        fill="currentColor"
        opacity="0.08"
      />

      {/* rear glow */}
      <path
        d="M70 180C150 176 205 172 270 171"
        stroke="#C8F135"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.9"
      />

      <path
        d="M45 195C145 189 190 185 250 184"
        stroke="#C8F135"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* body */}
      <path
        d="M102 166L143 119C157 103 177 94 201 91L391 76C424 74 455 86 479 108L536 161C548 172 540 192 523 194L122 194C105 194 94 180 102 166Z"
        fill="#151515"
      />

      {/* upper body */}
      <path
        d="M170 115L204 98L389 85C413 83 435 91 453 107L473 124L170 124V115Z"
        fill="#242424"
      />

      {/* windows */}
      <path
        d="M211 102L385 89C406 88 424 94 440 108L452 119H190L211 102Z"
        fill="#DDE2E1"
        opacity="0.95"
      />

      <path d="M207 103L187 119H319V94L207 103Z" fill="#AEB8B7" />

      <path
        d="M329 93V119H450L438 108C424 95 407 89 386 90L329 93Z"
        fill="#C9D1D0"
      />

      {/* window divider */}
      <path d="M320 94V120" stroke="#151515" strokeWidth="6" />

      {/* front bumper */}
      <path
        d="M477 143L530 163C539 167 541 177 534 184H489L477 143Z"
        fill="#1E1E1E"
      />

      {/* headlights */}
      <path
        d="M486 143L519 158"
        stroke="#C8F135"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* side detail */}
      <path d="M125 158H469" stroke="#383838" strokeWidth="5" />

      <path
        d="M286 151H430"
        stroke="#C8F135"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* wheels */}
      <g>
        <circle cx="185" cy="192" r="42" fill="#101010" />
        <circle cx="185" cy="192" r="24" fill="#343434" />
        <circle cx="185" cy="192" r="9" fill="#C8F135" />
      </g>

      <g>
        <circle cx="464" cy="192" r="42" fill="#101010" />
        <circle cx="464" cy="192" r="24" fill="#343434" />
        <circle cx="464" cy="192" r="9" fill="#C8F135" />
      </g>

      {/* small technical details */}
      <circle cx="119" cy="169" r="5" fill="#C8F135" />
      <circle cx="506" cy="174" r="4" fill="#C8F135" />
    </svg>
  );
}

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const headline = headlineRef.current;
    const car = carRef.current;
    const trail = trailRef.current;
    const statsContainer = statsRef.current;

    if (!section || !stage || !headline || !car || !trail || !statsContainer) {
      return;
    }

    const ctx = gsap.context(() => {
      const letters = headline.querySelectorAll(".hero-letter");
      const statCards = statsContainer.querySelectorAll(".stat-card");

      // Initial state
      gsap.set(letters, {
        opacity: 0,
        y: 28,
        filter: "blur(8px)",
      });

      gsap.set(statCards, {
        opacity: 0,
        y: 18,
        scale: 0.96,
      });

      gsap.set(car, {
        xPercent: -50,
      });

      // -----------------------------
      // Initial entrance
      // -----------------------------

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro.to(letters, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.035,
      });

      intro.to(
        statCards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
        },
        "-=0.35",
      );

      // -----------------------------
      // Scroll choreography
      // -----------------------------

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
          pin: stage,
          anticipatePin: 1,
        },
      });

      // Vehicle travels across the screen.
      scrollTimeline.fromTo(
        car,
        {
          xPercent: -50,
          left: "8%",
        },
        {
          xPercent: -50,
          left: "92%",
          ease: "none",
          duration: 1,
        },
        0,
      );

      // The lime trail grows with the vehicle.
      scrollTimeline.fromTo(
        trail,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // Headline subtly scales and moves away.
      scrollTimeline.to(
        headline,
        {
          scale: 0.82,
          yPercent: -18,
          opacity: 0.2,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // Statistics become progressively more prominent.
      statCards.forEach((card, index) => {
        const progress = 0.15 + index * 0.2;

        scrollTimeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            duration: 0.12,
          },
          progress,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#f2f1ed] text-[#111111]">
      <section ref={sectionRef} className="relative h-[220vh]">
        <div
          ref={stageRef}
          className="relative h-screen w-full overflow-hidden"
        >
          {/* --------------------------------
              Background system
          -------------------------------- */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#f2f1ed]" />

            {/* grid */}
            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #111 1px, transparent 1px),
                  linear-gradient(to bottom, #111 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />

            {/* radial atmosphere */}
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8f135]/10 blur-[100px]" />
          </div>

          {/* --------------------------------
              Top navigation / metadata
          -------------------------------- */}
          <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 lg:px-14">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#c8f135]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                ITZFIZZ DIGITAL
              </span>
            </div>

            <div className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 md:block">
              Digital experiences / 2026
            </div>

            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
              <span className="hidden sm:inline">Scroll to explore</span>
              <span className="h-7 w-[1px] bg-black/20" />
              <span>01—04</span>
            </div>
          </div>

          {/* --------------------------------
              Main headline
          -------------------------------- */}
          <div className="absolute inset-x-0 top-[23%] z-10 flex justify-center px-5 md:top-[24%]">
            <h1
              ref={headlineRef}
              className="select-none text-center text-[clamp(2rem,7vw,7.5rem)] font-semibold uppercase leading-[0.9] tracking-[0.14em]"
              aria-label="Welcome Itzfizz"
            >
              {"WELCOME ITZFIZZ".split("").map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="hero-letter inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </div>

          {/* --------------------------------
              Center visual
          -------------------------------- */}
          <div className="absolute inset-0 z-20">
            <div
              ref={trailRef}
              className="absolute left-[6%] right-[6%] top-[61%] h-[2px] origin-left bg-[#c8f135]"
            />

            <div
              ref={carRef}
              className="absolute left-[8%] top-[calc(61%-115px)] text-black"
            >
              <Car />
            </div>
          </div>

          {/* --------------------------------
              Statistics
          -------------------------------- */}
          <div
            ref={statsRef}
            className="pointer-events-none absolute inset-0 z-30"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`stat-card absolute ${stat.position} w-[145px] md:w-[190px]`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8f135]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.06em]">
                  {stat.value}
                </div>

                <div className="mt-2 max-w-[150px] text-[10px] font-medium uppercase leading-[1.4] tracking-[0.12em] text-black/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* --------------------------------
              Bottom UI
          -------------------------------- */}
          <div className="absolute bottom-6 left-6 right-6 z-30 flex items-end justify-between md:bottom-8 md:left-10 md:right-10 lg:left-14 lg:right-14">
            <div className="max-w-[260px] text-[10px] font-medium uppercase leading-[1.5] tracking-[0.16em] text-black/45">
              We turn ideas into digital products that move people forward.
            </div>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                Scroll / 01
              </span>
            </div>
          </div>

          {/* vertical side labels */}
          <div className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 -rotate-90 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/25 lg:block">
            Design / Technology / Motion
          </div>

          <div className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rotate-90 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/25 lg:block">
            Scroll-driven experience
          </div>
        </div>
      </section>

      {/* Small continuation section so the scroll transition feels intentional */}
      <section className="flex min-h-[60vh] items-center justify-center bg-[#111111] px-6 py-24 text-[#f2f1ed]">
        <div className="max-w-3xl">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c8f135]">
            Beyond the first screen
          </p>

          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            BUILDING DIGITAL
            <br />
            <span className="text-white/30">MOMENTUM.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
