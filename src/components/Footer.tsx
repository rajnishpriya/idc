import Link from "next/link";
import { Activity, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#122017] pt-20 pb-10 border-t border-[#0056B3]/10 text-white relative overflow-hidden">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B2AA]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:pr-8">
                        <Link href="/" className="flex items-center group w-max">
                            <img src="/images/logodark.webp" alt="Indu Dental Logo Dark" className="object-contain" style={{ height: '48px', width: 'auto', maxWidth: '100%' }} />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Providing premium, pain-free dental care with state-of-the-art technology. Your smile is our signature.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0056B3] hover:text-white transition-all text-gray-400">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0056B3] hover:text-white transition-all text-gray-400">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0056B3] hover:text-white transition-all text-gray-400">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold tracking-wide uppercase text-white">Quick Links</h3>
                        <div className="w-10 h-1 bg-[#20B2AA] rounded-full mt-[-10px]"></div>
                        <nav className="flex flex-col gap-4 text-gray-400">
                            <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all w-max inline-flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[#20B2AA] before:rounded-full before:mr-2">About Us</Link>
                            <Link href="/service" className="hover:text-white hover:translate-x-1 transition-all w-max inline-flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[#20B2AA] before:rounded-full before:mr-2">Our Services</Link>
                            <Link href="/gallery" className="hover:text-white hover:translate-x-1 transition-all w-max inline-flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[#20B2AA] before:rounded-full before:mr-2">Clinic Gallery</Link>
                            <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all w-max inline-flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[#20B2AA] before:rounded-full before:mr-2">Contact Us</Link>
                        </nav>
                    </div>

                    {/* Services Setup */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold tracking-wide uppercase text-white">Services</h3>
                        <div className="w-10 h-1 bg-[#20B2AA] rounded-full mt-[-10px]"></div>
                        <nav className="flex flex-col gap-4 text-gray-400">
                            <Link href="/service#general" className="hover:text-white hover:translate-x-1 transition-all w-max">General Dentistry</Link>
                            <Link href="/service#cosmetic" className="hover:text-white hover:translate-x-1 transition-all w-max">Cosmetic Dentistry</Link>
                            <Link href="/service#orthodontics" className="hover:text-white hover:translate-x-1 transition-all w-max">Orthodontics</Link>
                            <Link href="/service#implants" className="hover:text-white hover:translate-x-1 transition-all w-max">Dental Implants</Link>
                        </nav>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold tracking-wide uppercase text-white">Contact Info</h3>
                        <div className="w-10 h-1 bg-[#20B2AA] rounded-full mt-[-10px]"></div>
                        <div className="flex flex-col gap-5 text-gray-400 text-sm">
                            <div className="flex items-start gap-4">
                                <MapPin size={20} className="text-[#20B2AA] shrink-0 mt-0.5" />
                                <span>Near Sadar Hospital, Hospital Road<br />Naya Bazar, Amlori, Siwan - 841226, Bihar</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={20} className="text-[#20B2AA] shrink-0" />
                                <span>+91 99318 62472</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={20} className="text-[#20B2AA] shrink-0" />
                                <span>dentalclinicinsiwan@gmail.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs sm:text-sm">
                    <p>© {new Date().getFullYear()} Indu Dental Clinic. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
