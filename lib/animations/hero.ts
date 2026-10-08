import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroAnimationElements = {
  section: HTMLElement;
  stage: HTMLElement;
  headline: HTMLElement;
  vehicle: HTMLElement;
  stats: NodeListOf<Element>;
  progress: HTMLElement;
};

export function createHeroAnimation(elements: HeroAnimationElements) {
  const { section, stage, headline, vehicle, stats, progress } = elements;

  const letters = headline.querySelectorAll("[data-hero-letter]");

  const context = gsap.context(() => {
    /*
     * ----------------------------------------
     * Initial entrance
     * ----------------------------------------
     */

    gsap.set(letters, {
      opacity: 0,
      y: 22,
      filter: "blur(6px)",
    });

    gsap.set(stats, {
      opacity: 0,
      y: 12,
    });

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
      stagger: 0.025,
    });

    intro.to(
      stats,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
      },
      "-=0.35",
    );

    /*
     * ----------------------------------------
     * Scroll-driven experience
     * ----------------------------------------
     */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: stage,
        anticipatePin: 1,
      },
    });

    /*
     * Vehicle movement
     */

    timeline.fromTo(
      vehicle,
      {
        left: "7%",
        scale: 0.92,
      },
      {
        left: "93%",
        scale: 1,
        ease: "none",
        duration: 1,
      },
      0,
    );

    /*
     * Headline creates depth
     */

    timeline.to(
      headline,
      {
        scale: 0.82,
        yPercent: -12,
        opacity: 0.12,
        ease: "none",
        duration: 1,
      },
      0,
    );

    /*
     * Stats reveal according to travel
     */

    stats.forEach((stat, index) => {
      timeline.to(
        stat,
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.1,
        },
        0.18 + index * 0.19,
      );
    });

    /*
     * Scroll indicator
     */

    gsap.to(progress, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, section);

  return () => context.revert();
}
