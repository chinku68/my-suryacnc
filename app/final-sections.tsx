import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiArrowRight, FiMail, FiMapPin, FiPhone, FiPlus } from "react-icons/fi";

type FAQItemData = {
  question: string;
  answer: string;
};

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type ContactItemData = {
  label: string;
  href: string;
  icon: IconType;
  external?: boolean;
};

const faqItems: FAQItemData[] = [
  {
    question: "Can you create a custom design?",
    answer:
      "Yes. Share your reference image, sketch, dimensions or design idea with us. Our team can help refine it into a CNC-ready design suited to your space.",
  },
  {
    question: "Which materials do you work with?",
    answer:
      "We work with materials such as natural wood, plywood, MDF, Corian and other CNC-compatible materials. The most suitable option will depend on the design, location and required finish.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "Installation support depends on the project type and location. Contact our team with your project details, and we will confirm the available delivery and installation options.",
  },
  {
    question: "What details are needed for a quotation?",
    answer:
      "Please share the design reference, approximate dimensions, preferred material, quantity and project location. These details help us provide a more accurate quotation.",
  },
  {
    question: "How long does a custom CNC project take?",
    answer:
      "Project timelines depend on the design complexity, material, size, finishing and quantity. We will share an estimated schedule after reviewing your requirements.",
  },
];

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#selected-works" },
  { label: "About", href: "#about-craftsmanship-heading" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks: FooterLink[] = [
  { label: "Main Door Carvings", href: "#services" },
  { label: "Pooja Doors", href: "#services" },
  { label: "Decorative Wall Panels", href: "#services" },
  { label: "Elevation Designs", href: "#services" },
  { label: "Corian 3D Designs", href: "#services" },
  { label: "Custom Architectural Work", href: "#services" },
];

const contactItems: ContactItemData[] = [
  {
    label: "suryacnccrafts@gmail.com",
    href: "mailto:suryacnccrafts@gmail.com",
    icon: FiMail,
  },
  {
    label: "+91 82828 29779",
    href: "tel:+918282829779",
    icon: FiPhone,
  },
  {
    label: "Hyderabad, Telangana",
    href: "https://www.google.com/maps/dir/?api=1&destination=17.3283098,78.5399953&travelmode=driving",
    icon: FiMapPin,
    external: true,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/suryacnccrafts",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/surya_cnc_crafts/",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Surya_CNC_Crafts",
    icon: FaYoutube,
  },
] as const;

const lightFocusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold/50 focus-visible:ring-offset-3";

const darkFocusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#d1a450] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171714]";

type FAQItemProps = {
  item: FAQItemData;
  defaultOpen?: boolean;
};

export function FAQItem({ item, defaultOpen = false }: FAQItemProps) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-border bg-surface" open={defaultOpen}>
      <summary
        className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-left text-[17px] font-bold leading-6 text-primary transition-colors hover:text-gold-hover sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden ${lightFocusRing}`}
      >
        <span>{item.question}</span>
        <FiPlus
          className="size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-45 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </summary>
      <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6">
        <p className="max-w-[690px] text-[15px] leading-7 text-secondary">{item.answer}</p>
      </div>
    </details>
  );
}

export function FAQSection() {
  return (
    <section className="bg-surface py-14 md:py-20 lg:py-24" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto grid w-full max-w-[1280px] gap-9 px-4 min-[641px]:px-6 lg:grid-cols-[36%_minmax(0,64%)] lg:gap-16 lg:px-8 xl:gap-20 xl:px-12">
        <div>
          <p className="mb-4 text-xs font-extrabold tracking-[0.16em] text-gold-hover">COMMON QUESTIONS</p>
          <h2
            className="font-serif text-[clamp(2.25rem,8vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] text-primary lg:text-[52px]"
            id="faq-heading"
          >
            Before You Start
          </h2>
          <p className="mt-5 max-w-[390px] text-base leading-7 text-secondary">
            Helpful answers about custom designs, materials and installation.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem defaultOpen={index === 0} item={item} key={item.question} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="bg-gold" id="quote" aria-labelledby="quote-heading">
      <div className="mx-auto flex min-h-[220px] w-full max-w-[1280px] flex-col justify-center gap-8 px-4 py-12 min-[641px]:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-10 xl:px-12">
        <div className="max-w-[690px]">
          <h2
            className="font-serif text-[clamp(2rem,8vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#1e1e1b] lg:text-[50px]"
            id="quote-heading"
          >
            Have a space in mind? Let&apos;s craft it.
          </h2>
          <p className="mt-4 max-w-[610px] text-base leading-7 text-[#353129]">
            Share your idea with us and get a custom CNC solution created for your space.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
          <a
            className={`group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-sm border border-[#fffdf8] bg-[#fffdf8] px-6 text-sm font-bold text-primary shadow-[0_8px_18px_rgba(60,42,15,0.12)] transition duration-200 hover:-translate-y-px hover:bg-white active:translate-y-px active:shadow-none motion-reduce:transform-none min-[420px]:w-auto ${lightFocusRing}`}
            href="https://wa.me/918282829779?text=Hello%20Surya%20CNC%20Crafts%2C%20I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a Quote
            <FiArrowRight
              className="size-[17px] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </a>
          <a
            className={`inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-sm border border-primary/35 bg-transparent px-6 text-sm font-bold text-primary transition duration-200 hover:border-primary hover:bg-primary hover:text-[#f6f1e7] active:translate-y-px motion-reduce:transform-none min-[420px]:w-auto ${lightFocusRing}`}
            href="tel:+918282829779"
          >
            <FiPhone className="size-[18px]" aria-hidden="true" />
            Call +91 82828 29779
          </a>
        </div>
      </div>
    </section>
  );
}

type FooterLinkGroupProps = {
  title: string;
  links: FooterLink[];
};

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <nav aria-label={`${title} footer navigation`}>
      <h2 className="text-base font-semibold text-[#f6f1e7]">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                className={`inline-flex min-h-6 items-center text-sm leading-6 text-[#bdb7ac] transition-colors hover:text-[#d1a450] ${darkFocusRing}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                className={`inline-flex min-h-6 items-center text-sm leading-6 text-[#bdb7ac] transition-colors hover:text-[#d1a450] ${darkFocusRing}`}
                href={link.href}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

type ContactItemProps = {
  item: ContactItemData;
};

export function ContactItem({ item }: ContactItemProps) {
  const Icon = item.icon;

  return (
    <li>
      <a
        className={`flex min-h-11 items-start gap-3 text-sm leading-6 text-[#bdb7ac] transition-colors hover:text-[#d1a450] ${darkFocusRing}`}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
      >
        <Icon className="mt-1 size-[18px] shrink-0 text-[#d1a450]" aria-hidden="true" />
        <span className="min-w-0 break-words">{item.label}</span>
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#171714] text-[#bdb7ac]" id="contact">
      <div className="mx-auto w-full max-w-[1280px] px-4 pt-16 min-[641px]:px-6 md:pt-20 lg:px-8 xl:px-12 xl:pt-[88px]">
        <div className="grid grid-cols-1 gap-10 min-[641px]:grid-cols-2 min-[641px]:gap-x-12 min-[641px]:gap-y-14 xl:grid-cols-[1.3fr_0.8fr_1fr_1fr] xl:gap-12">
          <div>
            <Link className={`inline-flex items-center gap-3 ${darkFocusRing}`} href="#home" aria-label="Surya CNC Crafts home">
              <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full">
                <Image className="size-full object-contain" src="/img/mainlogo.png" alt="Surya CNC Crafts logo" width={1024} height={1024} sizes="48px" />
              </span>
              <span className="flex flex-col leading-none text-[#f6f1e7]">
                <strong className="font-serif text-xl tracking-[0.08em]">SURYA</strong>
                <span className="mt-1 text-[9px] font-bold tracking-[0.2em]">CNC CRAFTS</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[350px] text-sm leading-6 text-[#bdb7ac]">
              Custom CNC doors, panels, murals and architectural details—designed and finished in Hyderabad.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    className={`grid size-10 place-items-center rounded-full border border-white/20 text-[#f6f1e7] transition-colors hover:border-[#d1a450] hover:text-[#d1a450] ${darkFocusRing}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — opens in a new tab`}
                    key={social.label}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterLinkGroup title="Quick Links" links={quickLinks} />
          <FooterLinkGroup title="Our Services" links={serviceLinks} />

          <div>
            <h2 className="text-base font-semibold text-[#f6f1e7]">Contact Us</h2>
            <ul className="mt-4 space-y-1">
              {contactItems.map((item) => (
                <ContactItem item={item} key={item.label} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/12 py-8 pr-16 text-sm leading-6 text-[#8f8a81] min-[641px]:mt-16 min-[641px]:flex-row min-[641px]:items-center min-[641px]:justify-between min-[641px]:pr-0">
          <p>© 2026 Surya CNC Crafts. All rights reserved.</p>
          <p>Crafting better spaces through precision.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      className={`fixed bottom-4 right-4 z-40 grid size-[52px] place-items-center rounded-full bg-[#1fa855] text-white shadow-[0_10px_28px_rgba(20,70,42,0.28)] transition duration-200 hover:-translate-y-1 hover:bg-[#168b46] active:translate-y-0 motion-reduce:transform-none sm:bottom-6 sm:right-6 sm:size-14 ${lightFocusRing}`}
      href="https://wa.me/918282829779?text=Hello%20Surya%20CNC%20Crafts%2C%20I%20would%20like%20to%20discuss%20a%20custom%20CNC%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Surya CNC Crafts on WhatsApp"
    >
      <FaWhatsapp className="size-7" aria-hidden="true" />
    </a>
  );
}
