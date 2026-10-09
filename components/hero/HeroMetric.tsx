import type { HeroMetricData } from "@/data/hero";

type HeroMetricProps = {
  metrics: HeroMetricData[];
};

export function HeroMetric({ metrics }: HeroMetricProps) {
  if (metrics.length === 0) return null;

  return (
    <section className="hero-metric" aria-label="Studio highlights">
      <div className="hero-metric__stack" aria-live="off">
        {metrics.map((metric, index) => (
          <div
            key={`${metric.value}-${metric.label}`}
            className="hero-metric__item"
            data-metric-index={index}
            aria-hidden={index !== 0}
          >
            <div className="hero-metric__content">
              <span className="hero-metric__value">{metric.value}</span>

              <div className="hero-metric__copy">
                <span className="hero-metric__label">{metric.label}</span>

                <p className="hero-metric__description">{metric.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
