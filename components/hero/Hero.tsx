"use client";

import { useLayoutEffect, useRef } from "react";

import { createHeroScrollAnimation } from "@/animations/hero/scroll";
import { heroMetrics } from "@/data/hero";

import { HeroBrand } from "./HeroBrand";
import { HeroHeadline } from "./HeroHeadline";
import { HeroMetric } from "./HeroMetric";
import { HeroProgress } from "./HeroProgress";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = heroRef.current;

    if (!root) {
      return;
    }

    // Keep all GSAP setup and cleanup inside the animation module.
    return createHeroScrollAnimation(root);
  }, []);

  return (
    <main id="top" ref={heroRef} className="hero">
      {/* Background atmosphere and editorial grid */}
      <div className="hero__atmosphere" aria-hidden="true" />

      <div className="hero__grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Persistent studio identity */}
      <HeroBrand />

      {/* Main scroll-driven composition */}
      <section className="hero__stage" aria-label="Studio introduction">
        <HeroVisual />

        <HeroHeadline />

        <HeroMetric metrics={heroMetrics} />
      </section>

      {/* Journey indicator and closing metadata */}
      <HeroProgress />

      <footer className="hero__footer">
        <span className="mono">© 2026 ITZFIZZ</span>
      </footer>
    </main>
  );
}
