export function HeroHeadline() {
  return (
    <div className="hero-headline">
      <div className="hero-headline__eyebrow">
        <span className="hero-headline__eyebrow-line" aria-hidden="true" />

        <span className="mono">INDEPENDENT DIGITAL STUDIO</span>

        <span className="hero-headline__index mono">
          001 <span aria-hidden="true">/</span> 026
        </span>
      </div>

      <h1 className="hero-headline__title">
        <span className="hero-headline__line">
          <span className="hero-headline__word">Ideas</span>
        </span>

        <span className="hero-headline__line hero-headline__line--middle">
          <span className="hero-headline__word hero-headline__accent">
            into
          </span>
        </span>

        <span className="hero-headline__line">
          <span className="hero-headline__word">
            impact<span className="hero-headline__period">.</span>
          </span>
        </span>
      </h1>

      <div className="hero-headline__bottom">
        <span className="hero-headline__asterisk" aria-hidden="true">
          ✳
        </span>

        <p className="hero-headline__statement">
          We turn ambitious thinking
          <br />
          into digital experiences that matter.
        </p>
      </div>
    </div>
  );
}
