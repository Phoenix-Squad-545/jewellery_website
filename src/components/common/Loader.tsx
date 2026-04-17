// Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-10 bg-[#1a1612] overflow-hidden">

      {/* Background image with zoom in/out animation */}
      <img
        src="/images/gallery/gallery_item_5.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 animate-zoomInOut"
      />

      {/* Warm gold overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,151,90,0.08)_0%,rgba(26,22,18,0.75)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10">

        {/* Ornament top */}
        <div className="flex items-center gap-3 opacity-50">
          <div className="h-px w-12 bg-gold" />
          <div className="h-2 w-2 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-gold" />
        </div>

        {/* Spinning gem rings */}
        <div className="relative h-[100px] w-[100px]">
          <div className="absolute inset-0 animate-spin rounded-full border-[1.5px] border-transparent border-t-gold border-r-gold-light [animation-duration:2.4s]" />
          <div className="absolute inset-[16px] animate-[spin_1.8s_linear_infinite_reverse] rounded-full border border-transparent border-b-gold border-l-gold-light" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <svg viewBox="0 0 22 22" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <polygon points="11,1 20,7 20,15 11,21 2,15 2,7" fill="none" stroke="#d4b47a" strokeWidth="1"/>
              <polygon points="11,5 17,9 17,14 11,18 5,14 5,9" fill="#b8975a" opacity="0.6"/>
              <polygon points="11,1 17,9 11,5" fill="#d4b47a" opacity="0.9"/>
              <polygon points="11,1 5,9 11,5" fill="#b8975a" opacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-cinzel text-2xl md:text-4xl tracking-[0.25em] text-gold uppercase animate-pulse">
            Krishna Jewellery
          </span>
          <span className="font-cormorant italic text-base md:text-lg tracking-wider text-white/50">
            Since 1979 · Chennai
          </span>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-[1px] w-72 overflow-hidden bg-gold/20">
            <div className="h-full w-0 bg-gold animate-load" />
          </div>
          <div className="flex gap-4">
            {[0, 0.3, 0.6].map((d) => (
              <div
                key={d}
                className="h-1.5 w-1.5 rounded-full bg-gold animate-dotPop"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
        </div>

        {/* Ornament bottom */}
        <div className="flex items-center gap-3 opacity-50">
          <div className="h-px w-12 bg-gold" />
          <div className="h-2 w-2 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-gold" />
        </div>

      </div>
    </div>
  );
}