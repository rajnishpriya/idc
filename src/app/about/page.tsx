import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Activity, CheckCircle2, Star, ShieldCheck, Phone, MapPin } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import { CertificationCarousel, AchievementCarousel } from "@/components/AwardCarousel";

export const metadata: Metadata = {
    title: "About Indu Dental Clinic Siwan | Best Dental Clinic in Siwan Bihar",
    description:
        "Indu Dental Clinic is the best dental clinic in Siwan, Bihar. With 10+ years of experience, our qualified dentists offer the best dental services in Siwan — General Dentistry, Cosmetic Dentistry, Braces, Implants, Root Canal & more. Visit us near Sadar Hospital, Siwan.",
    keywords: [
        "best dental clinic in Siwan",
        "best dentist in Siwan Bihar",
        "Indu Dental Clinic Siwan",
        "dental services in Siwan",
        "best dental services Siwan Bihar",
        "dental clinic near me Siwan",
        "top dentist Siwan",
        "dental treatment Siwan Bihar",
    ],
    openGraph: {
        title: "About Indu Dental Clinic | Best Dental Clinic in Siwan Bihar",
        description:
            "Indu Dental Clinic Siwan — trusted by 5000+ patients. Expert dental care with modern technology. Book your appointment today.",
        type: "website",
    },
};

const services = [
    "General Dentistry",
    "Cosmetic Dentistry & Smile Makeovers",
    "Braces & Orthodontics",
    "Dental Implants",
    "Painless Root Canal Treatment",
    "Tooth Extraction",
    "Gum Disease Treatment",
    "Children's (Kids) Dentistry",
];

const areas = [
    "Siwan", "Maharajganj", "Pachrukhi", "Mairwa",
    "Gopalganj", "Saran", "Chapra", "Basantpur",
    "Guthani", "Andar", "Hussainganj", "Siswan",
];

export default function About() {
    return (
        <div className="w-full overflow-x-hidden bg-[#f8f9fa]">

            {/* ─── HERO BANNER ─────────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pt-6 pb-4">
                <div className="mx-auto max-w-7xl">
                    <div
                        className="relative flex flex-col items-center justify-center w-full bg-center bg-no-repeat bg-cover rounded-2xl h-[220px] sm:h-[300px] lg:h-[420px] shadow-lg overflow-hidden"
                        aria-label="Indu Dental Clinic Siwan — Best dental clinic in Siwan Bihar"
                        style={{ backgroundImage: 'url("/images/clinic-exterior.jpg")' }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-3">
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/30">
                                Siwan&apos;s Most Trusted Dental Clinic
                            </span>
                            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                About <AnimatedHeading sequence={["Indu Dental Clinic", 1000]} wrapper="span" className="text-[#20B2AA]" cursor={true} />
                            </h1>
                            <p className="text-white/80 text-sm sm:text-base max-w-xl">
                                Best Dental Services in Siwan, Bihar — Trusted by 5000+ Patients Since 2013
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── INTRO / WHY BEST ────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">
                <div className="mx-auto max-w-7xl bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        {/* Doctor image */}
                        <FadeIn direction="right" className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative max-w-[320px] sm:max-w-sm lg:max-w-md w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#0056B3]/5 group">
                                <div
                                    className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    aria-label="Dentist in Siwan - Dr. Indu"
                                    style={{ backgroundImage: 'url("/images/dentist-siwan.jpg")' }}
                                />
                            </div>
                        </FadeIn>

                        {/* Story Content */}
                        <FadeIn direction="up" className="w-full lg:w-1/2 flex flex-col justify-center">
                            <span className="text-[#0056B3] font-bold tracking-widest uppercase text-sm mb-3">Our Story</span>
                            <span className="text-[#0056B3] font-bold tracking-widest uppercase text-sm">
                                About Indu Dental Clinic, Siwan
                            </span>
                            <h2 className="text-[#333333] text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
                                Why Indu Dental Clinic is the{" "}
                                <span className="text-[#0056B3]">Best Dental Clinic in Siwan</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#20B2AA] rounded-full"></div>

                            <div className="flex flex-col gap-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                                <p>
                                    <strong>Indu Dental Clinic Siwan</strong> has been providing the{" "}
                                    <strong>best dental services in Siwan, Bihar</strong> for over{" "}
                                    <strong>10 years</strong>. Located near Sadar Hospital, Hospital
                                    Road, Naya Bazar, Siwan, our clinic combines state-of-the-art
                                    technology with deep patient care — making us the{" "}
                                    <strong>most trusted dental clinic in Siwan</strong>.
                                </p>
                                <p>
                                    Our qualified BDS/MDS dentists specialise in a full range of
                                    treatments — from routine checkups and <strong>teeth cleaning in Siwan</strong>{" "}
                                    to advanced <strong>dental implants</strong>,{" "}
                                    <strong>braces (Invisalign &amp; metal)</strong>, painless{" "}
                                    <strong>root canal treatment</strong>, and complete{" "}
                                    <strong>smile makeover in Siwan</strong>.
                                </p>
                                <p className="font-semibold text-[#333333] italic border-l-4 border-[#20B2AA] pl-4">
                                    &ldquo;Your comfort is our priority, and your radiant smile is our greatest reward.&rdquo;
                                </p>
                            </div>

                            {/* Quick stats */}
                            <div className="grid grid-cols-3 gap-4 mt-2 pt-4 border-t border-gray-100">
                                <div className="text-center">
                                    <p className="text-2xl sm:text-3xl font-black text-[#0056B3]"><AnimatedCounter end={10} suffix="+" /></p>
                                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">Years in Siwan</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl sm:text-3xl font-black text-[#0056B3]"><AnimatedCounter end={5000} suffix="+" /></p>
                                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">Happy Patients</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl sm:text-3xl font-black text-[#0056B3]"><AnimatedCounter end={4.9} decimals={1} suffix="★" /></p>
                                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">Google Rating</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── BEST DENTAL SERVICES IN SIWAN ──────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm">
                            Complete Dental Care
                        </span>
                        <h2 className="text-[#333333] text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mt-2">
                            Best Dental Services in Siwan, Bihar
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
                            Indu Dental Clinic Siwan offers all dental services under one roof —
                            affordable, painless, and performed by experienced dental specialists.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((svc, i) => (
                            <FadeIn key={svc} delay={i * 0.05} direction="up">
                                <div
                                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0056B3]/20 transition-all duration-200"
                                >
                                    <CheckCircle2 size={20} className="text-[#20B2AA] shrink-0" />
                                    <span className="text-[#333333] font-semibold text-sm sm:text-base">{svc}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/service"
                            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-[#0056B3] text-white font-bold text-sm sm:text-base hover:bg-blue-700 shadow-lg transition-all hover:-translate-y-0.5"
                        >
                            View All Services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── CERTIFICATIONS ──────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <CertificationCarousel />
                </div>
            </section>

            {/* ─── AWARDS & ACHIEVEMENTS ───────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
                <div className="mx-auto max-w-7xl">
                    <AchievementCarousel />
                </div>
            </section>

            {/* ─── CORE VALUES ─────────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 mb-4">
                <div className="mx-auto max-w-7xl bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-16">
                    <div className="flex flex-col items-center text-center mb-10 md:mb-14">
                        <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            What Makes Us the{" "}
                            <span className="text-[#0056B3]">Best Dental Clinic in Siwan</span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg mt-3 max-w-2xl">
                            Our three core pillars that set Indu Dental Clinic apart from every other
                            dental clinic in Siwan, Bihar.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                icon: <Sparkles size={36} strokeWidth={1.5} />,
                                title: "Hygiene First",
                                desc: "We follow strict global sterilization protocols — every instrument autoclaved, every surface sanitized. Your safety is non-negotiable at Indu Dental Clinic Siwan.",
                            },
                            {
                                icon: <Heart size={36} strokeWidth={1.5} />,
                                title: "Anxiety-Free Care",
                                desc: "Fear of dentists is real. Our gentle team uses modern anaesthetic techniques so you feel zero pain — making us the most comfortable dental clinic in Siwan.",
                            },
                            {
                                icon: <Activity size={36} strokeWidth={1.5} />,
                                title: "Advanced Technology",
                                desc: "Digital X-rays, rotary RCT, ultrasonic scalers — we use the same equipment as premium city clinics, right here in Siwan's best dental clinic.",
                            },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex flex-col items-center text-center gap-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-teal-50 text-[#20B2AA] flex items-center justify-center shadow-sm">
                                    {icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-[#333333]">{title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-[280px]">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── AREAS SERVED ────────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="mx-auto max-w-7xl bg-gradient-to-br from-[#0056B3] to-blue-700 rounded-[2rem] p-6 sm:p-8 lg:p-12 text-white">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
                        <div className="flex-1">
                            <span className="text-blue-200 font-bold uppercase tracking-widest text-sm">
                                Serving All of Siwan &amp; Nearby Districts
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mt-2 mb-4">
                                Dental Clinic Near You in Siwan Region
                            </h2>
                            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl">
                                Indu Dental Clinic is conveniently located near Sadar Hospital, Siwan
                                — easily accessible from all areas of Siwan district and the
                                surrounding Saran and Gopalganj districts. We are your nearest and{" "}
                                <strong>best dental clinic</strong> if you live in any of these areas:
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 lg:max-w-md">
                            {areas.map((area) => (
                                <span
                                    key={area}
                                    className="bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <a
                            href="https://maps.app.goo.gl/ys29FX4D8HjUWVtR9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white text-[#0056B3] font-bold text-sm hover:bg-blue-50 transition-all shadow-lg"
                        >
                            <MapPin size={16} /> Get Directions
                        </a>
                        <a
                            href="tel:+919931862472"
                            className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white/15 text-white font-bold text-sm border border-white/30 hover:bg-white/25 transition-all"
                        >
                            <Phone size={16} /> Call Now: +91 99318 62472
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── CTA SECTION ─────────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 mb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-center gap-6 py-12 sm:py-16 px-6 sm:px-8 md:px-12 text-center bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-gray-100 opacity-50"></div>
                        <div className="flex flex-col gap-3 items-center relative z-10">
                            <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm">
                                Book Appointment — Indu Dental Clinic Siwan
                            </span>
                            <h2 className="text-[#333333] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-[800px]">
                                Get the Best Dental Care in Siwan Today
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed max-w-[600px]">
                                Don&apos;t delay your dental health. Visit Indu Dental Clinic — the{" "}
                                <strong>best dental clinic in Siwan, Bihar</strong> — and get expert,
                                affordable, painless treatment. Call{" "}
                                <a href="tel:+919931862472" className="text-[#0056B3] font-bold hover:underline">
                                    +91 99318 62472
                                </a>{" "}
                                or book online below.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2 relative z-10">
                            <Link
                                href="/book"
                                className="flex items-center justify-center rounded-xl h-12 sm:h-14 px-8 sm:px-10 bg-[#0056B3] text-white text-base sm:text-lg font-bold shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
                            >
                                Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <a
                                href="tel:+919931862472"
                                className="flex items-center justify-center gap-2 rounded-xl h-12 sm:h-14 px-8 sm:px-10 border-2 border-[#0056B3] text-[#0056B3] text-base sm:text-lg font-bold hover:bg-[#0056B3]/5 transition-all duration-300"
                            >
                                <Phone size={18} /> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
