"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold/50 focus-visible:ring-offset-3";

const goldButton =
  "inline-flex min-h-11 items-center justify-center rounded-sm border border-gold bg-gold px-5 text-[13px] font-bold text-white shadow-[0_7px_18px_rgba(97,68,25,0.12)] transition duration-200 hover:-translate-y-px hover:border-gold-hover hover:bg-gold-hover hover:shadow-[0_9px_22px_rgba(97,68,25,0.18)] active:translate-y-px active:shadow-none motion-reduce:transform-none";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="grid h-7 place-items-center bg-olive text-[#fffdf7] lg:h-[31px]">
        <p className="m-0 text-[11px] font-semibold tracking-[0.025em] sm:text-xs">
          15+ Years of CNC Excellence <span className="mx-1 text-[#dfc28c]" aria-hidden="true">•</span> Hyderabad
        </p>
      </div>

      <div className="relative h-[75px] border-b border-border bg-white/97 lg:h-[81px]">
        <div className="relative z-50 mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 2xl:px-[72px]">
          <a
            className={`inline-flex w-max items-center gap-2 rounded-sm sm:gap-3 lg:min-w-[205px] ${focusRing}`}
            href="#home"
            aria-label="Surya CNC Crafts home"
            onClick={closeMenu}
          >
            <span className="grid size-[41px] shrink-0 place-items-center overflow-hidden rounded-full sm:size-[45px] lg:size-[49px]">
              <Image className="size-full object-contain" src="/img/mainlogo.png" alt="" width={1024} height={1024} sizes="49px" />
            </span>
            <span className="flex flex-col leading-none text-[#292721]">
              <strong className="font-serif text-[17px] font-bold tracking-[0.08em] sm:text-xl">SURYA</strong>
              <span className="mt-1 text-[8px] font-bold tracking-[0.2em] sm:text-[9px]">CNC CRAFTS</span>
            </span>
          </a>

          <nav className="hidden h-full flex-1 items-center justify-center gap-6 lg:flex xl:gap-8 2xl:gap-10" aria-label="Primary navigation">
            {navigation.map((item, index) => (
              <a
                className={`relative inline-flex h-full items-center text-[13px] font-semibold transition-colors after:absolute after:bottom-[13px] after:left-0 after:right-0 after:h-0.5 after:origin-center after:bg-gold after:transition-transform hover:text-gold-hover hover:after:scale-x-100 ${focusRing} ${
                  index === 0 ? "text-gold-hover after:scale-x-100" : "text-[#4d4a43] after:scale-x-0"
                }`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden min-w-[132px] items-center justify-end gap-3.5 lg:flex lg:min-w-[148px] 2xl:min-w-[330px]">
            <a
              className={`hidden min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-[#bdb7aa] bg-surface px-4 text-[13px] font-bold text-[#3e3b35] transition-colors hover:border-gold hover:text-gold-hover 2xl:inline-flex ${focusRing}`}
              href="tel:+918282829779"
            >
              <FiPhone className="size-[18px] text-gold" aria-hidden="true" />
              <span>+91 82828 29779</span>
            </a>
            <a
              className={`${goldButton} min-w-[132px] ${focusRing}`}
              href="https://wa.me/918282829779?text=Hello%20Surya%20CNC%20Crafts%2C%20I%27d%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noreferrer"
            >
              Get a Quote
            </a>
          </div>

          <button
            className={`inline-flex size-[46px] cursor-pointer items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:border-gold hover:text-gold-hover lg:hidden ${focusRing}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX className="size-6" aria-hidden="true" /> : <FiMenu className="size-6" aria-hidden="true" />}
          </button>
        </div>

        <div
          className={`absolute left-0 right-0 top-full z-50 border-y border-border bg-surface px-4 transition duration-200 sm:px-6 lg:hidden ${
            menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"
          }`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          <nav className="mx-auto max-w-[720px] pb-5 pt-3" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                className={`flex min-h-[50px] items-center border-b border-[#ede8de] text-[15px] font-semibold ${focusRing} ${
                  index === 0 ? "text-gold-hover" : "text-[#454139] hover:text-gold-hover"
                }`}
                href={item.href}
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className={`flex min-h-[50px] items-center gap-2.5 border-b border-[#ede8de] text-[15px] font-semibold text-[#454139] hover:text-gold-hover ${focusRing}`}
              href="tel:+918282829779"
              onClick={closeMenu}
            >
              <FiPhone className="size-[18px] shrink-0 text-gold" aria-hidden="true" />
              +91 82828 29779
            </a>
            <a
              className={`${goldButton} mt-4 w-full ${focusRing}`}
              href="https://wa.me/918282829779?text=Hello%20Surya%20CNC%20Crafts%2C%20I%27d%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          </nav>
        </div>

        {menuOpen ? (
          <button
            className="fixed inset-x-0 bottom-0 top-[103px] z-40 border-0 bg-[rgba(24,22,18,0.32)] backdrop-blur-[2px] lg:hidden"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        ) : null}
      </div>
    </header>
  );
}
