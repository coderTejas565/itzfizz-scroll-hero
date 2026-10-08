"use client";

import { useLayoutEffect, useRef } from "react";

import { HeroHeader } from "./HeroHeader";
import { HeroHeadline } from "./HeroHeadline";
import { HeroStats } from "./HeroStats";
import { HeroVehicle } from "./HeroVehicle";
import { HeroProgress } from "./HeroProgress";

import { createHeroAnimation } from "@/lib/animations/hero";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const headline = stage.querySelector<HTMLElement>("[data-hero-headline]");

    const vehicle = stage.querySelector<HTMLElement>("[data-hero-vehicle]");

    const stats = stage.querySelectorAll("[data-hero-stat]");

    const progress = stage.querySelector<HTMLElement>("[data-scroll-progress]");

    if (!headline || !vehicle || !progress) return;

    return createHeroAnimation({
      section,
      stage,
      headline,
      vehicle,
      stats,
      progress,
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-[var(--canvas)]">
      <div ref={stageRef} className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[var(--accent)]
              opacity-[0.08]
              blur-[120px]
            "
          />
        </div>

        <HeroHeader />
        <HeroHeadline />
        <HeroStats />
        <HeroVehicle />
        <HeroProgress />
      </div>
    </section>
  );
}
