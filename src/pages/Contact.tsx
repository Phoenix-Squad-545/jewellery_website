import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/BreadCrumbs";

export default function Contact() {

  return (
    <>

      {/* Hero */}

      <Hero />

      {/* Breadcrumb */}

      <Breadcrumb current="Contact Us" />

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

          {/* PHONE */}

          <div>

            <h3 className="text-gold mb-2">
              📞
            </h3>

            <p className="font-semibold">
              +91 4424640699
            </p>

          </div>

          {/* LOCATION */}

          <div>

            <h3 className="text-gold mb-2">
              📍
            </h3>

            <p>
              72, North Mada Street
              <br />
              Mylapore, Chennai - 600 004
            </p>

          </div>

          {/* EMAIL */}

          <div>

            <h3 className="text-gold mb-2">
              ✉️
            </h3>

            <p>
              Krishnajewellery@yahoo.com
            </p>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="py-20 bg-offwhite">

        <div className="
          max-w-3xl
          mx-auto
          px-6
        ">

          <div className="
            bg-white
            p-10
            rounded-lg
            shadow-lg
          ">

            <h2 className="
              font-cormorant
              text-3xl
              text-center
              mb-8
            ">
              Send a Message
            </h2>

            <form className="space-y-6">

              {/* Name */}

              <input
                type="text"
                placeholder="Name"
                className="
                  w-full
                  border
                  border-gray-300
                  px-4
                  py-3
                  rounded-md
                  focus:outline-none
                  focus:border-gold
                "
              />

              {/* Email */}

              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  border
                  border-gray-300
                  px-4
                  py-3
                  rounded-md
                  focus:outline-none
                  focus:border-gold
                "
              />

              {/* Message */}

              <textarea
                rows={5}
                placeholder="Message"
                className="
                  w-full
                  border
                  border-gray-300
                  px-4
                  py-3
                  rounded-md
                  focus:outline-none
                  focus:border-gold
                "
              />

              {/* Submit */}

              <button
                type="submit"
                className="
                  w-full
                  bg-gold
                  text-white
                  py-3
                  uppercase
                  tracking-widest
                  hover:bg-gold-light
                  transition
                "
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  );
}