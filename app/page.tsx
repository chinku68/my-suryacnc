import Image from "next/image";
import SiteHeader from "./site-header";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 15.7-4.6Z" />
      <path d="M9 7.7c.2-.4.4-.4.7-.4h.5l.8 2c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.7 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.6 0 .6-.3 1.3-.8 1.7-.6.5-1.3.8-2.2.6-1.2-.2-2.7-.8-4.5-2.4-1.4-1.3-2.4-2.8-2.7-4-.3-1 .1-1.8.5-2.3Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-shell">
            <div className="hero-content">
              <p className="eyebrow">CUSTOM CNC DESIGN &amp; CRAFTSMANSHIP</p>
              <h1 id="hero-heading">
                <span>Precision Crafted.</span>
                <span>Made for Your Space.</span>
              </h1>
              <p className="hero-description">
                Custom CNC doors, panels, murals and architectural details—designed and finished in Hyderabad.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#projects">
                  Explore Our Work
                  <ArrowIcon />
                </a>
                <a
                  className="whatsapp-button"
                  href="https://wa.me/918282829779"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="hero-visual" id="projects">
              <Image
                className="hero-image"
                src="/img/img1/Lotus-Carved Luxury Entryway.png"
                alt="Warmly lit CNC-carved wooden main door with an intricate lotus design"
                fill
                preload
                sizes="(max-width: 767px) 100vw, 57vw"
              />
              <div className="image-wash" aria-hidden="true" />
              <div className="trust-badge" aria-label="15 plus years, custom made">
                <strong>15+</strong>
                <span>Years</span>
                <small>Custom Made</small>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
