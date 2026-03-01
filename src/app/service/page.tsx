import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";

export const metadata: Metadata = {
    title: "Dental Services | Indu Dental Clinic Siwan Bihar",
    description:
        "Comprehensive dental services in Siwan, Bihar. Our treatments include Root Canal, Implants, Braces, Teeth Whitening & Extractions.",
    openGraph: {
        title: "Dental Services | Indu Dental Clinic",
        description:
            "From routine cleanings to advanced implants, see all the dental services Indu Dental Clinic offers in Siwan.",
        type: "website",
        images: [
            {
                url: "/images/General Dentistry.jpg",
                width: 1200,
                height: 630,
                alt: "Dental Services at Indu Dental Clinic Siwan",
            },
        ],
    },
};

export default function Services() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f5f7f8] overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <div className="flex flex-col flex-1">

                    {/* Text-Centric Hero Section */}
                    <section className="bg-white py-14 sm:py-20 md:py-28 lg:py-32 border-b border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0056B3]/5 to-transparent"></div>
                        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                            <span className="mb-6 inline-block rounded-full bg-[#0056B3]/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#0056B3]">
                                Our Expertise
                            </span>
                            <h1 className="text-3xl font-black tracking-tight text-[#333333] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] leading-tight mb-6 sm:mb-8">
                                Comprehensive <br /><AnimatedHeading sequence={["Dental Services", 1000]} wrapper="span" className="text-[#0056B3]" cursor={true} />
                            </h1>
                            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
                                Experience world-class dental care with our team of experts in a modern, clinical environment designed for your comfort and long-term health.
                            </p>
                        </div>
                    </section>

                    {/* Services Alternating Layout */}
                    <section className="space-y-16 sm:space-y-24 lg:space-y-32 py-12 sm:py-20 lg:py-32 bg-[#f8f9fa]">

                        {/* Service 1: General Dentistry */}
                        <div id="general" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/General Dentistry.jpg")' }} aria-label="General dentistry checkup"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Foundation</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">General Dentistry</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Maintaining optimal oral health is our primary goal. Our general dentistry services focus on prevention, early detection, and restoration to keep your smile healthy for a lifetime.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Routine Checkups", "Teeth Cleaning", "Cavity Fillings", "Emergency Care"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("General Dentistry")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 2: Cosmetic Dentistry (Reversed) */}
                        <div id="cosmetic" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row-reverse lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/Cosmetic Dentistry.jpg")' }} aria-label="Cosmetic dentistry smile makeover"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Aesthetics</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Cosmetic Dentistry</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Transform your smile with our advanced aesthetic treatments. We combine artistry with medical precision to give you the confident smile you've always dreamed of.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Composite Bonding"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Cosmetic Dentistry")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 3: Orthodontics */}
                        <div id="orthodontics" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/Braces & Orthodontics.jpg")' }} aria-label="Braces and orthodontic treatment"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Alignment</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Braces & Orthodontics</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Professional teeth straightening for all ages. We use modern techniques and comfortable appliances to correct alignment and bite issues effectively.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Invisalign®", "Ceramic Braces", "Traditional Braces", "Adult Ortho"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Braces & Orthodontics")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 4: Dental Implants (Reversed) */}
                        <div id="implants" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row-reverse lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/Dental Implants.jpg")' }} aria-label="Dental implant procedure"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Restoration</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Dental Implants</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Permanent, natural-looking solutions for missing teeth. Our implant specialists use state-of-the-art technology to restore your smile's function and aesthetics.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Single Implants", "Implant Bridges", "All-on-4® System", "Bone Grafting"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Dental Implants")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 5: Root Canal Treatment */}
                        <div id="rootcanal" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/root-canal-treatment-siwan.jpeg")' }} aria-label="Root canal treatment procedure"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Endodontics</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Root Canal Treatment</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Painless RCT to save infected or damaged teeth. We use modern rotary endodontic systems and effective anaesthesia so you feel no discomfort during the procedure.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Painless RCT", "Rotary Endodontics", "Single-Visit RCT", "Post & Core Build-up"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Root Canal Treatment")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 6: Tooth Extraction (Reversed) */}
                        <div id="extraction" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row-reverse lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/Tooth Extraction.jpg")' }} aria-label="Safe tooth extraction procedure"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Oral Surgery</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Tooth Extraction</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Safe and painless removal of damaged, decayed, or impacted teeth. Our experienced team ensures a comfortable experience with minimal recovery time.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Simple Extractions", "Wisdom Tooth Removal", "Surgical Extractions", "Post-Op Care"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Tooth Extraction")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 7: Gum Treatment */}
                        <div id="gums" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/Gum Treatment.jpg")' }} aria-label="Gum disease periodontal treatment"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Periodontics</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Gum Treatment</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Expert diagnosis and treatment of gum disease (pyorrhoea). Healthy gums are the foundation of a healthy smile — we provide comprehensive periodontal care for lasting results.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Deep Cleaning (Scaling)", "Flap Surgery", "Gum Grafting", "Pocket Reduction"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Gum Treatment")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Service 8: Kids Dentistry (Reversed) */}
                        <div id="kids" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 scroll-mt-32">
                            <FadeIn direction="up">
                                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row-reverse lg:gap-24">
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/Kids Dentistry.jpg")' }} aria-label="Kids paediatric dentistry friendly care"></div>
                                            <div className="absolute inset-0 bg-[#0056B3]/10 mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 mb-4"><span className="w-8 h-1 bg-[#20B2AA] rounded-full"></span><span className="text-[#20B2AA] font-bold uppercase tracking-wider text-sm">Paediatric</span></div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Kids Dentistry</h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10">Gentle, friendly dental care designed specially for children. We create a comfortable, fun environment so your child develops a positive relationship with dental visits from an early age.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                            {["Fluoride Treatment", "Dental Sealants", "Milk Tooth Filling", "Habit Correction"].map(item => (
                                                <li key={item} className="flex items-start gap-4"><CheckCircle2 className="text-[#20B2AA] fill-[#20B2AA]/10 w-6 h-6 shrink-0 mt-0.5" /><span className="font-semibold text-gray-800 text-base sm:text-lg">{item}</span></li>
                                            ))}
                                        </ul>
                                        <div className="mt-8">
                                            <Link
                                                href={`/book?service=${encodeURIComponent("Kids Dentistry")}`}
                                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#0056B3] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0056B3]/20 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                            >
                                                Book Appointment <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                    </section>

                    {/* FAQ Section */}
                    <section className="bg-white py-32 border-t border-gray-100">
                        <div className="mx-auto max-w-4xl px-6">
                            <div className="text-center mb-16">
                                <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm mb-3 block">Information</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#333333] mb-4 sm:mb-6">Common Questions</h2>
                                <p className="text-xl text-gray-600">Everything you need to know about our dental care process.</p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <details className="group rounded-2xl border border-gray-200 bg-[#f8f9fa] p-8 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-[#333333]">
                                        How often should I visit the dentist?
                                        <span className="transition duration-300 group-open:-rotate-180">
                                            <ChevronDown className="w-6 h-6 text-[#0056B3]" />
                                        </span>
                                    </summary>
                                    <p className="mt-6 leading-relaxed text-gray-600 text-lg">
                                        We generally recommend a professional cleaning and checkup every six months. However, patients with specific dental conditions may benefit from more frequent visits.
                                    </p>
                                </details>

                                <details className="group rounded-2xl border border-gray-200 bg-[#f8f9fa] p-8 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-[#333333]">
                                        Does cosmetic dentistry hurt?
                                        <span className="transition duration-300 group-open:-rotate-180">
                                            <ChevronDown className="w-6 h-6 text-[#0056B3]" />
                                        </span>
                                    </summary>
                                    <p className="mt-6 leading-relaxed text-gray-600 text-lg">
                                        Most cosmetic procedures are minimally invasive and involve little to no discomfort. We use local anesthesia when necessary to ensure your absolute comfort.
                                    </p>
                                </details>

                                <details className="group rounded-2xl border border-gray-200 bg-[#f8f9fa] p-8 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-[#333333]">
                                        Are dental implants permanent?
                                        <span className="transition duration-300 group-open:-rotate-180">
                                            <ChevronDown className="w-6 h-6 text-[#0056B3]" />
                                        </span>
                                    </summary>
                                    <p className="mt-6 leading-relaxed text-gray-600 text-lg">
                                        Yes, dental implants are designed to be a permanent solution for missing teeth. With proper care and oral hygiene, the titanium post can last a lifetime.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </section>

                    {/* Final Call to Action */}
                    <section className="py-24 bg-white relative">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="relative overflow-hidden rounded-[3rem] bg-[#0056B3] px-8 py-24 text-center shadow-2xl md:px-16">
                                <div className="relative z-10 mx-auto max-w-3xl">
                                    <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
                                        Ready for your best smile yet?
                                    </h2>
                                    <p className="mt-8 text-xl leading-relaxed text-white/90">
                                        Join thousands of happy patients who trust us with their oral health. Book your consultation today and experience the difference of premium dental care.
                                    </p>
                                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                                        <Link href="/book" className="w-full sm:w-auto flex items-center justify-center rounded-xl bg-white px-10 py-5 text-xl font-bold text-[#0056B3] shadow-xl transition-all hover:bg-gray-50 hover:scale-105">
                                            Schedule Consultation <ArrowRight className="ml-3 w-6 h-6" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Abstract background decorations */}
                                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl mix-blend-overlay pointer-events-none"></div>
                                <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl mix-blend-overlay pointer-events-none"></div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
