"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
    User, Calendar, Stethoscope, MessageSquare, ArrowRight,
    CheckCircle2, ChevronDown, Phone, AlertCircle, MapPin,
    Clock, Star, Shield,
} from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import FadeIn from "@/components/FadeIn";

const SERVICES = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Braces & Orthodontics",
    "Dental Implants",
    "Root Canal Treatment",
    "Tooth Extraction",
    "Gum Treatment",
    "Kids Dentistry",
];

const WHATSAPP_NUMBER = "919931862472";

const TRUST_POINTS = [
    { icon: <Shield size={16} />, text: "No Hidden Charges" },
    { icon: <CheckCircle2 size={16} />, text: "Free First Consultation" },
    { icon: <Clock size={16} />, text: "Same-Day Appointments" },
    { icon: <Star size={16} />, text: "4.9★ Google Rated" },
];

function FieldError({ msg }: { msg?: string }) {
    if (!msg) return null;
    return (
        <p className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
            <AlertCircle size={13} /> {msg}
        </p>
    );
}

function BookingForm() {
    const searchParams = useSearchParams();
    const preService = searchParams.get("service") || "";

    const [form, setForm] = useState({ name: "", age: "", service: "", date: "", notes: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (preService && SERVICES.includes(preService)) {
            setForm((prev) => ({ ...prev, service: preService }));
        }
    }, [preService]);

    const today = new Date().toISOString().split("T")[0];

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Please enter your full name.";
        if (!form.age.trim() || isNaN(Number(form.age)) || Number(form.age) < 1 || Number(form.age) > 120)
            e.age = "Please enter a valid age (1–120).";
        if (!form.service) e.service = "Please select a service.";
        if (!form.date) e.date = "Please select your preferred date.";
        return e;
    };

    const buildWhatsAppUrl = (f: typeof form) => {
        const formattedDate = new Date(f.date).toLocaleDateString("en-IN", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
        });
        const message =
            `Hello Indu Dental Clinic! 👋\n\n` +
            `I would like to book an appointment. Here are my details:\n\n` +
            `👤 *Name:* ${f.name}\n` +
            `🎂 *Age:* ${f.age} years\n` +
            `🦷 *Service Required:* ${f.service}\n` +
            `📅 *Preferred Date:* ${formattedDate}\n` +
            (f.notes.trim() ? `📝 *Additional Notes:* ${f.notes}\n` : "") +
            `\nPlease confirm my appointment. Thank you! 🙏`;
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
        setErrors({});
        setSubmitted(true);
        setTimeout(() => { window.open(buildWhatsAppUrl(form), "_blank"); }, 600);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center gap-6 py-12 px-4 text-center animate-fade-in">
                <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-[#25D366]" />
                </div>
                <h2 className="text-3xl font-black text-[#333333]">Opening WhatsApp…</h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                    Your appointment details are pre-filled. Just hit <strong>Send</strong> to confirm!
                </p>
                <p className="text-gray-400 text-sm">
                    Didn&apos;t open?{" "}
                    <button
                        className="text-[#0056B3] font-bold underline"
                        onClick={() => window.open(buildWhatsAppUrl(form), "_blank")}
                    >
                        Click here to retry
                    </button>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-2">
                    <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", age: "", service: "", date: "", notes: "" }); }}
                        className="flex-1 rounded-xl border-2 border-[#0056B3] text-[#0056B3] font-bold py-3.5 hover:bg-[#0056B3]/5 transition-all"
                    >
                        Book Another
                    </button>
                    <Link href="/" className="flex-1 rounded-xl bg-[#0056B3] text-white font-bold py-3.5 text-center hover:bg-blue-700 transition-all">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const inputCls = (field: string) =>
        `w-full rounded-xl border bg-white/70 backdrop-blur-sm px-4 py-3.5 text-[#333333] text-base font-medium placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0056B3]/30 focus:border-[#0056B3] ${errors[field] ? "border-red-400 focus:ring-red-200" : "border-gray-200"}`;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

            {/* Name + Age row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <User size={13} className="text-[#0056B3]" /> Full Name
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="e.g. Rahul Kumar" className={inputCls("name")} />
                    <FieldError msg={errors.name} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <User size={13} className="text-[#20B2AA]" /> Age
                    </label>
                    <input type="number" name="age" value={form.age} onChange={handleChange}
                        placeholder="e.g. 28" min={1} max={120} className={inputCls("age")} />
                    <FieldError msg={errors.age} />
                </div>
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <Stethoscope size={13} className="text-[#0056B3]" /> Service Needed
                </label>
                <div className="relative">
                    <select name="service" value={form.service} onChange={handleChange}
                        className={`${inputCls("service")} appearance-none pr-10 ${!form.service ? "text-gray-400" : "text-[#333333]"}`}>
                        <option value="" disabled>Select a dental service…</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <FieldError msg={errors.service} />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <Calendar size={13} className="text-[#20B2AA]" /> Preferred Date
                </label>
                <input type="date" name="date" value={form.date} onChange={handleChange}
                    min={today} className={inputCls("date")} />
                <FieldError msg={errors.date} />
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <MessageSquare size={13} className="text-[#0056B3]" /> Additional Notes
                    <span className="text-gray-400 font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                    placeholder="E.g. tooth pain for 3 days, sensitive to cold…"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm px-4 py-3.5 text-[#333333] text-base placeholder:text-gray-400 outline-none resize-none focus:ring-2 focus:ring-[#0056B3]/30 focus:border-[#0056B3] transition-all" />
            </div>

            {/* WhatsApp notice */}
            <div className="flex items-start gap-3 bg-[#25D366]/8 border border-[#25D366]/25 rounded-xl p-4">
                <Phone size={18} className="text-[#25D366] shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm leading-relaxed">
                    Clicking <strong>Book Appointment</strong> will open a pre-filled WhatsApp message to{" "}
                    <strong>+91 99318 62472</strong>. Hit <em>Send</em> to confirm!
                </p>
            </div>

            {/* Submit */}
            <button type="submit"
                className="w-full flex items-center justify-center gap-3 rounded-xl h-14 bg-[#25D366] text-white text-lg font-bold shadow-lg shadow-[#25D366]/25 hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.386.666 4.613 1.82 6.51L4 29l7.695-1.787A12.94 12.94 0 0 0 16.002 28C22.627 28 28 22.627 28 16S22.627 3 16.002 3Zm0 23.545a10.9 10.9 0 0 1-5.586-1.53l-.4-.238-4.567 1.06 1.1-4.45-.262-.42A10.926 10.926 0 0 1 4.91 16c0-6.113 4.979-11.09 11.092-11.09C22.11 4.91 27.09 9.887 27.09 16S22.113 26.545 16.002 26.545Zm6.077-8.31c-.332-.168-1.963-.97-2.268-1.08-.305-.112-.527-.168-.749.166-.222.334-.862 1.08-1.057 1.302-.193.222-.387.25-.718.084-.332-.168-1.4-.516-2.67-1.645-.986-.878-1.653-1.963-1.846-2.295-.194-.334-.02-.515.145-.681.15-.15.333-.39.499-.584.166-.196.222-.334.333-.56.11-.222.055-.42-.028-.585-.083-.167-.748-1.803-1.025-2.47-.27-.648-.545-.56-.748-.57-.195-.01-.416-.012-.638-.012s-.583.083-.888.417c-.306.332-1.166 1.136-1.166 2.769 0 1.633 1.194 3.212 1.36 3.434.168.222 2.35 3.584 5.694 5.027.796.344 1.418.55 1.902.703.8.253 1.53.218 2.105.132.642-.096 1.964-.803 2.241-1.578.277-.777.277-1.444.194-1.58-.083-.14-.305-.224-.637-.39Z" />
                </svg>
                Book Appointment via WhatsApp <ArrowRight size={20} />
            </button>

            <p className="text-center text-gray-400 text-sm">
                Or call us directly:{" "}
                <a href="tel:+919931862472" className="text-[#0056B3] font-bold hover:underline">+91 99318 62472</a>
            </p>
        </form>
    );
}

export default function BookAppointment() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white">

            {/* ─── SPLIT LAYOUT WITH GAP ─────────────────────────────── */}
            <div className="flex flex-col lg:flex-row min-h-screen lg:p-6 lg:pl-8 xl:p-10 xl:pl-12 2xl:p-12 2xl:pl-16 gap-8 lg:gap-12 xl:gap-16 items-stretch">

                {/* ── LEFT PANEL — Brand info ───────────────────────────── */}
                <FadeIn direction="right" className="relative w-full lg:w-[45%] xl:w-[40%] bg-gradient-to-br from-[#003d82] via-[#0056B3] to-[#0a7cc7] flex flex-col justify-between p-8 sm:p-12 lg:p-12 xl:p-16 lg:rounded-[2.5rem] shadow-2xl overflow-hidden rounded-none min-h-screen lg:min-h-[calc(100vh-3rem)]">

                    {/* Background decorations */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#20B2AA]/15 blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 right-0 w-48 h-48 rounded-full bg-white/3 blur-2xl pointer-events-none" />

                    {/* Logo */}
                    <div className="relative z-10">
                        <Link href="/" className="inline-block">
                            <img src="/images/logodark.webp" alt="Indu Dental Clinic" className="object-contain" style={{ height: '70px', width: 'auto', maxWidth: '100%' }} />
                        </Link>
                    </div>

                    {/* Main copy */}
                    <div className="relative z-10 flex flex-col gap-6 my-10 lg:my-0">
                        <div>
                            <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/30">
                                Book Your Visit
                            </span>
                            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                                Schedule Your <br />
                                <AnimatedHeading
                                    sequence={[
                                        "Dental Appointment", 3000,
                                        "Smile Makeover", 3000,
                                        "Free Consultation", 3000,
                                    ]}
                                    wrapper="span"
                                    className="text-[#20B2AA]"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                                <br /> in Siwan
                            </h1>
                            <p className="mt-4 text-blue-100 text-base sm:text-lg leading-relaxed max-w-md">
                                Fill the form and your appointment details are sent directly to us on
                                WhatsApp — confirmed in minutes, no waiting.
                            </p>
                        </div>

                        {/* Trust points */}
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {TRUST_POINTS.map(({ icon, text }) => (
                                <div key={text} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5 border border-white/15">
                                    <span className="text-[#20B2AA]">{icon}</span>
                                    <span className="text-white text-sm font-semibold">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Services covered */}
                        <div className="mt-2">
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Services We Cover</p>
                            <div className="flex flex-wrap gap-2">
                                {SERVICES.map((s) => (
                                    <span key={s} className="bg-white/10 text-white/90 text-xs font-medium px-3 py-1 rounded-full border border-white/15">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Clinic info at bottom */}
                    <div className="relative z-10 flex flex-col gap-3 pt-8 border-t border-white/15">
                        <a href="https://maps.app.goo.gl/ys29FX4D8HjUWVtR9" target="_blank" rel="noopener noreferrer"
                            className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors group">
                            <MapPin size={16} className="shrink-0 mt-0.5 text-[#20B2AA]" />
                            <span className="text-sm leading-relaxed">Near Sadar Hospital, Hospital Road, Naya Bazar, Siwan - 841226, Bihar</span>
                        </a>
                        <a href="tel:+919931862472" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                            <Phone size={16} className="text-[#20B2AA]" />
                            <span className="text-sm font-semibold">+91 99318 62472</span>
                        </a>
                        <div className="flex items-center gap-3 text-blue-100">
                            <Clock size={16} className="text-[#20B2AA]" />
                            <span className="text-sm">Mon–Sun: 10:00 AM – 8:00 PM</span>
                        </div>
                    </div>
                </FadeIn>

                {/* ── RIGHT PANEL — Form ────────────────────────────────── */}
                <FadeIn direction="left" delay={0.2} className="w-full lg:w-[55%] xl:w-[60%] flex items-center justify-center p-6 sm:p-10 lg:p-0 bg-white">
                    <div className="w-full max-w-lg">

                        {/* Form header */}
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-black text-[#333333] leading-tight">
                                Fill in your details
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
                                Takes less than 2 minutes. We confirm via WhatsApp instantly.
                            </p>
                        </div>

                        {/* Form card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                            <Suspense fallback={<div className="text-center text-gray-400 py-16">Loading form…</div>}>
                                <BookingForm />
                            </Suspense>
                        </div>

                        {/* Bottom trust badges */}
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {["Painless Treatments", "Experienced Dentists", "Affordable Pricing", "Instant WhatsApp Confirmation"].map((t) => (
                                <span key={t} className="bg-white text-[#333333] text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-[#20B2AA]" /> {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
