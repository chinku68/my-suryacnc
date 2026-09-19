import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiArrowRight, FiEdit3, FiMapPin, FiSettings } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

export type CardItem = {
  title: string;
  image: string;
  href?: string;
  category?: string;
  alt: string;
};

type TrustItem = {
  title: string;
  description: string;
  icon: IconType;
};

const trustItems: TrustItem[] = [
  {
    title: "Precision CNC",
    description: "Accurate. Detailed. Consistent.",
    icon: FiSettings,
  },
  {
    title: "Custom Designs",
    description: "Your vision. Our craft.",
    icon: FiEdit3,
  },
  {
    title: "Premium Finish",
    description: "Built beautifully to last.",
    icon: IoDiamondOutline,
  },
  {
    title: "Made in Hyderabad",
    description: "Local expertise. Wider possibilities.",
    icon: FiMapPin,
  },
];

const serviceItems: CardItem[] = [
  {
    title: "Main Door Carvings",
    image: "/img/img1/Carved Lotuswood Grand Entrance.png",
    alt: "Grand wooden main door with a deeply carved lotus design",
  },
  {
    title: "Pooja Doors",
    image: "/img/img1/Warm Slatted Shrine Entryway.png",
    alt: "Warm wood slatted entrance framing an illuminated pooja space",
  },
  {
    title: "Decorative Wall Panels",
    image: "/img/img1/Illuminated Tree Carved Wood Panel.png",
    alt: "CNC machine carving an ornate wooden mandala wall panel",
  },
  {
    title: "Elevation Designs",
    image: "/img/img1/Modern Luxury Home with Ornamental Screens.png",
    alt: "Modern home elevation with tall illuminated ornamental screens",
  },
  {
    title: "Corian 3D Designs",
    image: "/img/img1/Luxurious Ganesha Shrine in Marble and Gold.png",
    alt: "Intricately carved white Ganesha shrine with warm gold lighting",
  },
  {
    title: "Custom Architectural Work",
    image: "/img/img1/Warmly Lit Mandala Wood Partition.png",
    alt: "Craftsman hand-finishing an ornate CNC-carved wooden panel",
  },
];

const projectItems: CardItem[] = [
  {
    title: "Lotus Main Door",
    category: "Main Doors",
    image: "/img/img1/Ornate Lotus-Carved Wooden Entryway.png",
    alt: "Ornate double wooden entrance door carved with lotus flowers",
  },
  {
    title: "Fluted Pooja Partition",
    category: "Pooja Spaces",
    image: "/img/img1/Warmly Lit Mandala Wood Partition.png",
    alt: "Warmly illuminated carved mandala partition in a contemporary home",
  },
  {
    title: "Geometric Wall Panel",
    category: "Wall Panels",
    image: "/img/img1/Intricate Carved Wooden Rosette Panel.png",
    alt: "Close-up of repeating geometric rosettes carved into walnut wood",
  },
  {
    title: "Temple Corian Mandir",
    category: "Corian Design",
    image: "/img/img1/Modern Backlit Ganesha Prayer Niche.png",
    alt: "Backlit white Corian prayer niche with a Ganesha idol",
  },
  {
    title: "Embossed 3D Mural",
    category: "3D Murals",
    image: "/img/img1/Serene Lotus Bas-Relief Mural.png",
    alt: "Detailed three-dimensional bas-relief mural with a woman and lotus flowers",
  },
  {
    title: "Exterior Elevation Screen",
    category: "Elevation",
    image: "/img/img1/Modern Luxury Home with Bronze Leaf Screen.png",
    alt: "Luxury home exterior with a tall illuminated bronze leaf screen",
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold/50 focus-visible:ring-offset-3";

type SectionHeaderProps = {
  headingId: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
};

export function SectionHeader({ headingId, title, description, linkLabel, linkHref }: SectionHeaderProps) {
  return (
    <div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-8 lg:mb-12">
      <h2
        className="font-serif text-[clamp(2.25rem,6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] text-primary"
        id={headingId}
      >
        {title}
      </h2>
      <div className="flex flex-col items-start gap-4 min-[641px]:flex-row min-[641px]:items-end min-[641px]:justify-between md:gap-6">
        <p className="max-w-[530px] text-base leading-7 text-secondary">{description}</p>
        <Link
          className={`group inline-flex shrink-0 items-center gap-2 border-b border-gold pb-1 text-sm font-bold text-gold-hover transition-colors hover:text-primary ${focusRing}`}
          href={linkHref}
        >
          {linkLabel}
          <FiArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

const trustDividerClasses = [
  "border-b min-[380px]:border-r lg:border-b-0",
  "border-b lg:border-r lg:border-b-0",
  "border-b min-[380px]:border-r min-[380px]:border-b-0 lg:border-r",
  "",
];

export function TrustHighlights() {
  return (
    <section className="border-y border-border bg-surface" aria-label="Why choose Surya CNC Crafts">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-4 min-[380px]:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 xl:px-12">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className={`flex min-h-[102px] items-center gap-3 border-border px-2 py-4 min-[380px]:px-4 sm:gap-4 sm:px-6 lg:min-h-[112px] lg:px-5 xl:px-7 ${trustDividerClasses[index]}`}
              key={item.title}
            >
              <Icon className="size-7 shrink-0 stroke-[1.5] text-gold sm:size-8" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold leading-5 text-primary sm:text-base">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-secondary sm:text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

type CardContentProps = {
  item: CardItem;
};

function ServiceCardContent({ item }: CardContentProps) {
  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe4d8]">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none"
          src={item.image}
          alt={item.alt}
          fill
          quality={88}
          sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1279px) calc(50vw - 36px), 384px"
        />
      </div>
      <div className="flex min-h-[82px] items-center justify-between gap-4 px-5 py-5 sm:px-6">
        <h3 className="font-serif text-xl font-bold leading-7 text-primary lg:text-[22px]">{item.title}</h3>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-gold transition duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
          <FiArrowRight
            className="size-[18px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </span>
      </div>
    </>
  );
}

export function ServiceCard({ item }: CardContentProps) {
  const cardClass =
    "group min-w-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_10px_28px_rgba(53,43,28,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#cbb995] hover:shadow-[0_16px_34px_rgba(53,43,28,0.09)] motion-reduce:transform-none";

  if (item.href) {
    return (
      <Link className={`${cardClass} ${focusRing}`} href={item.href} aria-label={`Explore ${item.title}`}>
        <ServiceCardContent item={item} />
      </Link>
    );
  }

  return (
    <article className={cardClass}>
      <ServiceCardContent item={item} />
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-background py-14 md:py-[72px] lg:py-24" id="services" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-[1280px] px-4 min-[641px]:px-6 lg:px-8 xl:px-12">
        <SectionHeader
          headingId="services-heading"
          title="What We Create"
          description="Transforming spaces with precision, creativity and craftsmanship."
          linkLabel="View All Services"
          linkHref="#services-grid"
        />
        <div className="grid min-w-0 grid-cols-1 gap-5 min-[641px]:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8" id="services-grid">
          {serviceItems.map((item) => (
            <ServiceCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCardContent({ item }: CardContentProps) {
  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#ebe4d8]">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none"
          src={item.image}
          alt={item.alt}
          fill
          quality={88}
          sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1279px) calc(50vw - 36px), 384px"
        />
      </div>
      <div className="flex items-end justify-between gap-4 px-1 pb-6 pt-5">
        <div>
          {item.category ? (
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-hover">{item.category}</p>
          ) : null}
          <h3 className="font-serif text-xl font-bold leading-7 text-primary lg:text-[22px]">{item.title}</h3>
        </div>
        <FiArrowRight
          className="mb-1 size-5 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </div>
    </>
  );
}

export function ProjectCard({ item }: CardContentProps) {
  const cardClass =
    "group min-w-0 border-b border-border transition-colors duration-300 hover:border-gold motion-reduce:transition-none";

  if (item.href) {
    return (
      <Link className={`${cardClass} ${focusRing}`} href={item.href} aria-label={`View ${item.title}`}>
        <ProjectCardContent item={item} />
      </Link>
    );
  }

  return (
    <article className={cardClass}>
      <ProjectCardContent item={item} />
    </article>
  );
}

export function SelectedWorksSection() {
  return (
    <section className="bg-surface py-14 md:py-[72px] lg:py-24" id="selected-works" aria-labelledby="works-heading">
      <div className="mx-auto w-full max-w-[1280px] px-4 min-[641px]:px-6 lg:px-8 xl:px-12">
        <SectionHeader
          headingId="works-heading"
          title="Selected Works"
          description="A glimpse of our craftsmanship across homes, pooja spaces and commercial projects."
          linkLabel="View All Projects"
          linkHref="#selected-works-grid"
        />
        <div
          className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-8 min-[641px]:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-12"
          id="selected-works-grid"
        >
          {projectItems.map((item) => (
            <ProjectCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
