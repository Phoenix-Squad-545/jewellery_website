import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface BrandSectionProps {
  showFullContent?: boolean;
}

export default function BrandSection({
  showFullContent = false,
}: BrandSectionProps) {

  const navigate = useNavigate();
  const images = [
  "/images/chain.jpg",
  "/images/bg_1.png",
  "/images/about/about1.jpg",
  "/images/about/about2.jpg",
];

const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {

  const interval = setInterval(() => {

    setCurrentIndex((prev) =>
      (prev + 1) % images.length
    );

  }, 3000); // 3 seconds

  return () => clearInterval(interval);

}, []);

const handleNext = () => {
  setCurrentIndex(
    (currentIndex + 1) % images.length
  );
};

const handlePrev = () => {
  setCurrentIndex(
    (currentIndex - 1 + images.length) %
      images.length
  );
};

  return (

    <section
      id="about"
      className="py-24 bg-offwhite"
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image Section */}

        <div className="relative">

  {/* Gold Box Decoration */}
 

  {/* Carousel Container */}
  <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-xl group">

    {/* Images */}
    {images.map((img, index) => (

      <img
        key={index}
        src={img}
        alt={`slide-${index}`}
        loading="lazy"
        className={`
          absolute w-full h-full object-cover
          transition-opacity duration-700
          ${index === currentIndex
            ? "opacity-100"
            : "opacity-0"}
        `}
      />

    ))}

    {/* Previous Button */}
    {/* <button
      onClick={handlePrev}
      className="
        absolute left-3 top-1/2
        -translate-y-1/2
        w-10 h-10
        bg-black/50
        text-white
        rounded-full
        opacity-0
        group-hover:opacity-100
        transition
      "
    >
      ‹
    </button> */}

    {/* Next Button */}
    {/* <button
      onClick={handleNext}
      className="
        absolute right-3 top-1/2
        -translate-y-1/2
        w-10 h-10
        bg-black/50
        text-white
        rounded-full
        opacity-0
        group-hover:opacity-100
        transition
      "
    >
      ›
    </button> */}

    {/* Dots Indicator */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

      {images.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`
            w-2 h-2 rounded-full
            ${index === currentIndex
              ? "bg-white"
              : "bg-white/50"}
          `}
        />

      ))}

    </div>

  </div>

</div>

          {/* Text Section */}

          <div>

            <span className="text-xs tracking-[0.4em] text-gold uppercase">
              Our Story
            </span>

            <h2 className="font-cormorant text-4xl md:text-5xl mt-3">
              Brand's History
            </h2>

            <div className="w-12 h-[1px] bg-gold mt-6 mb-6" />

            {/* Short Content (Home Page) */}

            <p className="text-sm leading-relaxed text-gray-600 mb-6">

              Founded by Mr. A. Rathinam in 1979,
              Krishna Jewellery has been principally
              into silver retailing and is the first
              in the state to do so.
              For wedding occasion or light weight wear for career women or ranges for men’s wear anything and everything under one roof.
              Krishna Jewellers is the first BIS hallmark certified Jewellery showroom in this part of Chennai. To facilitate the accessibility of buying Jewellery to the common man,
               professional or self employed, Shanthi has a variety of Saving Scheme which offers the option of buying Jewellery after paying in easy installment scheme.

            </p>

            {/* Extra Content (Only About Page) */}

            {showFullContent && (

              <>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">

                  The beauty and originality of the designs
                  in Sukra is complemented by the brilliance
                  of the Silver and the vivid colours of
                  the gemstones, bringing breathtaking
                  collections of Silver jewellery.

                </p>

                <p className="text-sm leading-relaxed text-gray-600 mb-6">

                  Krishna holds the distinction of being
                  the first Silver retailer in the world
                  to set two World Records — Largest
                  Silver Sculpture and Largest Silver Clock.

                </p>

                <p className="text-sm leading-relaxed text-gray-600 mb-6">

                  First Silver showroom in India to get
                  ISO 9001 accreditation, BIS Silver
                  Hallmark licence and Certificate of
                  Excellence from the Indo American
                  Business Promotion Council, USA.

                </p>

              </>
            )}

            {/* Stats */}

            <div className="grid grid-cols-3 text-center border-y py-8 mb-8">

              <div>
                <span className="font-cormorant text-3xl text-gold block">
                  45+
                </span>
                <span className="text-xs tracking-widest text-gray-500 uppercase">
                  Years
                </span>
              </div>

              <div>
                <span className="font-cormorant text-3xl text-gold block">
                  2
                </span>
                <span className="text-xs tracking-widest text-gray-500 uppercase">
                  World Records
                </span>
              </div>

              <div>
                <span className="font-cormorant text-3xl text-gold block">
                  1979
                </span>
                <span className="text-xs tracking-widest text-gray-500 uppercase">
                  Founded
                </span>
              </div>

            </div>

            {/* Show button ONLY on Home */}

            {!showFullContent && (

              <button
                onClick={() => navigate("/about")}
                className="
                  font-cinzel
                  text-xs
                  tracking-[0.3em]
                  uppercase
                  border border-charcoal
                  px-8 py-3
                  hover:bg-charcoal
                  hover:text-black
                  transition
                  cursor-pointer
                "
              >

                Read More

              </button>

            )}

          </div>

        </div>

      </div>

    </section>

  );
}