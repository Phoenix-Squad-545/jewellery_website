// OrnamentDivider.tsx
export default function Divider() {
  return (
    <svg
      viewBox="0 0 200 20"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-4 text-gold"
      fill="currentColor"
    >
      {/* Left vine */}
      <path d="M10,10 Q20,4 30,10 Q40,16 50,10 Q60,4 70,10" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Left small dots */}
      <circle cx="5" cy="10" r="1.2" />
      <circle cx="75" cy="10" r="1" />

      {/* Center diamond */}
      <path d="M95,10 L100,5 L105,10 L100,15 Z" />

      {/* Right vine */}
      <path d="M130,10 Q140,4 150,10 Q160,16 170,10 Q180,4 190,10" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Right small dots */}
      <circle cx="125" cy="10" r="1" />
      <circle cx="195" cy="10" r="1.2" />

      {/* Side accents */}
      <path d="M108,10 L115,6 L122,10 L115,14 Z" opacity="0.5" />
      <path d="M78,10 L85,6 L92,10 L85,14 Z" opacity="0.5" />
    </svg>
  );
}