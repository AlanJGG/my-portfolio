export const Icon1 = ({size}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke="url(#icon-gradient-2j6umz3ao)"
      fill="url(#icon-gradient-2j6umz3ao)"
      style={{ "--size": "2.5rem" }}
    >
      <defs>
        <linearGradient
          id="icon-gradient-2j6umz3ao"
          x1="23"
          x2="235"
          y1="43"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff7e5f" /> {/* Primer color del gradiente */}
          <stop offset="0.5" stopColor="#feb47b" /> {/* Color intermedio del gradiente */}
          <stop offset="1" stopColor="#fd3a69" /> {/* Último color del gradiente */}
        </linearGradient>
      </defs>
      <g>
        <circle
          cx="68"
          cy="188"
          r="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          d="m136 40 16 16c40 40 8 88-24 96"
        />
      </g>
    </svg>
  );
  