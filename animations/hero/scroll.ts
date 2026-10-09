"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { HeroMetricData } from "@/data/hero";

gsap.registerPlugin(ScrollTrigger);

export function createHeroScrollAnimation(
  root: HTMLElement,
  metrics: HeroMetricData[],
) {
  const stage = root.querySelector(".hero__stage");
  const eyebrow = root.querySelector(".hero-headline__eyebrow");
  const title = root.querySelector(".hero-headline__title");
  const statement = root.querySelector(".hero-headline__statement");

  const visual = root.querySelector(".hero-visual");
  const visualSvg = root.querySelector(".hero-visual__svg");

  const visualOuter = root.querySelector(".hero-visual__outer");
  const visualTicks = root.querySelector(".hero-visual__ticks");
  const orbitSystem = root.querySelector(".hero-visual__orbit-system");
  const coreGroup = root.querySelector(".hero-visual__core-group");

  const metric = root.querySelector(".hero-metric");
  const metricIndex = root.querySelector(".hero-metric__index");
  const metricLine = root.querySelector(".hero-metric__line");
  const metricItems = root.querySelectorAll(".hero-metric__item");

  const progress = root.querySelector(".hero-progress__fill");

  if (
    !stage ||
    !eyebrow ||
    !title ||
    !statement ||
    !visual ||
    !visualSvg ||
    !visualOuter ||
    !visualTicks ||
    !orbitSystem ||
    !coreGroup ||
    !metric ||
    !metricIndex ||
    !metricLine ||
    !progress ||
    metricItems.length === 0 ||
    metrics.length === 0
  ) {
    return;
  }

  const items = Array.from(metricItems) as HTMLElement[];
  const indexElement = metricIndex as HTMLElement;

  const context = gsap.context(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(eyebrow, { opacity: 1, y: 0 });
      gsap.set(title, { opacity: 1, y: 0, scale: 1 });
      gsap.set(statement, { opacity: 1, y: 0 });

      gsap.set(visual, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });

      gsap.set(visualSvg, {
        rotation: 0,
      });

      gsap.set(visualOuter, {
        rotation: 0,
      });

      gsap.set(visualTicks, {
        rotation: 0,
      });

      gsap.set(orbitSystem, {
        rotation: 0,
      });

      gsap.set(coreGroup, {
        rotation: 0,
      });

      gsap.set(metric, { opacity: 1, y: 0 });
      gsap.set(metricLine, { scaleX: 1 });

      items.forEach((item, index) => {
        gsap.set(item, {
          opacity: index === 0 ? 1 : 0,
        });
      });

      gsap.set(progress, { width: "100%" });

      indexElement.textContent = `01 / ${String(metrics.length).padStart(
        2,
        "0",
      )}`;

      return;
    }

    /* ═══════════════════════════════════════
       INITIAL STATE
    ═══════════════════════════════════════ */

    gsap.set(eyebrow, {
      y: 20,
      opacity: 0,
    });

    gsap.set(title, {
      y: 40,
      opacity: 0,
      scale: 1,
      transformOrigin: "left center",
    });

    gsap.set(statement, {
      y: 24,
      opacity: 0,
    });

    gsap.set(visual, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      transformOrigin: "center center",
    });

    gsap.set(visualSvg, {
      rotation: 0,
      transformOrigin: "center center",
    });

    /*
     * Internal visual systems start aligned.
     * Each layer will receive its own scroll-driven rotation.
     */
    gsap.set(visualOuter, {
      rotation: 0,
      transformOrigin: "center center",
    });

    gsap.set(visualTicks, {
      rotation: 0,
      transformOrigin: "center center",
    });

    gsap.set(orbitSystem, {
      rotation: 0,
      transformOrigin: "center center",
    });

    gsap.set(coreGroup, {
      rotation: 0,
      transformOrigin: "center center",
    });

    gsap.set(metric, {
      y: 30,
      opacity: 0,
    });

    gsap.set(metricLine, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    items.forEach((item, index) => {
      gsap.set(item, {
        opacity: index === 0 ? 1 : 0,
      });
    });

    /* ═══════════════════════════════════════
       INTRO
    ═══════════════════════════════════════ */

    const intro = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    intro
      .to(eyebrow, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      })
      .to(
        title,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
        },
        "-=0.35",
      )
      .to(
        statement,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.5",
      );

    /* ═══════════════════════════════════════
       SCROLL SYSTEM
    ═══════════════════════════════════════ */

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.1,
        pin: stage,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    /* ═══════════════════════════════════════
       HEADLINE
    ═══════════════════════════════════════ */

    scrollTimeline.fromTo(
      title,
      {
        y: 0,
        scale: 1,
        opacity: 1,
      },
      {
        y: -8,
        scale: 0.94,
        opacity: 1,
        duration: 0.25,
        ease: "none",
      },
      0,
    );

    scrollTimeline.fromTo(
      eyebrow,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -24,
        opacity: 0,
        duration: 0.22,
        ease: "none",
      },
      0.05,
    );

    scrollTimeline.fromTo(
      statement,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "none",
      },
      0.1,
    );

    scrollTimeline.fromTo(
      title,
      {
        y: -8,
        scale: 0.94,
        opacity: 1,
      },
      {
        y: -115,
        scale: 0.58,
        opacity: 0.48,
        duration: 0.5,
        ease: "none",
      },
      0.25,
    );

    /* ═══════════════════════════════════════
       MAIN VISUAL MOVEMENT
    ═══════════════════════════════════════ */

    scrollTimeline.fromTo(
      visual,
      {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      },
      {
        x: -120,
        y: 35,
        scale: 0.72,
        rotation: 55,
        duration: 1,
        ease: "none",
      },
      0,
    );

    scrollTimeline.fromTo(
      visualSvg,
      {
        rotation: 0,
      },
      {
        rotation: -35,
        duration: 1,
        ease: "none",
      },
      0,
    );

    /* ═══════════════════════════════════════
       INTERNAL VISUAL MOTION
       
       The visual is now a system of layers
       instead of one flat SVG.
    ═══════════════════════════════════════ */

    // Outer instrument rotates slowly clockwise.
    scrollTimeline.fromTo(
      visualOuter,
      {
        rotation: 0,
      },
      {
        rotation: 72,
        duration: 1,
        ease: "none",
      },
      0,
    );

    // Measurement ticks move slightly faster,
    // creating a calibration effect.
    scrollTimeline.fromTo(
      visualTicks,
      {
        rotation: 0,
      },
      {
        rotation: -110,
        duration: 1,
        ease: "none",
      },
      0,
    );

    // Orbital system moves opposite to the main
    // instrument, making the visual feel layered.
    scrollTimeline.fromTo(
      orbitSystem,
      {
        rotation: 0,
      },
      {
        rotation: -95,
        duration: 1,
        ease: "none",
      },
      0,
    );

    // Core barely rotates, preserving stability
    // while everything around it moves.
    scrollTimeline.fromTo(
      coreGroup,
      {
        rotation: 0,
      },
      {
        rotation: 24,
        duration: 1,
        ease: "none",
      },
      0.05,
    );

    /* ═══════════════════════════════════════
       METRICS
    ═══════════════════════════════════════ */

    scrollTimeline.fromTo(
      metric,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: "none",
      },
      0.28,
    );

    scrollTimeline.fromTo(
      metricLine,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 0.3,
        ease: "none",
      },
      0.3,
    );

    scrollTimeline.to(
      title,
      {
        y: -135,
        scale: 0.55,
        opacity: 0.42,
        duration: 0.25,
        ease: "none",
      },
      0.75,
    );

    /* ═══════════════════════════════════════
       PROGRESS
    ═══════════════════════════════════════ */

    scrollTimeline.fromTo(
      progress,
      {
        width: "25%",
      },
      {
        width: "100%",
        duration: 1,
        ease: "none",
      },
      0,
    );

    /* ═══════════════════════════════════════
       METRIC CROSSFADE
    ═══════════════════════════════════════ */

    if (items.length > 1) {
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const scrollProgress = self.progress;

          // Metrics become the main story after the
          // initial headline transition.
          const metricStart = 0.28;
          const metricEnd = 0.92;

          const normalizedProgress = gsap.utils.clamp(
            0,
            1,
            (scrollProgress - metricStart) / (metricEnd - metricStart),
          );

          const scaledProgress = normalizedProgress * (metrics.length - 1);

          const lowerIndex = Math.floor(scaledProgress);

          const upperIndex = Math.min(lowerIndex + 1, metrics.length - 1);

          const localProgress = scaledProgress - lowerIndex;

          items.forEach((item, index) => {
            let opacity = 0;
            let y = 12;
            let scale = 0.97;

            // Current metric exits.
            if (index === lowerIndex) {
              const fadeOut = gsap.utils.clamp(0, 1, localProgress / 0.65);

              opacity = 1 - fadeOut;
              y = -8 * fadeOut;
              scale = 1 - 0.025 * fadeOut;
            }

            // Next metric enters.
            if (index === upperIndex) {
              const fadeIn = gsap.utils.clamp(
                0,
                1,
                (localProgress - 0.35) / 0.65,
              );

              opacity = Math.max(opacity, fadeIn);

              y = 12 - 12 * fadeIn;
              scale = 0.97 + 0.03 * fadeIn;
            }

            // Prevent the final metric from disappearing.
            if (index === lowerIndex && lowerIndex === upperIndex) {
              opacity = 1;
              y = 0;
              scale = 1;
            }

            gsap.set(item, {
              opacity,
              y,
              scale,
              transformOrigin: "left center",
            });
          });

          const activeIndex = localProgress >= 0.5 ? upperIndex : lowerIndex;

          indexElement.textContent = `${String(activeIndex + 1).padStart(
            2,
            "0",
          )} / ${String(metrics.length).padStart(2, "0")}`;
        },
      });
    }
  }, root);

  return () => {
    context.revert();
  };
}
