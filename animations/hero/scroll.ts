import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createHeroScrollAnimation(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>(".hero__stage");
  const headline = root.querySelector<HTMLElement>(".hero-headline");
  const title = root.querySelector<HTMLElement>(".hero-headline__title");
  const eyebrow = root.querySelector<HTMLElement>(".hero-headline__eyebrow");
  const statement = root.querySelector<HTMLElement>(
    ".hero-headline__statement",
  );
  const visual = root.querySelector<HTMLElement>(".hero-visual");

  const backPanel = root.querySelector<SVGGElement>(".hero-visual__back-panel");
  const frontPanel = root.querySelector<SVGGElement>(
    ".hero-visual__front-panel",
  );
  const orangeForm = root.querySelector<SVGGElement>(
    ".hero-visual__orange-form",
  );
  const details = root.querySelector<SVGGElement>(".hero-visual__details");

  const metricStack = root.querySelector<HTMLElement>(".hero-metric__stack");
  const metricItems = Array.from(
    root.querySelectorAll<HTMLElement>(".hero-metric__item"),
  );
  const metricLine = root.querySelector<HTMLElement>(".hero-metric__line");
  const metricIndex = root.querySelector<HTMLElement>(
    ".hero-metric__index-current",
  );
  const progress = root.querySelector<HTMLElement>(".hero-progress__fill");

  if (!stage || !headline || !visual) {
    console.error("[Hero] Required elements are missing.", {
      stage: Boolean(stage),
      headline: Boolean(headline),
      visual: Boolean(visual),
    });

    return () => {};
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    gsap.set(
      [
        headline,
        title,
        eyebrow,
        statement,
        visual,
        backPanel,
        frontPanel,
        orangeForm,
        details,
        ...metricItems,
        metricLine,
        progress,
      ].filter(Boolean),
      { clearProps: "all" },
    );

    if (metricStack) {
      gsap.set(metricStack, { minHeight: 0 });
    }

    gsap.set(metricItems, {
      position: "relative",
      inset: "auto",
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
    });

    metricItems.forEach((item) => {
      item.setAttribute("aria-hidden", "false");
    });

    return () => {};
  }

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const distance = (desktop: number, mobile: number) =>
    isMobile ? mobile : desktop;

  const context = gsap.context(() => {
    // Intro: elements enter naturally when the page loads.
    const intro = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    if (eyebrow) {
      intro.from(eyebrow, {
        autoAlpha: 0,
        y: 18,
        duration: 0.65,
      });
    }

    if (title) {
      intro.from(
        title,
        {
          autoAlpha: 0,
          y: 35,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.3",
      );
    }

    if (statement) {
      intro.from(
        statement,
        {
          autoAlpha: 0,
          y: 18,
          duration: 0.65,
        },
        "-=0.45",
      );
    }

    intro.from(
      visual,
      {
        autoAlpha: 0,
        scale: 0.9,
        y: 22,
        duration: 1.05,
        ease: "power4.out",
      },
      "-=0.65",
    );

    // Set the artwork's transform origin.
    gsap.set(visual, {
      transformOrigin: "50% 50%",
      force3D: true,
    });

    [backPanel, frontPanel, orangeForm, details].forEach((layer) => {
      if (layer) {
        gsap.set(layer, {
          transformBox: "fill-box",
          transformOrigin: "center center",
        });
      }
    });

    // Metrics start with the first item visible.
    gsap.set(metricItems, {
      autoAlpha: 0,
      y: 24,
      scale: 0.98,
      position: "absolute",
      inset: 0,
      transformOrigin: "left center",
    });

    if (metricItems[0]) {
      gsap.set(metricItems[0], {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });
    }

    metricItems.forEach((item, index) => {
      item.setAttribute("aria-hidden", String(index !== 0));
    });

    if (metricIndex) {
      metricIndex.textContent = "01";
    }

    if (metricLine) {
      gsap.set(metricLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });
    }

    if (progress) {
      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
      });
    }

    // Scroll-driven story.
    const scroll = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: () =>
          `+=${Math.round(window.innerHeight * (isMobile ? 1.8 : 2.6))}`,
        scrub: 0.8,
        pin: stage,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!metricItems.length) return;

          const activeIndex = Math.min(
            metricItems.length - 1,
            Math.floor(self.progress * metricItems.length),
          );

          metricItems.forEach((item, index) => {
            item.setAttribute("aria-hidden", String(index !== activeIndex));
          });

          if (metricIndex) {
            metricIndex.textContent = String(activeIndex + 1).padStart(2, "0");
          }
        },
      },
    });

    // Phase 1: move the composition forward.
    scroll.to(
      visual,
      {
        scale: distance(1.12, 1.035),
        y: distance(-16, -6),
        duration: 1,
      },
      0,
    );

    scroll.to(
      headline,
      {
        y: distance(-18, -8),
        duration: 1,
      },
      0,
    );

    // Phase 2: separate the artwork into layers.
    if (backPanel) {
      scroll.to(
        backPanel,
        {
          x: distance(-26, -8),
          y: distance(-90, -30),
          rotation: distance(-5, -2),
          duration: 1.2,
        },
        1,
      );
    }

    if (frontPanel) {
      scroll.to(
        frontPanel,
        {
          x: distance(24, 8),
          y: distance(66, 24),
          rotation: distance(3, 1.5),
          duration: 1.2,
        },
        1,
      );
    }

    if (orangeForm) {
      scroll.to(
        orangeForm,
        {
          x: distance(26, 6),
          y: distance(-24, -8),
          rotation: distance(16, 7),
          scale: distance(1.18, 1.06),
          duration: 1.2,
        },
        1.1,
      );
    }

    if (details) {
      scroll.to(
        details,
        {
          y: distance(-14, -5),
          autoAlpha: 0.65,
          duration: 1,
        },
        1.15,
      );
    }

    // Phase 3: shift attention to the artwork.
    if (title) {
      scroll.to(
        title,
        {
          scale: distance(0.82, 0.94),
          x: distance(-18, 0),
          transformOrigin: "left center",
          duration: 1.15,
        },
        2.2,
      );
    }

    if (eyebrow) {
      scroll.to(
        eyebrow,
        {
          autoAlpha: 0.55,
          duration: 0.7,
        },
        2.2,
      );
    }

    if (statement) {
      scroll.to(
        statement,
        {
          autoAlpha: distance(0.5, 0.35),
          y: -10,
          duration: 0.8,
        },
        2.2,
      );
    }

    // Phase 4: settle the separated artwork.
    if (backPanel) {
      scroll.to(
        backPanel,
        {
          x: distance(-18, -5),
          y: distance(-72, -24),
          rotation: distance(-3, -1),
          duration: 0.9,
          ease: "power2.out",
        },
        3.4,
      );
    }

    if (frontPanel) {
      scroll.to(
        frontPanel,
        {
          x: distance(17, 5),
          y: distance(52, 18),
          rotation: distance(1.5, 0.5),
          duration: 0.9,
          ease: "power2.out",
        },
        3.4,
      );
    }

    if (orangeForm) {
      scroll.to(
        orangeForm,
        {
          x: distance(16, 4),
          y: distance(-14, -5),
          rotation: distance(8, 4),
          scale: distance(1.08, 1.035),
          duration: 0.9,
          ease: "power2.out",
        },
        3.4,
      );
    }

    scroll.to(
      visual,
      {
        scale: distance(1.045, 1.015),
        y: distance(-8, -3),
        duration: 0.9,
        ease: "power2.out",
      },
      3.4,
    );

    // Metric transitions.
    const metricStart = isMobile ? 2.35 : 2.15;
    const metricSpan = 1.65;
    const interval =
      metricItems.length > 1 ? metricSpan / (metricItems.length - 1) : 0;

    metricItems.forEach((item, index) => {
      if (index === 0) return;

      const position = metricStart + (index - 1) * interval;
      const previous = metricItems[index - 1];

      scroll.to(
        previous,
        {
          autoAlpha: 0,
          y: -16,
          scale: 0.985,
          duration: 0.24,
          ease: "power2.inOut",
        },
        position,
      );

      scroll.fromTo(
        item,
        {
          autoAlpha: 0,
          y: 24,
          scale: 0.98,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.38,
          ease: "power3.out",
        },
        position + 0.08,
      );
    });

    if (metricLine) {
      scroll.to(
        metricLine,
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power2.out",
        },
        2.2,
      );
    }

    if (progress) {
      scroll.to(
        progress,
        {
          scaleX: 1,
          duration: 4.3,
        },
        0,
      );
    }

    // Recalculate positions after the initial layout.
    const refreshFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      console.info("[Hero] Scroll animation ready.", {
        triggerCount: ScrollTrigger.getAll().length,
        mobile: isMobile,
      });
    });

    // Cancel pending refresh if this context is reverted.
    return () => cancelAnimationFrame(refreshFrame);
  }, root);

  return () => context.revert();
}
