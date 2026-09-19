"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.2 3.5 9.7 8l-2.1 1.7a15.3 15.3 0 0 0 6.7 6.7l1.7-2.1 4.5 2.5-.7 3a2.2 2.2 0 0 1-2.2 1.7A15.1 15.1 0 0 1 2.5 6.4a2.2 2.2 0 0 1 1.7-2.2l3-.7Z" />
    </svg>
  );
}

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
    <header className="site-header">
      <div className="announcement-bar">
        <p>15+ Years of CNC Excellence <span aria-hidden="true">•</span> Hyderabad</p>
      </div>

      <div className="navbar">
        <div className="nav-container">
          <a className="brand" href="#home" aria-label="Surya CNC Crafts home" onClick={closeMenu}>
            <span className="brand-mark">
              <Image src="/img/mainlogo.png" alt="" width={1024} height={1024} sizes="48px" />
            </span>
            <span className="brand-name">
              <strong>SURYA</strong>
              <span>CNC CRAFTS</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item, index) => (
              <a className={index === 0 ? "active" : undefined} href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-actions">
            <a className="phone-button" href="tel:+918282829779">
              <PhoneIcon />
              <span>+91 82828 29779</span>
            </a>
            <a
              className="quote-button"
              href="https://wa.me/918282829779?text=Hello%20Surya%20CNC%20Crafts%2C%20I%27d%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noreferrer"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className={menuOpen ? "menu-icon open" : "menu-icon"} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"} id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a className={index === 0 ? "active" : undefined} href={item.href} key={item.label} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="mobile-phone" href="tel:+918282829779" onClick={closeMenu}>
              <PhoneIcon />
              +91 82828 29779
            </a>
            <a
              className="quote-button mobile-quote"
              href="https://wa.me/918282829779?text=Hello%20Surya%20CNC%20Crafts%2C%20I%27d%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          </nav>
        </div>

        {menuOpen ? <button className="menu-backdrop" aria-label="Close navigation menu" onClick={closeMenu} /> : null}
      </div>
    </header>
  );
}
