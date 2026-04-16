export default function BrowseItem({
  image,
}) {

  return (

    <div className="relative group overflow-hidden cursor-pointer">

      {/* Image */}

      <img
        src={image}
        alt="Jewellery"
        loading="lazy"
        className="w-full h-full object-cover aspect-square
        transition-transform duration-500
        group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

        {/* <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-white">

          View

        </span> */}

      </div>

    </div>

  );
}