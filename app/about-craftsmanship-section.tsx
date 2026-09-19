import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const supportingPoints = ["Bespoke Designs", "Precision Manufacturing", "Hand-Finished Quality"] as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold/50 focus-visible:ring-offset-3";

function ExperienceBadge() {
  return (
    <div
      className="absolute bottom-4 right-4 hidden size-[104px] flex-col items-center justify-center rounded-full border border-gold bg-[#fffdf8] text-center text-primary shadow-[0_10px_26px_rgba(53,43,28,0.12)] min-[390px]:flex md:bottom-5 md:right-5 md:size-24 lg:size-28"
      aria-label="15 plus years of craft"
    >
      <strong className="font-serif text-[27px] leading-none lg:text-[30px]">15+</strong>
      <span className="mt-1 max-w-[68px] text-[10px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-secondary">
        Years of Craft
      </span>
    </div>
  );
}

export default function AboutCraftsmanshipSection() {
  return (
    <section className="bg-background py-14 md:py-20 xl:py-28" aria-labelledby="about-craftsmanship-heading">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid min-h-[520px] items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 xl:grid-cols-[53%_47%] xl:gap-20">
          <div className="relative aspect-[4/3] min-w-0">
            <div className="relative size-full overflow-hidden rounded-2xl border border-border bg-[#e9e1d4] shadow-[0_12px_32px_rgba(53,43,28,0.07)]">
              <Image
                className="object-cover object-center transition-transform duration-300 hover:scale-[1.015] motion-reduce:transform-none"
                src="/img/img1/Master Craftsman Carving Ornate Woodwork.png"
                alt="Skilled craftsman hand-finishing an intricate CNC-carved wooden panel"
                fill
                quality={88}
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 48vw, 625px"
              />
            </div>
            <ExperienceBadge />
          </div>

          <div className="flex min-w-0 flex-col items-start md:py-4">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-gold-hover">ABOUT SURYA CNC</p>
            <h2
              className="max-w-[560px] font-serif text-[clamp(2.125rem,9vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-primary md:text-[clamp(2.5rem,4.4vw,2.875rem)] xl:text-[54px]"
              id="about-craftsmanship-heading"
            >
              Craftsmanship that brings spaces to life.
            </h2>
            <p className="mt-6 max-w-[600px] text-base leading-7 text-secondary lg:text-[17px] lg:leading-8">
              For over 15 years, Surya CNC Crafts has been creating bespoke CNC designs that combine modern
              precision with traditional craftsmanship. Based in Hyderabad, we work with homeowners, architects and
              businesses to create meaningful, lasting spaces.
            </p>

            <ul className="mt-7 flex flex-col gap-3 min-[540px]:flex-row min-[540px]:flex-wrap md:flex-col lg:flex-row lg:gap-x-5">
              {supportingPoints.map((point) => (
                <li className="flex items-center gap-2 text-sm font-semibold text-primary" key={point}>
                  <span className="grid size-5 shrink-0 place-items-center rounded-full border border-gold text-gold-hover">
                    <FiCheck className="size-3" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link
              className={`group mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-sm border border-gold bg-gold px-7 text-sm font-bold text-white shadow-[0_7px_18px_rgba(97,68,25,0.12)] transition duration-200 hover:-translate-y-px hover:border-gold-hover hover:bg-gold-hover hover:shadow-[0_9px_22px_rgba(97,68,25,0.18)] active:translate-y-px active:shadow-none motion-reduce:transform-none min-[390px]:w-auto ${focusRing}`}
              href="/about"
            >
              About Surya CNC
              <FiArrowRight
                className="size-[17px] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
