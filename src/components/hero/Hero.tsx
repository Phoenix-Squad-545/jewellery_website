import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const heroSlides = [
    {
      image: "/images/gallery/gallery_item_1.jpg",
      title: "Gold Jewellery",
      subtitle: "Timeless Elegance",
      tagline: "CRAFTED IN PURE GOLD",
    },
    {
      image: "/images/gallery/gallery_item_2.jpg",
      title: "Silver Jewellery",
      subtitle: "Since 1979",
      tagline: "TRADITION MEETS STYLE",
    },
    {
      image: "/images/gallery/gallery_item_3.jpg",
      title: "Bridal Collection",
      subtitle: "Wedding Luxury",
      tagline: "DESIGNED FOR SPECIAL MOMENTS",
    },
    {
      image: "/images/gallery/gallery_item_4.jpg",
      title: "Temple Jewellery",
      subtitle: "Heritage Designs",
      tagline: "INSPIRED BY TRADITION",
    },
    {
      image: "/images/gallery/gallery_item_5.jpg",
      title: "Exclusive Collection",
      subtitle: "Premium Craft",
      tagline: "UNIQUELY YOURS",
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
      setAnimKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative h-[70vh] min-h-[520px] flex items-center overflow-hidden bg-[#1a1612]"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            loading="eager"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-[2000ms]
              ${index === current ? "opacity-40" : "opacity-0"}
            `}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(212,175,55,0.18)_0%,transparent_65%)] animate-gradientMove" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_85%,rgba(255,223,150,0.12)_0%,transparent_65%)] animate-gradientMoveSlow" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1612]/55 via-[#2d2418]/45 to-[#1a1612]/65" />
      </div>

      {/* Content — key={animKey} remounts this entire block on every slide change */}
      <div
        key={animKey}
        className="relative z-10 px-[10%] space-y-2"
      >
        <p
          className="text-xs tracking-[0.4em] text-white  text-gold px-2 uppercase mb-5 animate-fadeSlideUp delay-200"
          // style={{ animationDelay: "0.1s" }}
        >
          Since 1979 · Chennai, India
        </p>

        <h1
          className="font-cormorant text-white text-[52px] md:text-[72px] lg:text-[96px] leading-tight mb-6 animate-fadeSlideUp"
          // style={{ animationDelay: "0.2s" }}
        >
          {currentSlide.title}
          <br />
          <em className="text-gold-light italic">
            {currentSlide.subtitle}
          </em>
        </h1>

        <p
          className="text-sm tracking-[0.12em] text-white/70 mb-10 px-1 animate-fadeSlideUp"
          // style={{ animationDelay: "0.3s" }}
        >
          {currentSlide.tagline}
        </p>

      <button
  onClick={() => navigate("/gallery")}
  className="
    inline-block
    font-cinzel
    text-xs
    tracking-[0.35em]
    uppercase
    px-2
    py-4
    text-white
    rounded-lg
    border border-transparent
    transition-all
    duration-300
    ease-out
    hover:bg-[#e8e4de]
    hover:text-black
    hover:border-[#d6d0c8]
    hover:shadow-md
    hover:-translate-y-[2px]
    animate-fadeSlideUp
    cursor-pointer
  "
  style={{ animationDelay: "0.4s" }}
>
  Explore Collections
</button>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase mt-2">
          Scroll
        </span>
      </div> */}
    </section>
  );
}