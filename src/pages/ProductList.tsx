import { Navigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../components/common/BreadCrumbs";

interface ProductState {
  category?: string;
  product?: string;
  parentImage?: string;
  leftMedia?: string;
  rightMedia?: string;
  sideMedia?: string;
}

// ---------------------------------------------------------------------------
// Add video files anywhere in these arrays exactly like an image path, e.g.
// "/images/product/ring/ring_3.mp4" — they'll auto-detect and play on hover.
// ---------------------------------------------------------------------------
const getProductItems = (product: string) => {
  const items: { [key: string]: string[] } = {
    Rings: [
      "/images/product/ring/ring_1.jpg",
      "/images/product/ring/ring_2.jpg",
      "/images/product/ring/ring_3.jpg",
      "/images/product/ring/ring_4.jpg",
      "/images/product/ring/ring_5.jpg",
      "/images/product/ring/ring_6.jpg",
      "/images/product/ring/ring_7.jpg",
      "/images/product/ring/ring_8.jpg",
      "/images/product/ring/ring_9.jpg",
      "/images/product/ring/ring_10.jpg",
      "/images/product/ring/ring_11.jpg",
      "/images/product/ring/ring_12.jpg",
    ],
    Studs: [
      "/images/product/stud/stud-1.jpg",
      "/images/product/stud/stud-2.jpg",
      "/images/product/stud/stud-3.jpg",
      "/images/product/stud/stud-4.jpg",
      "/images/product/stud/stud-5.jpg",
      "/images/product/stud/stud-6.jpg",
      "/images/product/stud/stud-7.jpg",
      "/images/product/stud/stud-8.jpg",
      "/images/product/stud/stud-9.jpg",
      "/images/product/stud/stud-10.jpg",
      "/images/product/stud/stud-11.jpg",
      "/images/product/stud/stud-12.jpg",
    ],
    Bangles: [
      "/images/product/bangles/bangle-1.jpg",
      "/images/product/bangles/bangle-2.jpg",
      "/images/product/bangles/bangle-3.jpg",
      "/images/product/bangles/bangle-4.jpg",
      "/images/product/bangles/bangle-5.jpg",
      "/images/product/bangles/bangle-6.jpg",
      "/images/product/bangles/bangle-7.jpg",
      "/images/product/bangles/bangle-8.jpg",
      "/images/product/bangles/bangle-9.jpg",
      "/images/product/bangles/bangle-10.jpg",
    ],
    Chains: [
      "/images/product/chain/chain-1.jpg",
      "/images/product/chain/chain-2.jpg",
      "/images/product/chain/chain-3.jpg",
      "/images/product/chain/chain-4.jpg",
      "/images/product/chain/chain-6.jpg",
      "/images/product/chain/chain-7.jpg",
      "/images/product/chain/chain-8.jpg",
      "/images/product/chain/chain-9.jpg",
      "/images/product/chain/chain-10.jpg",
      "/images/product/chain/chain-11.jpg",
      "/images/product/chain/chain-12.jpg",
    ],
    Dollar: [
      "/images/product/dollar/dollar-1.jpg",
      "/images/product/dollar/dollar-2.jpg",
      "/images/product/dollar/dollar-3.jpg",
      "/images/product/dollar/dollar-4.jpg",
      "/images/product/dollar/dollar-5.jpg",
      "/images/product/dollar/dollar-6.jpg",
      "/images/product/dollar/dollar-7.jpg",
      "/images/product/dollar/dollar-8.jpg",
      "/images/product/dollar/dollar-9.jpg",
    ],
    Haram: [
      "/images/product/haram/aram-1.jpg",
      "/images/product/haram/aram-2.jpg",
      "/images/product/haram/aram-3.jpg",
      "/images/product/haram/aram-4.jpg",
      "/images/product/haram/aram-5.jpg",
      "/images/product/haram/aram-6.jpg",
      "/images/product/haram/aram-7.jpg",
      "/images/product/haram/aram-8.jpg",
      "/images/product/haram/aram-9.jpg",
      "/images/product/haram/aram-10.jpg",
      "/images/product/haram/aram-11.jpg",
      "/images/product/haram/aram-12.jpg",
    ],
    Bracelet: [
      "/images/product/bracelet/bracelet-1.jpg",
      "/images/product/bracelet/bracelet-2.jpg",
      "/images/product/bracelet/bracelet-3.jpg",
      "/images/product/bracelet/bracelet-4.jpg",
      "/images/product/bracelet/bracelet-5.jpg",
      "/images/product/bracelet/bracelet-6.jpg",
      "/images/product/bracelet/bracelet-7.jpg",
      "/images/product/bracelet/bracelet-8.jpg",
      "/images/product/bracelet/bracelet-9.jpg",
      "/images/product/bracelet/bracelet-10.jpg",
      "/images/product/bracelet/bracelet-11.jpg",
    ],
    Silver: [
      "/images/product/silver/silverware1.jpg",
      "/images/product/silver/silverware2.jpg",
      "/images/product/silver/silverware3.jpg",
      "/images/product/silver/silverware4.jpg",
      "/images/product/silver/silverware6.jpg",
      "/images/product/silver/silverware7.jpg",
      "/images/product/silver/silverware8.jpg",
      "/images/product/silver/silverware15.jpg",
      "/images/product/silver/silverware16.jpg",
      "/images/product/silver/silverware27.jpg",
      "/images/product/silver/silverware29.jpg",
      "/images/product/silver/silverware30.jpg",
      "/images/product/silver/silverware31.jpg",
      "/images/product/silver/silverware87.jpg",
      "/images/product/silver/silverware88.jpg",
      "/images/product/silver/silverware89.jpg",
      "/images/product/silver/silverware90.jpg",
      "/images/product/silver/silverware91.jpg",
      "/images/product/silver/silverware92.jpg",
      "/images/product/silver/silverware100.jpg",
      "/images/product/silver/silverware101.jpg",
      "/images/product/silver/silverware102.jpg",
      "/images/product/silver/silverware103.jpg",
      "/images/product/silver/silverware104.jpg",
    ],
    "Gift Articles": [
      "/images/product/gift/gift1.jpg",
      "/images/product/gift/gift2.jpg",
      "/images/product/gift/gift3.jpg",
      "/images/product/gift/gift4.jpg",
      "/images/product/gift/gift5.jpg",
      "/images/product/gift/gift6.jpg",
      "/images/product/gift/gift7.jpg",
      "/images/product/gift/gift8.jpg",
      "/images/product/gift/gift9.jpg",
      "/images/product/gift/gift10.jpg",
      "/images/product/gift/gift-11.jpg",
      "/images/product/gift/gift-12.jpg",
      "/images/product/gift/gift-13.jpg",
      "/images/product/gift/gift-14.jpg",
      "/images/product/gift/gift-15.jpg",
      "/images/product/gift/gift-16.jpg",
    ],
    "Antique Jewellery": [
      "/images/product/antique/antique-1.webp",
      "/images/product/antique/antique-2.jpg",
      "/images/product/antique/antique-3.jpg",
      "/images/product/antique/antique-4.jpg",
      "/images/product/antique/antique-5.avif",
      "/images/product/antique/antique-6.webp",
      "/images/product/antique/antique-7.webp",
      "/images/product/antique/antique-8.jpg",
    ],
    "Temple Jewellery": [
      "/images/Traditional/Traditional01.jpg",
      "/images/Traditional/Traditional02.webp",
      "/images/Traditional/Traditional03.webp",
      "/images/Traditional/Traditional04.jpg",
      "/images/Traditional/Traditional05.jpg",
      "/images/Traditional/Traditional06.jpg",
      "/images/Traditional/Traditional07.jpg",
      "/images/Traditional/Traditional08.jpg",
      "/images/Traditional/Traditional09.jpg",
      "/images/Traditional/Traditional10.jpg",
      "/images/Traditional/Traditional11.jpg",
      "/images/Traditional/Traditional12.jpg",
      "/images/Traditional/Traditional13.jpg",
      "/images/Traditional/Traditional14.webp",
      "/images/Traditional/Traditional15.webp",
      "/images/Traditional/Traditional16.jpg",
      "/images/Traditional/Traditional17.webp",
      "/images/Traditional/Traditional18.webp",
      "/images/Traditional/Traditional19.webp",
      "/images/Traditional/Traditional20.webp",
      "/images/Traditional/Traditional21.webp",
      "/images/Traditional/Traditional22.webp",
    ],
    "Jadau Jewellery": [
      "/images/jadau/Jadau01.jpeg",
      "/images/jadau/Jadau02.jpeg",
      "/images/jadau/Jadau03.jpeg",
      "/images/jadau/Jadau04.jpeg",
      "/images/jadau/Jadau05.jpeg",
      "/images/jadau/Jadau06.jpeg",
      "/images/jadau/Jadau07.jpeg",
      "/images/jadau/Jadau08.jpeg",
      "/images/jadau/Jadau09.jpeg",
      "/images/jadau/Jadau10.jpeg" 
    ],
    "Panchalogam Jewellery": [
      "/images/panchalogam/Panchalogam01.jpeg",
      "/images/panchalogam/Panchalogam02.jpeg",
      "/images/panchalogam/Panchalogam03.jpeg",
      "/images/panchalogam/Panchalogam04.jpeg",
      "/images/panchalogam/Panchalogam05.jpeg",
      "/images/panchalogam/Panchalogam06.jpeg",
      "/images/panchalogam/Panchalogam07.jpeg",
      "/images/panchalogam/Panchalogam08.jpeg",
      "/images/panchalogam/Panchalogam09.jpeg",
      "/images/panchalogam/Panchalogam10.jpeg",
      "/images/panchalogam/Panchalogam11.jpeg",
      "/images/panchalogam/Panchalogam12.jpeg",
      "/images/panchalogam/Panchalogam13.jpeg",
      "/images/panchalogam/Panchalogam14.jpeg",
      "/images/panchalogam/Panchalogam15.jpeg",
      "/images/panchalogam/Panchalogam16.jpeg",
      "/images/panchalogam/Panchalogam17.jpeg",
      "/images/panchalogam/Panchalogam18.jpeg",
      "/images/panchalogam/Panchalogam19.jpeg",
      "/images/panchalogam/Panchalogam20.jpeg",
      "/images/panchalogam/Panchalogam21.jpeg",
      "/images/panchalogam/Panchalogam22.jpeg",
      "/images/panchalogam/Panchalogam23.jpeg",
      "/images/panchalogam/Panchalogam24.jpeg",
      "/images/panchalogam/Panchalogam25.jpeg",
      "/images/panchalogam/Panchalogam26.jpeg",
      "/images/panchalogam/Panchalogam27.jpeg",
      "/images/panchalogam/Panchalogam28.jpeg",
      "/images/panchalogam/Panchalogam29.jpeg",
      "/images/panchalogam/Panchalogam30.jpeg",
      "/images/panchalogam/Panchalogam31.jpeg",
      "/images/panchalogam/Panchalogam32.jpeg",
      "/images/panchalogam/Panchalogam33.jpeg",
      "/images/panchalogam/Panchalogam34.jpeg",
      "/images/panchalogam/Panchalogam35.jpeg",
      "/images/panchalogam/Panchalogam36.jpeg",
      "/images/panchalogam/Panchalogam37.jpeg",
      "/images/panchalogam/Panchalogam38.jpeg",
      "/images/panchalogam/Panchalogam39.jpeg",
      "/images/panchalogam/Panchalogam40.jpeg",
      "/images/panchalogam/Panchalogam41.jpeg",
      "/images/panchalogam/Panchalogam42.jpeg",
      "/images/panchalogam/Panchalogam43.jpeg",
      "/images/panchalogam/Panchalogam44.jpeg",
      "/images/panchalogam/Panchalogam45.jpeg",
      "/images/panchalogam/Panchalogam46.jpeg",
      "/images/panchalogam/Panchalogam47.jpeg",
      "/images/panchalogam/Panchalogam48.jpeg",
      "/images/panchalogam/Panchalogam49.jpeg",
      "/images/panchalogam/Panchalogam50.jpeg",
      "/images/panchalogam/Panchalogam51.jpeg",
      "/images/panchalogam/Panchalogam52.jpeg",
      "/images/panchalogam/Panchalogam53.jpeg",
      "/images/panchalogam/Panchalogam54.jpeg",
      "/images/panchalogam/Panchalogam55.jpeg",
      "/images/panchalogam/Panchalogam56.jpeg",
      "/images/panchalogam/Panchalogam57.jpeg",
      "/images/panchalogam/Panchalogam58.jpeg",
      "/images/panchalogam/Panchalogam59.jpeg",
      "/images/panchalogam/Panchalogam60.jpeg",
      "/images/panchalogam/Panchalogam61.jpeg",
      "/images/panchalogam/Panchalogam62.jpeg",
      "/images/panchalogam/Panchalogam63.jpeg",
    ],
    Birthstone: [
      "/images/product/stone/stone1.jpg",
      "/images/product/stone/stone2.jpg",
      "/images/product/stone/stone3.jpg",
      "/images/product/stone/stone4.jpg",
      "/images/product/stone/stone5.jpg",
      "/images/product/stone/stone6.jpg",
      "/images/product/stone/stone7.jpg",
      "/images/product/stone/stone8.jpg",
      "/images/product/stone/stone9.jpg",
      "/images/product/stone/stone10.jpg",
      "/images/product/stone/stone11.jpg",
      "/images/product/stone/stone12.jpg",
    ],
  };

  const normalizedProduct = product?.toLowerCase();

  if (normalizedProduct === "birthstone") return items["Birthstone"] || [];
  if (normalizedProduct === "gift articles") return items["Gift Articles"] || [];
  if (normalizedProduct === "antique jewellery") return items["Antique Jewellery"] || [];
  if (normalizedProduct === "temple jewellery") return items["Temple Jewellery"] || [];
  if (normalizedProduct === "jadau jewellery") return items["Jadau Jewellery"] || [];
  if (normalizedProduct === "panchalogam jewellery") return items["Panchalogam Jewellery"] || [];

  return items[product] || [];
};

// Detects whether a path is a video asset so it can autoplay on hover.
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

// Full-bleed split banner: independent left and right panels, each taking
// either an image or a video path (auto-detected). No scaling/cropping is
// applied to images — they render exactly as supplied via object-cover.
function HeroBanner({
  leftSrc,
  rightSrc,
  label,
}: {
  leftSrc: string;
  rightSrc: string;
  label: string;
}) {
  const renderMedia = (src: string, alt: string) =>
    isVideo(src) ? (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    ) : (
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    );

  return (
    <div className="relative h-[450px] overflow-hidden bg-[#1B1815]">
      <div className="grid h-full grid-cols-1 sm:grid-cols-2">
        <div className="relative h-full overflow-hidden">{renderMedia(leftSrc, `${label} left`)}</div>
        <div className="relative hidden h-full overflow-hidden sm:block">
          {renderMedia(rightSrc, `${label} right`)}
        </div>
      </div>

      {/* gradient keeps the title legible over any image/video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="h-px w-14 bg-[#C9A227]" />
        <h1 className="font-cinzel text-3xl capitalize tracking-wide text-white md:text-4xl">
          {label}
        </h1>
        <span className="h-px w-14 bg-[#C9A227]" />
      </div>
    </div>
  );
}

// One grid tile — image by default, or a muted looping video preview that
// plays on hover/focus so pieces show their sparkle in motion.
function ProductTile({
  src,
  index,
  onOpen,
}: {
  src: string;
  index: number;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = isVideo(src);

  const play = () => videoRef.current?.play().catch(() => {});
  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      className="
        group relative aspect-square w-full overflow-hidden rounded-md
        bg-[#F4EFE6] text-left
        ring-1 ring-[#D8C89A]/40
        transition duration-500 ease-out
        hover:ring-2 hover:ring-[#B8935A]
        hover:shadow-[0_8px_28px_-8px_rgba(184,147,90,0.55)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8935A]
      "
    >
      {video ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
        />
      ) : (
    <img
  src={src}
  alt={`item-${index}`}
  loading="lazy"
  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
/>
      )}

      {/* corner frame accents — reads as a jewel case, not a stock grid */}
      <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-[#B8935A]/0 transition duration-500 group-hover:border-[#B8935A]/90" />
      <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-[#B8935A]/0 transition duration-500 group-hover:border-[#B8935A]/90" />
      <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-[#B8935A]/0 transition duration-500 group-hover:border-[#B8935A]/90" />
      <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-[#B8935A]/0 transition duration-500 group-hover:border-[#B8935A]/90" />

      {video && (
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#F4EFE6] backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B8935A] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B8935A]" />
          </span>
          In motion
        </span>
      )}
    </button>
  );
}

export default function ProductList() {
  const { category, product } = useParams();

  const location = useLocation();
  const state = location.state as ProductState;

  const parentImage = state?.parentImage || "/images/bg_1.png";
  const leftMedia = state?.leftMedia || parentImage;
  const rightMedia = state?.rightMedia || parentImage;
  const sideMedia = state?.sideMedia;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const productItems = getProductItems(product || "");

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % productItems.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + productItems.length) % productItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

  const isSingleCategory =
    product === "Silver" ||
    product === "Gift Articles" ||
    product === "Antique Jewellery" ||
    product === "Temple Jewellery" ||
    product === "Jadau Jewellery" ||
    product === "Panchalogam Jewellery" ||
    product === "birthstone" ||
    product === "Birthstone";

  if (!productItems.length) {
    return <Navigate to="/" replace />;
  }

  const current = selectedIndex !== null ? productItems[selectedIndex] : null;

  return (
    <>
        {/* Hero */}
      <div className="relative h-[450px] overflow-hidden">

        <img
          src={parentImage}
          alt={product}
          className="w-full h-full object-cover animate-zoomInOut"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-cinzel capitalize">
            {/* {product} */}
          </h1>
        </div>

      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        current={product || ""}
        parents={
          isSingleCategory
            ? [{ name: "Gallery", path: "/gallery" }]
            : [
                { name: "Gallery", path: "/gallery" },
                { name: formattedCategory, path: `/gallery/${category}` },
              ]
        }
      />

      {/* Items Grid */}
      <section className="py-16 bg-white mb-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-cinzel text-center mb-10 capitalize">
            {product} Collection
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {productItems.map((img, index) => (

              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >

                <img
                  src={img}
                  alt={`item-${index}`}
                   loading="lazy"
                  decoding="async"
                 className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                />

          </div>

            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {current !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
          <div className="group relative w-full max-w-4xl px-6">
            {/* Close */}
            <div className="group/close absolute right-15 top-6">
              <button
                onClick={() => setSelectedIndex(null)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl text-white ring-1 ring-[#B8935A]/60 transition duration-300 hover:bg-[#B8935A]"
              >
                ×
              </button>
              <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition duration-300 group-hover/close:opacity-100">
                Close
              </span>
            </div>

            {/* Previous */}
            <div className="group/prev absolute left-8 top-1/2 -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl text-white opacity-0 transition duration-300 hover:bg-[#B8935A] group-hover:opacity-100"
              >
                ‹
              </button>
              <span className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition duration-300 group-hover/prev:opacity-100">
                Previous
              </span>
            </div>

            {/* Next */}
            <div className="group/next absolute right-8 top-1/2 -translate-y-1/2">
              <button
                onClick={handleNext}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl text-white opacity-0 transition duration-300 hover:bg-[#B8935A] group-hover:opacity-100"
              >
                ›
              </button>
              <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition duration-300 group-hover/next:opacity-100">
                Next
              </span>
            </div>

            {/* Media */}
            <div className="overflow-hidden rounded-lg ring-1 ring-[#B8935A]/50">
              {isVideo(current) ? (
                <video
                  key={current}
                  src={current}
                  controls
                  autoPlay
                  loop
                  className="max-h-[80vh] w-full object-contain bg-black"
                />
              ) : (
                <img
                  src={current}
                  alt="preview"
                  className="max-h-[80vh] w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}