export function HeroProgress() {
  return (
    <div className="hero-progress" aria-hidden="true">
      <span className="mono">01</span>

      <div className="hero-progress__track">
        <div className="hero-progress__fill" />
      </div>

      <span className="mono">04</span>
    </div>
  );
}
