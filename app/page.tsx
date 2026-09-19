import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { SelectedWorksSection, ServicesSection, TrustHighlights } from "./home-sections";
import SiteHeader from "./site-header";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold/50 focus-visible:ring-offset-3";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="min-h-[580px] scroll-mt-28 bg-[radial-gradient(circle_at_9%_12%,rgba(180,135,61,0.075),transparent_29%),var(--background)]"
          id="home"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col md:grid md:min-h-[max(580px,calc(100svh-112px))] md:grid-cols-[43%_57%]">
            <div className="relative z-10 flex flex-col items-start justify-center px-4 py-[58px] sm:px-6 sm:py-[72px] md:px-7 md:py-16 lg:px-[clamp(2rem,4.2vw,3.5rem)] xl:px-[clamp(2rem,4.9vw,4.75rem)] xl:py-[clamp(4rem,8vh,6.75rem)]">
              <p className="mb-5 text-[11px] font-extrabold tracking-[0.13em] text-[#595c4a] sm:text-xs xl:text-[clamp(0.72rem,0.9vw,0.84rem)]">
                CUSTOM CNC DESIGN &amp; CRAFTSMANSHIP
              </p>
              <h1
                className="m-0 max-w-[650px] text-balance font-serif text-[clamp(2.35rem,11.6vw,2.7rem)] font-bold leading-[1.01] tracking-[-0.04em] text-primary min-[420px]:text-[clamp(2.5rem,11.5vw,2.95rem)] sm:text-[3.5rem] md:text-[clamp(2.75rem,6.4vw,3.35rem)] lg:text-[clamp(3rem,5vw,3.8rem)] xl:text-[clamp(3.35rem,4.65vw,4.5rem)] xl:leading-[0.98] xl:tracking-[-0.045em]"
                id="hero-heading"
              >
                <span className="block">Precision Crafted.</span>
                <span className="block">Made for Your Space.</span>
              </h1>
              <p className="mt-6 max-w-[590px] text-base leading-[1.65] text-secondary xl:text-[clamp(1rem,1.1vw,1.08rem)]">
                Custom CNC doors, panels, murals and architectural details—designed and finished in Hyderabad.
              </p>
              <div className="mt-8 flex w-full max-w-[420px] flex-col gap-4 min-[521px]:flex-row md:flex-col lg:max-w-none lg:flex-row">
                <a
                  className={`group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-sm border border-gold bg-gold px-6 text-[13px] font-bold text-white shadow-[0_7px_18px_rgba(97,68,25,0.12)] transition duration-200 hover:-translate-y-px hover:border-gold-hover hover:bg-gold-hover hover:shadow-[0_9px_22px_rgba(97,68,25,0.18)] active:translate-y-px active:shadow-none motion-reduce:transform-none min-[521px]:w-auto md:w-full lg:w-auto ${focusRing}`}
                  href="#projects"
                >
                  Explore Our Work
                  <FiArrowRight className="size-[17px] transition-transform duration-200 group-hover:translate-x-[3px] motion-reduce:transform-none" aria-hidden="true" />
                </a>
                <a
                  className={`inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-sm border border-[#aaa79f] bg-white/75 px-6 text-[13px] font-bold text-[#34322e] transition duration-200 hover:-translate-y-px hover:border-whatsapp hover:bg-surface hover:text-[#147a48] active:translate-y-px motion-reduce:transform-none min-[521px]:w-auto md:w-full lg:w-auto ${focusRing}`}
                  href="https://wa.me/918282829779"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="size-[22px] text-whatsapp" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div
              className="relative isolate min-h-[330px] aspect-[1.22/1] overflow-hidden min-[521px]:min-h-[430px] md:min-h-[580px] md:aspect-auto md:overflow-visible"
              id="projects"
            >
              <Image
                className="-z-20 object-cover object-center"
                src="/img/img1/Lotus-Carved Luxury Entryway.png"
                alt="Warmly lit CNC-carved wooden main door with an intricate lotus design"
                fill
                preload
                sizes="(max-width: 767px) 100vw, 57vw"
              />
              <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(246,241,231,0.35),transparent_12%)] md:block" aria-hidden="true" />
              <div
                className="absolute right-5 top-5 hidden size-24 flex-col items-center justify-center rounded-full border-2 border-gold bg-[#fbf7ee] text-primary shadow-[0_12px_32px_rgba(37,29,18,0.2),inset_0_0_0_6px_#f5eee1] min-[420px]:flex md:left-0 md:right-auto md:top-[26%] md:-translate-x-1/2 xl:top-[28%] xl:size-[116px]"
                aria-label="15 plus years, custom made"
              >
                <strong className="font-serif text-[26px] leading-[0.95] xl:text-[32px]">15+</strong>
                <span className="mt-0.5 font-serif text-sm font-bold">Years</span>
                <small className="mt-1.5 text-[9px] font-bold tracking-[0.02em] text-secondary">Custom Made</small>
              </div>
            </div>
          </div>
        </section>
        <TrustHighlights />
        <ServicesSection />
        <SelectedWorksSection />
      </main>
    </>
  );
}
