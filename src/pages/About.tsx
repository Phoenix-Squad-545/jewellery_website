import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/BreadCrumbs";
import BrandSection from "../components/brand/BrandSection";
export default function About() {
  return (
    <>

      {/* Header Hero */}
      <Hero />

    {/* Breadcrumb */}

      <Breadcrumb
        current="About Us"
      />
<BrandSection showFullContent />
      {/* Map Section */}

      <section className="py-20 bg-offwhite">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="
            font-cormorant
            text-4xl
            text-center
            mb-12
          ">
            Visit Our Store
          </h2>

          {/* Google Map */}

          <div className="
            w-full
            h-[420px]
            overflow-hidden
            rounded-lg
            shadow-lg
          ">

            <iframe
              src="https://www.google.com/maps?q=72,+North+Mada+Street,+Mylapore,+Chennai+-+600004&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* Contact Info Row */}

      <section className="py-16 bg-white">

        <div className="
          max-w-6xl
          mx-auto
          px-6

          grid
          md:grid-cols-3
          gap-10
          text-center
        ">

          {/* LEFT — Phone */}

          <div>

            <h3 className="
              font-cinzel
              text-sm
              tracking-widest
              text-gold
              mb-2
            ">
              PHONE
            </h3>

            <p className="text-charcoal">
              +91 4424640699
            </p>

          </div>

          {/* CENTER — Address */}

          <div>

            <h3 className="
              font-cinzel
              text-sm
              tracking-widest
              text-gold
              mb-2
            ">
              LOCATION
            </h3>

            <p className="text-charcoal">
              72, North Mada Street,
              <br />
              Mylapore, Chennai - 600004
            </p>

          </div>

          {/* RIGHT — Email */}

          <div>

            <h3 className="
              font-cinzel
              text-sm
              tracking-widest
              text-gold
              mb-2
            ">
              EMAIL
            </h3>

            <p className="text-charcoal">
              sukrajewellery@yahoo.com
            </p>

          </div>

        </div>

      </section>

    </>
  );
}