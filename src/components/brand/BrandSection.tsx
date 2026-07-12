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
  <strong>Radha Gold Jewellery</strong> was established in <strong>1967</strong> by
  <strong> Mr. B. S. Balavenkataraman</strong>, the pioneer who introduced
  <strong> Original Temple Jewellery</strong>. For more than five decades, we
  have been preserving the rich heritage of traditional South Indian jewellery,
  offering handcrafted designs that reflect timeless elegance and exceptional
  craftsmanship. Our commitment to quality and authenticity has earned the trust
  of generations of customers.
</p>

            {/* Extra Content (Only About Page) */}

           {showFullContent && (
  <>
    <p className="text-sm leading-relaxed text-gray-600 mb-6">
      We specialize in manufacturing
      <strong> Original Temple Jewellery</strong> while also offering a wide
      collection of <strong>Panchalogam Kemp Jewellery</strong>,
      <strong> Jadau Kundan Jewellery</strong>,
      <strong> Imitation Dance Jewellery</strong>,
      <strong> Artificial Jewellery</strong>, and
      <strong> Silver Jewellery</strong>. Every creation is crafted with
      precision to celebrate India's rich artistic heritage.
    </p>

    <p className="text-sm leading-relaxed text-gray-600 mb-6">
      We also undertake customized orders for
      <strong> Pure Gold Jewellery</strong>,
      <strong> Silver Articles</strong>, and
      <strong> Certified Diamond Jewellery</strong>, ensuring every piece is
      designed to match our customers' unique preferences and special occasions.
    </p>

    <p className="text-sm leading-relaxed text-gray-600 mb-6">
      As one of the first
      <strong> BIS Hallmark Certified Jewellery Showrooms</strong> in this part
      of Chennai, we are committed to maintaining the highest standards of
      purity, quality, and customer satisfaction. Our legacy continues to blend
      tradition with innovation, making Radha Gold Jewellery a trusted name
      since 1967.
    </p>
  </>
)}

            {/* Stats */}

          <div className="grid grid-cols-3 text-center border-y py-8 mb-8">
  <div>
    <span className="font-cormorant text-3xl text-gold block">58+</span>
    <span className="text-xs tracking-widest text-gray-500 uppercase">
      Years of Heritage
    </span>
  </div>

  <div>
    <span className="font-cormorant text-3xl text-gold block">1967</span>
    <span className="text-xs tracking-widest text-gray-500 uppercase">
      Founded
    </span>
  </div>

  <div>
    <span className="font-cormorant text-3xl text-gold block">100%</span>
    <span className="text-xs tracking-widest text-gray-500 uppercase">
      BIS Certified
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