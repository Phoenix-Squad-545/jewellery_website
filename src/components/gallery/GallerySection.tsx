import SectionHeader from "../common/SectionHeader";
import BrowseItem from "./BrowseItem";
import { galleryImages } from "../../data/gallery";

export default function GallerySection() {

  return (

    <section
      id="gallery"
      className="py-24 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          label="Gallery"
          title="Browse"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {galleryImages.map((img, i) => (

            <BrowseItem
              key={i}
              image={img}
            />

          ))}

        </div>

      </div>

    </section>

  );
}