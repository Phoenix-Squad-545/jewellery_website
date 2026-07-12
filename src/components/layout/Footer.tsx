import { Facebook, Instagram } from "lucide-react";
import Logo from "../../assets/logo.jpg"; // Update the path and extension as needed

export default function Footer() {

  return (

    <footer className="bg-[#1a1612] text-white pt-16 pb-8">

      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}

        <div className="grid md:grid-cols-5 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}

          {/* Brand */}
<div>
  <div className="flex items-center gap-3">
    <img
      src={Logo}
      alt="Radha Gold Jewellery Logo"
      className="w-10 h-10 object-contain rounded-full"
    />

    <h3 className="font-cinzel text-lg tracking-widest">
      Radha Gold Jewellery
    </h3>
  </div>

  <p className="text-white/50 text-sm mt-6 leading-relaxed">
    Founded in 1967, Radha Gold Jewellery specializes in premium silver
    craftsmanship and heritage designs.
  </p>
</div>

          {/* Navigate */}

          <div>

            <h4 className="font-cormorant text-sm tracking-[0.3em] text-gold mb-6 mt-2">

              Navigate

            </h4>

            <ul className="space-y-3 text-sm text-white/50">

              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact Us</li>

            </ul>

          </div>

          {/* Collections */}

          <div>

            <h4 className="font-cormorant text-sm tracking-[0.3em] text-gold mb-6 mt-2">

              Collections

            </h4>

            <ul className="space-y-3 text-sm text-white/50">

              <li>Temple Jewellery</li>
              <li>Jadau Jewellery Collections</li>
              <li>Panchalogam Jewellery Collections</li>
              {/* <li>Gold Collections</li>
              <li>Gift Articles</li>
              <li>Silverware</li>
              <li>Antique Jewellery</li>
              <li>Birthstone</li> */}

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h4 className="font-cormorant text-sm tracking-[0.3em] text-gold mb-6 mt-2">

              Connect

            </h4>

            <ul className="space-y-3 text-sm text-white/50">

              <li>Facebook</li>
              <li>Instagram</li>
              <li>+91 44 2462 0000</li>
              <li>radhajwellery@yahoo.com</li>

            </ul>

          </div>

          {/* Working Hours */}

          <div>

            <h4 className="font-cormorant text-sm tracking-[0.3em] text-gold mb-6 mt-2">
              Working Hours
            </h4>

            <p className="text-sm text-white/60 leading-relaxed">
              Monday to Saturday <br />
              10:00 AM to 8:30 PM
            </p>

            <span className="text-xs text-white/40 block mt-2">
              Closed on Sundays
            </span>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">

          <p className="text-xs text-white/30">

            © {new Date().getFullYear()} Radha Gold Jewellery.
            All rights reserved.

          </p>

         <div className="flex gap-4">
          <a
            href="https://www.facebook.com/share/1EdZnwVkxe/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>

          <a
            href="https://www.instagram.com/radhagoldjewellers2874?utm_source=qr&igsh=MWl3NWg4ZDVteXd3eg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
        </div>
        </div>

      </div>

    </footer>

  );
}