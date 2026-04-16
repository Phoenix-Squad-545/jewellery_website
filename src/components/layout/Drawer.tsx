// components/navbar/Drawer.tsx

import React from "react";
import { navigationLinks } from "../../data/navigation";
import { Link } from "react-router-dom";

interface DrawerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Drawer({
  open,
  setOpen,
}: DrawerProps) {

  return (
    <>
      {/* Overlay */}

      <div
        className={[
          "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300",
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}

      <div
        className={[
          "fixed top-0 right-0 h-full w-[320px] bg-[#3f3f3f] text-white z-50",
          "transition-transform duration-300 ease-in-out",
          open
            ? "translate-x-0"
            : "translate-x-full",
        ].join(" ")}
      >

        {/* Close Button */}

        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-xl cursor-pointer"
        >
          ✕
        </button>

        {/* Content Wrapper (TOP aligned now) */}

        <div className="flex flex-col items-center h-full pt-16 px-6 text-center">

          {/* MENU Title */}

          <h2 className="font-cinzel text-2xl tracking-widest mb-4">
            MENU
          </h2>

          {/* Divider */}

          <div className="w-16 h-[1px] bg-white/40 mb-6" />

          {/* Navigation Links */}

          <ul className="space-y-4 mb-12">

            {navigationLinks.map((link) => (

              <li key={link.id}>

              <Link
  to={link.id}
  onClick={() => setOpen(false)}
  className="text-lg hover:text-gold transition"
>
  {link.label}
</Link>

              </li>

            ))}

          </ul>

          {/* Contact Info — pushed to bottom */}

          <div className="mt-auto text-sm text-white/70 pb-150">

            <p>+91 4424640699</p>

            <p>
              krishnajewellery@yahoo.com
            </p>

          </div>

        </div>

      </div>
    </>
  );
}