import Divider from "../common/Divider";

export default function ContactStrip() {
  return (

    <section
      id="contact"
      className="bg-offwhite py-20"
    >

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* Left Logo Box */}

        <div className="bg-charcoal p-10">

          <h3 className="font-cinzel text-xl tracking-widest">

            ✦ Krishna Jewellery

          </h3>

          <span className="block font-cormorant text-gold italic mt-1">

            

          </span>

          <p className="text-white/60 text-sm leading-relaxed mt-6">

            72, North Mada Street, <br />
            Mylapore <br />
            Chennai — 600004

          </p>

        </div>

        {/* Contact Info */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Phone */}

          <div>

         <span className="text-gold text-xs tracking-[0.3em]">

              ✦

            </span>

            <h4 className="font-cinzel text-xs tracking-widest mt-2">

              Phone Number

            </h4>

            <p className="text-sm text-gray-600 mt-3">

              +91 44 2462 0000

            </p>

          </div>

          {/* Working Hours */}

          <div>

            <span className="text-gold text-xs tracking-[0.3em]">

              ✦

            </span>

            <h4 className="font-cinzel text-xs tracking-widest mt-2">

              Working Hours

            </h4>

            <p className="text-sm text-gray-600 mt-3">

              Monday to Saturday <br />
              10:00 AM to 8:30 PM

            </p>

            <span className="text-xs text-gray-400">

              Closed on Sundays

            </span>

          </div>

          {/* Email */}

          <div>

            <span className="text-gold text-xs tracking-[0.3em]">

              ✦

            </span>

            <h4 className="font-cinzel text-xs tracking-widest mt-2">

              Email Address

            </h4>

            <p className="text-sm text-gray-600 mt-3">

              Krishnajewellery@yahoo.com

            </p>

          </div>

        </div>

      </div>

    </section>

  );
}