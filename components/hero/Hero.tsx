"use client";

import { useLayoutEffect, useRef } from "react";
import { HeroVisual } from "./HeroVisual";

import { createHeroScrollAnimation } from "@/animations/hero/scroll";
import { heroMetrics } from "@/data/hero";

import { HeroBrand } from "./HeroBrand";
import { HeroHeadline } from "./HeroHeadline";
import { HeroMetric } from "./HeroMetric";
import { HeroProgress } from "./HeroProgress";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    return createHeroScrollAnimation(heroRef.current, heroMetrics);
  }, []);

  return (
    <main ref={heroRef} className="hero">
      <div className="hero__atmosphere" aria-hidden="true" />

      <div className="hero__grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <HeroBrand />

      <section className="hero__stage">
        <HeroVisual />
        <HeroHeadline />

        <HeroMetric metrics={heroMetrics} />
      </section>

      <HeroProgress />

      <div className="hero__footer">
        <span className="mono">SCROLL TO EXPLORE</span>
        <span className="mono">2026</span>
      </div>
    </main>
  );
}
