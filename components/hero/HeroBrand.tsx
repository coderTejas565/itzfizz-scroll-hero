export function HeroBrand() {
  return (
    <header className="hero-brand">
      {" "}
      <a
        href="#top"
        className="hero-brand__identity"
        aria-label="Itzfizz Digital — home"
      >
        {" "}
        <span className="hero-brand__mark" aria-hidden="true">
          {" "}
          <span className="hero-brand__mark-block" />{" "}
          <span className="hero-brand__mark-cut" />{" "}
          <span className="hero-brand__mark-dot" />{" "}
        </span>
        <span className="hero-brand__wordmark">
          ITZFIZZ<span className="hero-brand__wordmark-period">.</span>
        </span>
      </a>
    </header>
  );
}
