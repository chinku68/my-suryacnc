import Image from "next/image";
import type { IconType } from "react-icons";
import { FiAward } from "react-icons/fi";
import { LuBuilding2, LuRuler } from "react-icons/lu";

type ProofItemData = {
  title: string;
  icon: IconType;
};

type ProcessStepData = {
  number: string;
  title: string;
  description: string;
};

const proofItems: ProofItemData[] = [
  {
    title: "15+ Years Experience",
    icon: FiAward,
  },
  {
    title: "Made to Measure",
    icon: LuRuler,
  },
  {
    title: "Residential & Commercial",
    icon: LuBuilding2,
  },
];

const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Share Your Idea",
    description: "Tell us about your space, preferred style and project requirements.",
  },
  {
    number: "02",
    title: "Design & Material",
    description: "We help select the design, dimensions, materials and finish.",
  },
  {
    number: "03",
    title: "CNC Production",
    description: "Your approved design is crafted using high-precision CNC technology.",
  },
  {
    number: "04",
    title: "Finishing & Delivery",
    description: "We complete the finishing, quality inspection and project delivery.",
  },
];

type ProofItemProps = {
  item: ProofItemData;
};

export function ProofItem({ item }: ProofItemProps) {
  const Icon = item.icon;

  return (
    <div className="flex min-w-0 items-center gap-4 py-5 first:pt-0 last:pb-0 md:py-4 lg:flex-col lg:items-start lg:gap-3 lg:px-4 lg:py-0 lg:first:pl-0 lg:last:pr-0">
      <Icon
        className="size-7 shrink-0 text-gold transition-colors duration-200 group-hover:text-[#d1a65d] motion-reduce:transition-none"
        aria-hidden="true"
      />
      <p className="text-sm font-semibold leading-5 text-[#f6f1e7]">{item.title}</p>
    </div>
  );
}

export function CraftsmanshipSection() {
  return (
    <section className="bg-[#1e1e1b]" aria-labelledby="craftsmanship-heading">
      <div className="mx-auto grid w-full max-w-[1280px] md:grid-cols-[55%_45%]">
        <div className="group relative h-[280px] min-[420px]:h-[320px] md:h-auto md:min-h-[500px]">
          <Image
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transform-none"
            src="/img/img1/CNC-Crafted Wooden Mandala Panel.png"
            alt="CNC router carving an intricate decorative wooden panel"
            fill
            quality={88}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 704px"
          />
        </div>

        <div className="group flex flex-col justify-center px-5 py-10 min-[420px]:px-6 md:px-10 md:py-12 lg:px-12 lg:py-16 xl:px-[72px] xl:py-20">
          <p className="mb-4 text-xs font-extrabold tracking-[0.16em] text-gold">OUR CRAFTSMANSHIP</p>
          <h2
            className="font-serif text-[clamp(2.5rem,8vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] text-[#f6f1e7] md:text-[44px] lg:text-5xl xl:text-[54px]"
            id="craftsmanship-heading"
          >
            <span className="block">Built with precision.</span>
            <span className="block">Finished by hand.</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-[#cbc5ba] xl:text-[17px] xl:leading-8">
            We combine digital accuracy with skilled craftsmanship to create detailed, durable and beautifully
            finished pieces for modern spaces.
          </p>

          <div className="mt-8 divide-y divide-white/15 border-t border-white/15 pt-5 lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:pt-6">
            {proofItems.map((item) => (
              <ProofItem item={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ProcessStepProps = {
  step: ProcessStepData;
};

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <article className="relative z-10 grid min-w-0 grid-cols-[48px_minmax(0,1fr)] gap-4 min-[641px]:block">
      <div className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-gold bg-background text-sm font-bold tracking-[0.08em] text-gold-hover min-[641px]:size-14 lg:size-[58px]">
        {step.number}
      </div>
      <div className="min-w-0 pb-9 min-[641px]:pb-0 min-[641px]:pt-6 lg:pt-7">
        <h3 className="font-serif text-xl font-bold leading-7 text-primary lg:text-[22px]">{step.title}</h3>
        <p className="mt-2 max-w-[270px] text-[15px] leading-6 text-secondary">{step.description}</p>
      </div>
    </article>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-background py-14 md:py-20 lg:py-24" aria-labelledby="process-heading">
      <div className="mx-auto w-full max-w-[1280px] px-4 min-[641px]:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[720px]">
          <p className="mb-4 text-xs font-extrabold tracking-[0.16em] text-gold-hover">HOW IT WORKS</p>
          <h2
            className="font-serif text-[clamp(2.25rem,7vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] text-primary"
            id="process-heading"
          >
            From Idea to Installation
          </h2>
          <div className="mt-5 h-0.5 w-14 bg-gold" aria-hidden="true" />
          <p className="mt-5 max-w-[620px] text-base leading-7 text-secondary">
            A simple and transparent process from your first idea to the finished result.
          </p>
        </div>

        <div className="relative mt-10 md:mt-12 lg:mt-16">
          <div className="absolute bottom-6 left-[23px] top-6 w-px bg-border min-[641px]:hidden" aria-hidden="true" />
          <div className="absolute left-[7%] right-[7%] top-[29px] hidden h-px bg-border lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 min-[641px]:grid-cols-2 min-[641px]:gap-x-10 min-[641px]:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
