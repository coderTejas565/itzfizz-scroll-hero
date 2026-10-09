export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground shadow */}
        <ellipse
          cx="310"
          cy="475"
          rx="178"
          ry="35"
          fill="#171717"
          opacity=".07"
        />

        {/* Rear artwork panel */}
        <g className="hero-visual__back-panel">
          <rect
            x="102"
            y="145"
            width="300"
            height="370"
            rx="3"
            fill="#171717"
          />
          <text
            x="128"
            y="184"
            fill="#F7F5F0"
            fontSize="10"
            letterSpacing="3"
            fontFamily="monospace"
          >
            CREATIVE STUDIO
          </text>
          <path d="M128 202H376" stroke="#F7F5F0" strokeOpacity=".25" />
          <text
            x="125"
            y="330"
            fill="#F7F5F0"
            fontSize="104"
            fontWeight="700"
            letterSpacing="-10"
            fontFamily="Arial, sans-serif"
          >
            ITZ
          </text>
          <path d="M128 356H254" stroke="#FF6B2C" strokeWidth="5" />
          <text
            x="128"
            y="390"
            fill="#DCD6CC"
            fontSize="11"
            letterSpacing="1.5"
            fontFamily="monospace"
          >
            IDEAS INTO IMPACT
          </text>
          <circle cx="348" cy="450" r="25" fill="#FF6B2C" />
          <path
            d="M335 450H361M348 437V463"
            stroke="#171717"
            strokeWidth="1.5"
          />
        </g>

        {/* Front editorial panel */}
        <g className="hero-visual__front-panel">
          <rect x="236" y="92" width="270" height="370" rx="3" fill="#DCD6CC" />
          <rect
            x="249"
            y="105"
            width="244"
            height="344"
            rx="1"
            fill="#F7F5F0"
          />
          <text
            x="269"
            y="133"
            fill="#171717"
            fontSize="9"
            letterSpacing="2"
            fontFamily="monospace"
          >
            BRAND / 026
          </text>
          <circle cx="460" cy="127" r="5" fill="#FF6B2C" />

          {/* Editorial typography */}
          <text
            x="270"
            y="413"
            fill="#171717"
            fontSize="34"
            fontWeight="700"
            letterSpacing="-2"
            fontFamily="Arial, sans-serif"
          >
            MAKE
          </text>
          <text
            x="270"
            y="438"
            fill="#171717"
            fontSize="22"
            fontWeight="400"
            letterSpacing="-1"
            fontFamily="Arial, sans-serif"
          >
            IT MATTER.
          </text>
        </g>

        {/* Independent foreground sculpture */}
        <g className="hero-visual__orange-form">
          <path
            d="
              M288 217
              C310 169 370 163 405 194
              C435 220 420 260 386 280
              C353 299 346 325 371 341
              C393 355 427 339 438 315
              C453 348 427 387 388 390
              C342 394 308 359 315 324
              C320 296 348 274 370 255
              C392 235 387 212 367 207
              C342 201 323 220 319 242
              Z
            "
            fill="#FF6B2C"
          />
          <path
            d="M288 217C272 246 280 278 302 293"
            stroke="#171717"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Foreground registration details */}
        <g className="hero-visual__details">
          <path
            d="M175 115H211M193 97V133"
            stroke="#FF6B2C"
            strokeWidth="1.5"
          />
          <circle cx="472" cy="474" r="4" fill="#FF6B2C" />
          <path d="M447 474H462" stroke="#171717" strokeOpacity=".4" />
        </g>
      </svg>
    </div>
  );
}
