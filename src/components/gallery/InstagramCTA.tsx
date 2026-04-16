export default function InstagramCTA() {

  return (

    <section className="bg-charcoal py-16">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        <p className="font-cormorant text-2xl md:text-3xl text-white">

          Follow us on Instagram{" "}
          <em className="text-gold italic">
            #Krishna_Jewellery
          </em>

        </p>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="font-cinzel text-xs tracking-[0.3em] uppercase
          bg-gold text-charcoal px-8 py-4
          hover:bg-gold-light transition"
        >

          Visit Instagram Page

        </a>

      </div>

    </section>

  );
}