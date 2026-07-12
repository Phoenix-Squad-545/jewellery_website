import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import Drawer from "./Drawer";
import logo from "../../assets/logo.jpg"; // Update the path and extension as needed

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState<boolean>(false);

  const [open, setOpen] =
    useState<boolean>(false);

  useEffect(() => {

    const onScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  return (
    <>
      <nav
        className={[
          "fixed w-full z-50",
          "flex items-center justify-between",
          "px-6 py-3",
          "text-white transition-all duration-300",
          scrolled
            ? "bg-black/70 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >

        {/* LEFT — Logo + Contact */}

      {/* LEFT — Logo + Contact */}

<div className="flex items-start gap-3">
  <Link to="/" className="shrink-0">
    <img
      src={logo}
      alt="Radha Gold Jewellery Logo"
      className="w-10 h-10 object-contain"
    />
  </Link>

  <div className="flex flex-col leading-tight">
    <Link
      to="/"
      className="font-cinzel text-lg tracking-widest"
    >
      Radha Gold Jewellery
    </Link>

    <div className="text-[10px] text-white/70 mt-1 hidden md:block">
      <p>044 42102844</p>
      <p>radhajewellery@yahoo.com</p>
    </div>
  </div>
</div>

        {/* CENTER — Brand Name */}

        {/* <div className="absolute left-1/2 -translate-x-1/2 text-center">

          <h1
            className="
              font-cormorant
              text-xl md:text-2xl
              tracking-[0.3em]
              uppercase
            "
          >
            Radha Gold Jewellery
          </h1>

        </div> */}

        {/* RIGHT — Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          {navigationLinks.map((link) => (

            <Link
              key={link.id}
              to={link.id}
              className="
                relative
                text-sm
                tracking-widest
                uppercase
                hover:text-yellow-400
                transition
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-yellow-400
                after:transition-all
                hover:after:w-full
              "
            >
              {link.label}
            </Link>

          ))}

        </div>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="
            flex flex-col gap-1
            cursor-pointer
            md:hidden
          "
        >

          <span className="w-6 h-[2px] bg-current" />
          <span className="w-6 h-[2px] bg-current" />
          <span className="w-6 h-[2px] bg-current" />

        </button>

      </nav>

      {/* Drawer — Mobile Only */}

      <Drawer
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}