export function HeroVehicle() {
  return (
    <div
      data-hero-vehicle
      className="
        absolute
        left-[8%]
        top-[58%]
        z-20
        -translate-y-1/2
        will-change-transform
      "
    >
      <svg
        viewBox="0 0 640 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[260px] sm:w-[360px] md:w-[450px] lg:w-[500px]"
        role="img"
        aria-label="Abstract digital vehicle"
      >
        <ellipse
          cx="320"
          cy="225"
          rx="210"
          ry="14"
          fill="black"
          opacity=".08"
        />

        <path
          d="M70 180C150 176 205 172 270 171"
          stroke="#C8F135"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M45 195C145 189 190 185 250 184"
          stroke="#C8F135"
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".4"
        />

        <path
          d="M102 166L143 119C157 103 177 94 201 91L391 76C424 74 455 86 479 108L536 161C548 172 540 192 523 194L122 194C105 194 94 180 102 166Z"
          fill="#111111"
        />

        <path
          d="M170 115L204 98L389 85C413 83 435 91 453 107L473 124H170V115Z"
          fill="#202020"
        />

        <path
          d="M211 102L385 89C406 88 424 94 440 108L452 119H190L211 102Z"
          fill="#D9DDDA"
        />

        <path d="M320 94V120" stroke="#111111" strokeWidth="6" />

        <path
          d="M477 143L530 163C539 167 541 177 534 184H489L477 143Z"
          fill="#1C1C1C"
        />

        <path
          d="M486 143L519 158"
          stroke="#C8F135"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <path d="M125 158H469" stroke="#353535" strokeWidth="5" />

        <path
          d="M286 151H430"
          stroke="#C8F135"
          strokeWidth="4"
          strokeLinecap="round"
          opacity=".65"
        />

        <circle cx="185" cy="192" r="42" fill="#0D0D0D" />
        <circle cx="185" cy="192" r="24" fill="#343434" />
        <circle cx="185" cy="192" r="8" fill="#C8F135" />

        <circle cx="464" cy="192" r="42" fill="#0D0D0D" />
        <circle cx="464" cy="192" r="24" fill="#343434" />
        <circle cx="464" cy="192" r="8" fill="#C8F135" />
      </svg>
    </div>
  );
}
