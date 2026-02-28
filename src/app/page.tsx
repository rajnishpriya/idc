import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  HeartHandshake,
  MapPin,
  Phone,
  Star,
  CheckCircle2,
  ChevronDown,
  Clock,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedHeading from "@/components/AnimatedHeading";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Indu Dental Clinic | Best Dentist in Siwan Bihar | Dental Care Near Naya Bazar",
  description:
    "Indu Dental Clinic in Siwan, Bihar offers root canal, teeth cleaning, tooth extraction and complete dental care. Book appointment via WhatsApp today.",
  alternates: {
    canonical: "https://www.indudentalclinic.com/",
  },
};

const services = [
  {
    id: "general",
    label: "General Dentistry",
    image: "/images/General Dentistry.jpg",
    alt: "General dentistry checkup and cleaning at Indu Dental Clinic Siwan",
    desc: "Routine checkups, professional cleanings & preventive care in Siwan.",
    href: "/service#general",
  },
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    image: "/images/Cosmetic Dentistry.jpg",
    alt: "Teeth whitening and smile makeover services in Siwan Bihar",
    desc: "Teeth whitening, veneers & complete smile makeovers in Siwan.",
    href: "/service#cosmetic",
  },
  {
    id: "orthodontics",
    label: "Braces & Orthodontics",
    image: "/images/Braces & Orthodontics.jpg",
    alt: "Braces and Invisalign orthodontic treatment in Siwan Bihar",
    desc: "Invisible braces (Invisalign) & traditional metal braces in Siwan.",
    href: "/service#orthodontics",
  },
  {
    id: "implants",
    label: "Dental Implants",
    image: "/images/Dental Implants.jpg",
    alt: "Dental implants and tooth replacement in Siwan Bihar",
    desc: "Permanent, natural-looking tooth replacements in Siwan, Bihar.",
    href: "/service#implants",
  },
  {
    id: "rootcanal",
    label: "Root Canal Treatment",
    image: "/images/root-canal-treatment-siwan.jpeg",
    alt: "Root canal treatment dentist in Siwan Bihar",
    desc: "Painless root canal treatment (RCT) to save infected teeth.",
    href: "/service#rootcanal",
  },
  {
    id: "extraction",
    label: "Tooth Extraction",
    image: "/images/Tooth Extraction.jpg",
    alt: "Safe tooth extraction and wisdom tooth removal in Siwan",
    desc: "Safe and painless tooth & wisdom tooth extraction in Siwan.",
    href: "/service#extraction",
  },
  {
    id: "gums",
    label: "Gum Treatment",
    image: "/images/Gum Treatment.jpg",
    alt: "Gum disease treatment periodontist in Siwan Bihar",
    desc: "Expert gum disease (pyorrhoea) treatment & deep cleaning.",
    href: "/service#gums",
  },
  {
    id: "kids",
    label: "Kids Dentistry",
    image: "/images/Kids Dentistry.jpg",
    alt: "Paediatric dentist children dentist Siwan Bihar",
    desc: "Gentle and friendly dental care for children in Siwan.",
    href: "/service#kids",
  },
];

const faqs = [
  {
    q: "Who is the best dentist in Siwan?",
    a: "Indu Dental Clinic, located near Sadar Hospital, Naya Bazar, Siwan, is recognized as the best dental clinic in Siwan, Bihar. Our experienced dentists offer comprehensive dental services including root canal treatment, dental implants, braces, teeth whitening, and cosmetic dentistry with state-of-the-art equipment.",
  },
  {
    q: "What dental services are available at Indu Dental Clinic Siwan?",
    a: "We provide a full range of dental services in Siwan: General Dentistry (checkups, cleaning, fillings), Cosmetic Dentistry (teeth whitening, veneers, smile makeover), Orthodontics (metal braces, ceramic braces, Invisalign), Dental Implants, Root Canal Treatment (RCT), Tooth Extraction (including wisdom teeth), Gum Disease Treatment, and Paediatric (Kids) Dentistry.",
  },
  {
    q: "How much does root canal cost in Siwan?",
    a: "The cost of root canal treatment (RCT) in Siwan depends on the condition of the tooth. At Indu Dental Clinic, we offer transparent and affordable pricing for completely painless root canal treatments using modern anaesthesia and rotary endodontic equipment. Contact us for a precise quote.",
  },
  {
    q: "How much do dental implants cost in Siwan?",
    a: "The cost of dental implants in Siwan varies depending on the number of implants needed and the type of implant chosen. At Indu Dental Clinic, we offer transparent pricing with affordable options. Please contact us at +91 99318 62472 or visit our clinic near Sadar Hospital, Siwan for a free consultation and personalized treatment plan.",
  },
  {
    q: "Does Indu Dental Clinic provide braces treatment in Siwan?",
    a: "Yes, we offer complete orthodontic treatment in Siwan, Bihar including traditional metal braces, ceramic (tooth-coloured) braces, and clear aligners (similar to Invisalign). Our orthodontic specialists provide personalized treatment planning for both children and adults.",
  },
  {
    q: "Where is Indu Dental Clinic located in Siwan?",
    a: "Indu Dental Clinic is located near Sadar Hospital, Hospital Road, Naya Bazar, Amlori, Siwan – 841226, Bihar. We are easily reachable from all areas of Siwan including Maharajganj, Pachrukhi, Mairwa, Gopalganj, and surrounding areas. Call us at +91 99318 62472 for directions.",
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#f8f9fa]">

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <section aria-label="Hero – Best Dentist in Siwan Bihar" className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row shadow-xl items-center rounded-2xl bg-white overflow-hidden p-4 sm:p-6 lg:p-10 mb-4 mt-2 border border-gray-100">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl lg:h-[400px] lg:w-1/2 shadow-inner"
              aria-label="Indu Dental Clinic Siwan – Modern dental clinic interior Siwan Bihar"
              style={{ backgroundImage: 'url("/images/dental-clinic-siwan-interior.jpeg")' }}
              role="img"
            />
            <div className="flex flex-col gap-6 lg:min-w-[400px] lg:gap-8 justify-center lg:w-1/2 lg:pl-12">
              {/* Location Badge */}
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0056B3] bg-blue-50 w-fit px-4 py-2 rounded-full border border-blue-100">
                <MapPin size={14} className="shrink-0" />
                <span>Siwan, Bihar – Near Sadar Hospital</span>
              </div>

              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight lg:text-5xl xl:text-6xl">
                  Best Dental Clinic in Siwan –{" "}
                  <AnimatedHeading
                    sequence={["Indu Dental Clinic", 1000]}
                    wrapper="span"
                    className="text-[#0056B3]"
                    cursor={true}
                  />
                </h1>
                <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-xl">
                  Indu Dental Clinic Siwan — your trusted destination for complete dental care.
                  From routine checkups to advanced implants, braces & smile makeovers —
                  all under one roof in the heart of Siwan, Bihar.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-400" />
                  <span className="font-semibold">
                    <AnimatedCounter end={4.9} decimals={1} suffix="★" /> Rated Clinic
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#0056B3]" />
                  <span className="font-semibold">
                    <AnimatedCounter end={5000} suffix="+" /> Happy Patients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#20B2AA]" />
                  <span className="font-semibold">
                    <AnimatedCounter end={10} suffix="+" /> Years Experience
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2">
                <Link
                  href="/book"
                  className="flex items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 bg-[#0056B3] text-white text-base sm:text-lg font-bold transition-all hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Book Appointment <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
                <a
                  href="tel:+919931862472"
                  className="flex items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 border-2 border-[#0056B3]/20 bg-transparent text-[#0056B3] text-base sm:text-lg font-bold transition-all hover:bg-[#0056B3]/5 gap-2"
                >
                  <Phone size={18} /> +91 99318 62472
                </a>
                <a
                  href="https://maps.app.goo.gl/ys29FX4D8HjUWVtR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 border-2 border-[#20B2AA]/30 bg-transparent text-[#20B2AA] text-base sm:text-lg font-bold transition-all hover:bg-[#20B2AA]/5 gap-2"
                >
                  <MapPin size={18} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK INFO STRIP ────────────────────────────────────── */}
      <section
        aria-label="Clinic location and hours"
        className="w-full px-4 sm:px-6 lg:px-8 mb-10 md:mb-16"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <MapPin size={22} className="text-[#0056B3]" />,
              title: "Our Location",
              detail: "Near Sadar Hospital, Naya Bazar, Amlori, Siwan – 841226",
            },
            {
              icon: <Clock size={22} className="text-[#0056B3]" />,
              title: "Clinic Hours",
              detail: "Mon–Sat: 9:00 AM – 8:00 PM | Sunday: By Appointment",
            },
            {
              icon: <Phone size={22} className="text-[#0056B3]" />,
              title: "Call Us",
              detail: "+91 99318 62472",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.title}</p>
                <p className="text-[#333333] text-sm font-semibold leading-snug mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ALL DENTAL SERVICES ─────────────────────────────────── */}
      <section aria-label="Dental services in Siwan Bihar" className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm mb-3">
              Complete Dental Care in Siwan
            </span>
            <h2 className="text-[#333333] text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              All Dental Services Under One Roof
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl leading-relaxed">
              From routine checkups to complex smile makeovers — Indu Dental Clinic, Siwan offers
              every dental treatment you need, with expert care and the latest technology.
            </p>
            <div className="h-1 w-24 bg-[#0056B3] mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {services.map((svc, idx) => (
              <FadeIn key={svc.id} delay={idx * 0.1} direction="up">
                <div
                  className="group flex flex-col gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <Link href={svc.href}>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-inner"
                      aria-label={svc.alt}
                      role="img"
                      style={{ backgroundImage: `url('${svc.image}')` }}
                    />
                  </Link>
                  <div className="flex flex-col flex-1 gap-3">
                    <Link href={svc.href}>
                      <p className="text-[#333333] text-xl font-bold group-hover:text-[#0056B3] transition-colors">
                        {svc.label}
                      </p>
                    </Link>
                    <p className="text-gray-500 text-sm font-normal leading-relaxed">
                      {svc.desc}
                    </p>
                    <Link
                      href={`/book?service=${encodeURIComponent(svc.label)}`}
                      className="mt-auto flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 bg-[#0056B3]/8 text-[#0056B3] text-sm font-bold border border-[#0056B3]/15 hover:bg-[#0056B3] hover:text-white transition-all duration-200"
                    >
                      Book Appointment <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/service"
              className="inline-flex items-center justify-center rounded-xl h-14 px-10 border-2 border-[#0056B3] text-[#0056B3] text-lg font-bold transition-all hover:bg-[#0056B3] hover:text-white"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE INDU DENTAL SIWAN ───────────────────────── */}
      <section
        aria-label="Why choose Indu Dental Clinic in Siwan Bihar"
        className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-8"
      >
        <div className="mx-auto max-w-7xl bg-white rounded-[2rem] shadow-sm border border-gray-100 px-6 sm:px-8 lg:px-12 py-12 md:py-16">

          <div className="flex flex-col gap-5 max-w-[800px] mx-auto text-center">
            <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm">
              Why Siwan Trusts Us
            </span>
            <h2 className="text-[#333333] tracking-tight text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Why Choose Indu Dental Clinic, Siwan?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed">
              We combine clinical expertise with the latest dental technology to give every patient
              in Siwan, Bihar a superior, comfortable, and affordable dental experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-0 max-w-[1100px] mx-auto w-full">
            {[
              {
                icon: <ShieldCheck size={40} strokeWidth={1.5} />,
                color: "text-[#0056B3] bg-blue-50",
                title: "Qualified Dental Specialists",
                desc: "Our dentists in Siwan are BDS/MDS qualified with years of hands-on clinical experience in general, cosmetic & surgical dentistry.",
              },
              {
                icon: <Microscope size={40} strokeWidth={1.5} />,
                color: "text-[#20B2AA] bg-teal-50",
                title: "Advanced Technology",
                desc: "We use digital X-rays, rotary RCT equipment, and modern sterilization protocols to ensure safe, precise & effective treatment.",
              },
              {
                icon: <HeartHandshake size={40} strokeWidth={1.5} />,
                color: "text-[#0056B3] bg-blue-50",
                title: "Affordable & Transparent",
                desc: "Quality dental care shouldn't be expensive. We offer honest pricing, affordable treatment plans and EMI options for all patients in Siwan.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-1 gap-6 p-8 flex-col items-center text-center">
                <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner`}>
                  {item.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#333333] text-2xl font-bold leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto w-full pt-8 border-t border-gray-100">
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#0056B3]"><AnimatedCounter end={10} suffix="+" /></span>
              <span className="text-gray-500 text-sm font-medium">Years Serving Siwan</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#0056B3]"><AnimatedCounter end={5000} suffix="+" /></span>
              <span className="text-gray-500 text-sm font-medium">Patients Treated</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#0056B3]"><AnimatedCounter end={4.9} decimals={1} suffix="★" /></span>
              <span className="text-gray-500 text-sm font-medium">Average Rating</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#0056B3]"><AnimatedCounter end={20} suffix="+" /></span>
              <span className="text-gray-500 text-sm font-medium">Dental Treatments</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE CLINIC ────────────────────────────────────── */}
      <section
        aria-label="About Indu Dental Clinic Siwan Bihar"
        className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-4"
      >
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-white rounded-[2rem] p-6 sm:p-8 lg:p-16 shadow-sm border border-gray-100">
          <div
            className="w-full lg:w-2/5 min-h-[220px] sm:min-h-[280px] aspect-[4/3] bg-center bg-cover bg-no-repeat rounded-2xl shadow-lg"
            aria-label="Indu Dental Clinic interior Siwan Bihar"
            role="img"
            style={{ backgroundImage: 'url("/images/dental-clinic-siwan-interior.jpeg")' }}
          ></div>
          <div className="flex flex-col gap-5 lg:w-3/5">
            <span className="text-[#0056B3] font-bold tracking-widest uppercase text-sm">
              About Indu Dental Clinic, Siwan
            </span>
            <h2 className="text-[#333333] text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              Siwan&apos;s Most Trusted Dental Clinic for Over a Decade
            </h2>
            <div className="h-1 w-20 bg-[#20B2AA] rounded-full" />
            <div className="flex flex-col gap-4 text-gray-600 text-base lg:text-lg leading-relaxed">
              <p>
                Indu Dental Clinic has been serving the people of Siwan, Bihar for over{" "}
                <strong>10 years</strong>, providing comprehensive, affordable, and high-quality
                dental care to patients across Siwan, Maharajganj, Pachrukhi, Mairwa, and surrounding
                areas of Saran and Gopalganj districts.
              </p>
              <p>
                Our clinic is equipped with modern dental technology including digital X-ray, rotary
                root canal systems, ultrasonic scalers, and advanced sterilization units — ensuring
                every treatment is safe, precise, and comfortable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                "Painless Treatments",
                "Child-Friendly Environment",
                "Affordable Pricing",
                "Emergency Dental Care",
                "100% Sterilized Equipment",
                "Experienced Dental Team",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                  <CheckCircle2 size={16} className="text-[#20B2AA] shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0056B3] font-bold text-base mt-2 hover:underline"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER ──────────────────────────────────────── */}
      <section aria-label="Smile transformation results at Indu Dental Clinic Siwan" className="mb-16">
        <div className="text-center mb-10">
          <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm mb-3 block">
            Real Results
          </span>
          <h2 className="text-[#333333] text-3xl md:text-4xl font-black tracking-tight">
            Smile Transformations in Siwan
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
            See the real before & after results of our patients from Siwan, Bihar who transformed
            their smiles at Indu Dental Clinic.
          </p>
        </div>
        <BeforeAfterCarousel />
      </section>

      {/* ─── SERVICES DETAIL LIST ────────────────────────────────── */}
      <section
        aria-label="Detailed dental services list Siwan Bihar"
        className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-sm border border-gray-100 mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-[#333333] text-3xl md:text-4xl font-black tracking-tight">
            Complete List of Dental Treatments in Siwan
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Indu Dental Clinic provides every dental service you need — from basic oral hygiene to
            advanced surgical procedures — all available in Siwan, Bihar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "Dental Checkup & Consultation", desc: "Regular oral health examination and diagnosis by our expert dentists in Siwan." },
            { name: "Teeth Cleaning (Scaling)", desc: "Professional plaque and tartar removal for healthy gums and white teeth in Siwan." },
            { name: "Root Canal Treatment (RCT)", desc: "Painless RCT to save infected or damaged teeth without extraction." },
            { name: "Tooth-Coloured Fillings", desc: "Natural-looking composite fillings to restore decayed or broken teeth." },
            { name: "Teeth Whitening", desc: "Advanced teeth whitening (bleaching) for a brighter, whiter smile in Siwan." },
            { name: "Dental Implants", desc: "Permanent titanium implants to replace missing teeth naturally in Siwan, Bihar." },
            { name: "Metal & Ceramic Braces", desc: "Orthodontic braces for children and adults to straighten misaligned teeth." },
            { name: "Invisible Aligners", desc: "Clear removable aligners for discreet teeth straightening in Siwan." },
            { name: "Porcelain Veneers", desc: "Thin ceramic shells to correct chipped, stained or misshapen teeth." },
            { name: "Smile Makeover", desc: "Custom combination of cosmetic treatments for a complete smile transformation." },
            { name: "Dentures & Bridges", desc: "Removable and fixed options to replace multiple missing teeth in Siwan." },
            { name: "Gum Disease Treatment", desc: "Deep cleaning and surgical treatment for pyorrhoea and gum problems." },
            { name: "Tooth Extraction", desc: "Painless extraction of damaged, decayed, or impacted wisdom teeth." },
            { name: "Kids / Paediatric Dentistry", desc: "Gentle dental care including fluoride treatment and sealants for children." },
            { name: "Crown & Cap Placement", desc: "Metal, ceramic, or zirconia crowns to protect weakened or restored teeth." },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#0056B3]/20 hover:shadow-md transition-all bg-[#f8f9fa]"
            >
              <CheckCircle2 size={20} className="text-[#20B2AA] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#333333] text-base">{item.name}</p>
                <p className="text-gray-500 text-sm leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────────────── */}
      <section
        aria-label="Frequently asked questions about dental care in Siwan Bihar"
        className="mb-16"
      >
        {/* FAQ JSON-LD */}
        < script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }
          }
        />

        <div className="text-center mb-12" >
          <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm mb-3 block">
            FAQs
          </span>
          <h2 className="text-[#333333] text-3xl md:text-4xl font-black tracking-tight">
            Frequently Asked Questions – Dentist in Siwan
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
            Answers to common questions about dental care at Indu Dental Clinic, Siwan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-[#333333] gap-4">
                <span>{faq.q}</span>
                <span className="transition duration-300 group-open:-rotate-180 shrink-0">
                  <ChevronDown className="w-6 h-6 text-[#0056B3]" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-600 text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── LOCATION / AREA WE SERVE ────────────────────────────── */}
      <section
        aria-label="Areas served by Indu Dental Clinic Siwan Bihar"
        className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 mb-16 text-center"
      >
        <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm mb-3 block">
          Service Area
        </span>
        <h2 className="text-[#333333] text-2xl md:text-3xl font-black tracking-tight mb-4">
          Serving Patients Across Siwan District & Beyond
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Patients from all across Siwan district visit Indu Dental Clinic for trusted, expert dental
          care. We are conveniently accessible from:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Siwan City",
            "Maharajganj",
            "Pachrukhi",
            "Mairwa",
            "Darauli",
            "Barharia",
            "Raghopur",
            "Hussainganj",
            "Siswan",
            "Gopalganj",
            "Saran",
            "Chapra",
            "Basantpur",
            "Guthani",
            "Andar",
          ].map((area) => (
            <span
              key={area}
              className="bg-blue-50 text-[#0056B3] text-sm font-semibold px-4 py-2 rounded-full border border-blue-100"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────────────────────── */}
      <section
        aria-label="Book dental appointment Siwan Bihar"
        className="container mx-auto mb-20 bg-transparent relative z-20"
      >
        <div className="flex flex-col justify-center gap-6 sm:gap-8 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 text-center bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0056B3] to-blue-800 opacity-5" />
          <div className="flex flex-col gap-4 items-center relative z-10">
            <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm">
              Book Your Visit Today
            </span>
            <h2 className="text-[#333333] tracking-tight text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-[800px]">
              Get the Best Dental Care in Siwan — Book Today!
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed max-w-[650px]">
              Don&apos;t delay your dental health. Book a consultation at Indu Dental Clinic, Siwan
              today and get expert advice, painless treatment, and a smile you&apos;ll be proud of.
              Call us at <a href="tel:+919931862472" className="text-[#0056B3] font-bold hover:underline">+91 99318 62472</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4 relative z-10">
            <Link
              href="/book"
              className="flex items-center justify-center rounded-xl h-12 sm:h-16 px-6 sm:px-10 bg-[#0056B3] text-white text-base sm:text-xl font-bold shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Book Appointment Now <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6" />
            </Link>
            <a
              href="tel:+919931862472"
              className="flex items-center justify-center rounded-xl h-12 sm:h-16 px-6 sm:px-10 border-2 border-[#0056B3] text-[#0056B3] text-base sm:text-xl font-bold hover:bg-[#0056B3]/5 transition-all duration-300 gap-2"
            >
              <Phone size={20} /> +91 99318 62472
            </a>
            <a
              href="https://maps.app.goo.gl/ys29FX4D8HjUWVtR9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl h-12 sm:h-16 px-6 sm:px-10 border-2 border-[#20B2AA] text-[#20B2AA] text-base sm:text-xl font-bold hover:bg-[#20B2AA]/5 transition-all duration-300 gap-2"
            >
              <MapPin size={20} /> Get Directions
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
