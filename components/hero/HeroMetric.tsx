import type { HeroMetricData } from "@/data/hero";

type HeroMetricProps = {
  metrics: HeroMetricData[];
};

export function HeroMetric({ metrics }: HeroMetricProps) {
  return (
    <div className="hero-metric">
      <div className="hero-metric__index mono">
        01 / {String(metrics.length).padStart(2, "0")}
      </div>

      <div className="hero-metric__line" aria-hidden="true" />

      <div className="hero-metric__stack">
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
                <span className="label">{metric.label}</span>

                <p>{metric.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
