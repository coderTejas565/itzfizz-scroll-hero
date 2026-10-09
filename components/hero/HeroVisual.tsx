export function HeroVisual() {
  const ticks = Array.from({ length: 24 });

  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer measurement system */}
        <g className="hero-visual__outer">
          <circle
            className="hero-visual__ring hero-visual__ring--outer"
            cx="250"
            cy="250"
            r="192"
          />

          <circle
            className="hero-visual__ring hero-visual__ring--inner"
            cx="250"
            cy="250"
            r="174"
          />

          <g className="hero-visual__ticks">
            {ticks.map((_, index) => {
              const angle = index * 15;
              const major = index % 4 === 0;

              return (
                <line
                  key={angle}
                  className={
                    major
                      ? "hero-visual__tick hero-visual__tick--major"
                      : "hero-visual__tick"
                  }
                  x1="250"
                  y1={major ? "52" : "58"}
                  x2="250"
                  y2={major ? "68" : "64"}
                  transform={`rotate(${angle} 250 250)`}
                />
              );
            })}
          </g>
        </g>

        {/* Asymmetric orbital system */}
        <g className="hero-visual__orbit-system">
          <ellipse
            className="hero-visual__ring hero-visual__ring--orbit"
            cx="250"
            cy="250"
            rx="214"
            ry="112"
            transform="rotate(-24 250 250)"
          />

          <ellipse
            className="hero-visual__ring hero-visual__ring--orbit-secondary"
            cx="250"
            cy="250"
            rx="118"
            ry="208"
            transform="rotate(34 250 250)"
          />

          <path
            className="hero-visual__orbit-cut"
            d="M83 174C126 111 205 75 285 82C365 89 423 133 444 193"
          />

          <circle
            className="hero-visual__orbit-point"
            cx="444"
            cy="193"
            r="4"
          />

          <circle
            className="hero-visual__orbit-point hero-visual__orbit-point--small"
            cx="101"
            cy="318"
            r="3"
          />
        </g>

        {/* Structural axis */}
        <g className="hero-visual__crosshair">
          <path d="M250 72V428" />
          <path d="M72 250H428" />
        </g>

        {/* Main geometric core */}
        <g className="hero-visual__core-group">
          <path
            className="hero-visual__core-shape"
            d="
              M250 156
              L330 202
              L330 298
              L250 344
              L170 298
              L170 202
              Z
            "
          />

          <path
            className="hero-visual__core-inner"
            d="
              M250 181
              L308 214
              L308 286
              L250 319
              L192 286
              L192 214
              Z
            "
          />

          <path
            className="hero-visual__core-diagonal"
            d="M192 214L308 286M308 214L192 286"
          />

          <path
            className="hero-visual__core-axis"
            d="M250 181V319M192 250H308"
          />

          <circle className="hero-visual__center" cx="250" cy="250" r="7" />
        </g>

        {/* Sparse registration points */}
        <g className="hero-visual__markers">
          <circle cx="250" cy="58" r="4" />
          <circle cx="442" cy="250" r="4" />
          <circle cx="250" cy="442" r="4" />
          <circle cx="58" cy="250" r="4" />
        </g>

        {/* Direction indicators */}
        <path
          className="hero-visual__direction"
          d="
            M250 28V46
            M472 250H454
            M250 472V454
            M28 250H46
          "
        />
      </svg>

      <div className="hero-visual__label mono">SYSTEM / 001</div>

      <div className="hero-visual__data mono">
        <span>VECTOR</span>
        <span>04.17</span>
      </div>

      <div className="hero-visual__status mono">
        <span className="hero-visual__status-dot" />
        ACTIVE
      </div>
    </div>
  );
}
