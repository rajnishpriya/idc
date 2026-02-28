"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/service", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl shadow-sm">
                {/* ── DESKTOP header ─────────────────────────────────── */}
                <div className="hidden lg:flex mx-auto max-w-7xl items-center justify-between px-6 lg:px-12 py-4">
                    <Link href="/" className="flex items-center shrink-0">
                        <img src="/images/logo.webp" alt="Indu Dental Clinic Logo" className="object-contain" style={{ height: '50px', width: 'auto', maxWidth: '100%' }} />
                    </Link>
                    <nav className="flex items-center gap-8 xl:gap-10">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href}
                                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${pathname === link.href ? "text-[#0056B3]" : "text-gray-500 hover:text-[#0056B3]"
                                    }`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Link href="/book" className="rounded-xl bg-[#0056B3] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0056B3]/25 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200">
                        Book Appointment
                    </Link>
                </div>

                {/* ── MOBILE header (3-col grid so logo is truly centred) ── */}
                <div className="grid lg:hidden grid-cols-3 items-center px-4 sm:px-6 py-3">
                    {/* Left: invisible spacer or call chip on sm+ */}
                    <div className="flex items-center">
                        <a href="tel:+919931862472"
                            className="hidden sm:flex items-center gap-1.5 text-[#0056B3] text-sm font-bold px-3 py-2 rounded-lg border border-[#0056B3]/20 hover:bg-[#0056B3]/5 transition-all">
                            📞 Call
                        </a>
                    </div>

                    {/* Centre: Logo */}
                    <Link href="/" className="flex items-center justify-center">
                        <img src="/images/logo.webp" alt="Indu Dental Clinic Logo" className="object-contain" style={{ height: '45px', width: 'auto', maxWidth: '100%' }} />
                    </Link>

                    {/* Right: Hamburger */}
                    <div className="flex items-center justify-end">
                        <button onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <img
                        src="/images/logo.webp"
                        alt="Indu Dental Clinic"
                        className="object-contain"
                        style={{ height: '40px', width: 'auto', maxWidth: '100%' }}
                    />
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Drawer Nav Links */}
                <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold transition-all duration-200 ${pathname === link.href
                                ? "bg-[#0056B3]/10 text-[#0056B3]"
                                : "text-gray-700 hover:bg-gray-50 hover:text-[#0056B3]"
                                }`}
                        >
                            {pathname === link.href && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056B3] shrink-0" />
                            )}
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Drawer Footer CTA */}
                <div className="px-4 py-6 border-t border-gray-100 flex flex-col gap-3">
                    <Link
                        href="/book"
                        className="flex items-center justify-center gap-2 rounded-xl h-13 py-4 bg-[#0056B3] text-white text-base font-bold shadow-lg hover:bg-blue-700 transition-all"
                    >
                        📅 Book Appointment
                    </Link>
                    <a
                        href="tel:+919931862472"
                        className="flex items-center justify-center gap-2 rounded-xl py-4 border-2 border-gray-200 text-gray-700 text-base font-bold hover:border-[#0056B3] hover:text-[#0056B3] transition-all"
                    >
                        📞 +91 99318 62472
                    </a>
                </div>
            </div>
        </>
    );
}
