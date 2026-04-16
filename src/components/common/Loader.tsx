// Loader.tsx
export default function Loader() {
  return (
   <div className="
  fixed inset-0
  z-[9999]
  flex flex-col
  items-center
  justify-center
  gap-7
  bg-[#fdf8f2]
">

      {/* Ornament top */}
      <div className="flex items-center gap-3 opacity-40">
        <div className="h-px w-10 bg-gold" />
        <div className="h-2 w-2 rotate-45 bg-gold" />
        <div className="h-px w-10 bg-gold" />
      </div>

      {/* Spinning gem rings */}
  <div className="relative h-autow-[440px]">
        <div className="absolute inset-0 animate-spin rounded-full border-[1.5px] border-transparent border-t-gold border-r-gold-light [animation-duration:2.4s]" />
       <div className="absolute inset-[16px] animate-[spin_1.8s_linear_infinite_reverse] rounded-full border border-transparent border-b-gold border-l-gold-light"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse scale-125">
          <svg viewBox="0 0 22 22" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
            <polygon points="11,1 20,7 20,15 11,21 2,15 2,7" fill="none" stroke="#d4b47a" strokeWidth="1"/>
            <polygon points="11,5 17,9 17,14 11,18 5,14 5,9" fill="#b8975a" opacity="0.6"/>
            <polygon points="11,1 17,9 11,5" fill="#d4b47a" opacity="0.9"/>
            <polygon points="11,1 5,9 11,5"  fill="#b8975a" opacity="0.7"/>
          </svg>
        </div>
      </div>

      {/* Brand */}
      <div className="flex flex-col items-center gap-2">
      <span className="font-cinzel text-base tracking-[0.35em] text-gold uppercase animate-pulse">
          Krishna Jewellery
        </span>
        <span className="font-cormorant italic text-xs tracking-wider text-gray-500">
          Since 1979 · Chennai
        </span>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-px w-44 overflow-hidden bg-gold/15">
       <div className="h-full w-0 bg-gold animate-load" />
        </div>
        <div className="flex gap-4">
          {[0, 0.3, 0.6].map((d) => (
            <div
              key={d}
             className="h-1 w-1 rounded-full bg-gold animate-dotPop"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
      </div>

      {/* Ornament bottom */}
      <div className="flex items-center gap-3 opacity-40">
        <div className="h-px w-10 bg-gold" />
        <div className="h-2 w-2 rotate-45 bg-gold" />
        <div className="h-px w-10 bg-gold" />
      </div>
    </div>
  );
}