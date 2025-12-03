const GlowingTracer = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-30 opacity-0 group-hover:opacity-100"
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="grad">
          <stop offset="0%" stopColor="#ffffff00" />
          <stop offset="35%" stopColor="#ffffff88" />
          <stop offset="50%" stopColor="#ffffffff" />
          <stop offset="65%" stopColor="#ffffff88" />
          <stop offset="100%" stopColor="#ffffff00" />
        </linearGradient>
      </defs>

      <path
        d="M 0 0 H 300 V 200 H 0 Z"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="0.65"
        strokeDasharray="100 450"
        className="paused group-hover:animate-[trace_4s_linear_infinite]"
        style={{
          filter: "drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 8px #ffffff80)",
        }}
      />
    </svg>
  );
};

export default GlowingTracer;
