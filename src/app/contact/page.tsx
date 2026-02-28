import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";

export const metadata: Metadata = {
    title: "Contact Best Dentist in Siwan | Indu Dental Clinic location",
    description:
        "Contact Indu Dental Clinic in Siwan, Bihar. Get directions to our clinic near Sadar Hospital, Naya Bazar. Call us to book your dental appointment today.",
};

export default function Contact() {
    return (
        <div className="w-full overflow-x-hidden bg-[#f5f7f8]">

            {/* ─── HERO ────────────────────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pt-10 pb-4">
                <div className="mx-auto max-w-7xl flex flex-col gap-4 text-center md:text-left">
                    <span className="mb-1 inline-block rounded-full bg-[#0056B3]/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#0056B3] w-max mx-auto md:mx-0">
                        Contact Us
                    </span>
                    <h1 className="text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                        Get in <AnimatedHeading sequence={["Touch", 1000]} wrapper="span" className="text-[#0056B3]" cursor={true} />
                    </h1>
                    <p className="text-gray-600 text-base md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
                        We&apos;re here to help you achieve your best smile. Reach out to our team
                        for any inquiries or to schedule a consultation.
                    </p>
                </div>
            </section>

            {/* ─── CONTACT INFO + MAP ──────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-stretch">

                    {/* Contact Details Column */}
                    <FadeIn direction="up" delay={0.1} className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6 h-full">

                            {[
                                { Icon: Phone, label: "Phone", value: "+91 99318 62472", href: "tel:+919931862472" },
                                { Icon: Mail, label: "Email", value: "concierge@indudentalclinic.com", href: "mailto:concierge@indudentalclinic.com" },
                            ].map(({ Icon, label, value, href }) => (
                                <a key={label} href={href} className="flex items-start gap-4 group hover:no-underline">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#20B2AA]/10 text-[#20B2AA] shrink-0 group-hover:bg-[#20B2AA] group-hover:text-white transition-all duration-300">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex flex-col gap-0.5 mt-1">
                                        <p className="text-[#333333] text-base sm:text-lg font-bold">{label}</p>
                                        <p className="text-gray-600 text-sm sm:text-base">{value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="flex items-start gap-4 group">
                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#20B2AA]/10 text-[#20B2AA] shrink-0">
                                    <MapPin size={22} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col gap-0.5 mt-1">
                                    <p className="text-[#333333] text-base sm:text-lg font-bold">Address</p>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        Near Sadar Hospital, Hospital Road<br />Naya Bazar, Amlori, Siwan - 841226, Bihar
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#20B2AA]/10 text-[#20B2AA] shrink-0">
                                    <Clock size={22} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col gap-0.5 mt-1">
                                    <p className="text-[#333333] text-base sm:text-lg font-bold">Clinic Hours</p>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        Mon–Sun: 10:00 AM – 8:00 PM<br />
                                        <span className="text-xs text-gray-400">(Lunch: 11:30–12:00 AM &amp; 3:30–4:00 PM)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Map Section */}
                    <FadeIn direction="up" delay={0.2} className="lg:col-span-7">
                        <div className="h-[280px] sm:h-[380px] lg:h-full w-full bg-gray-200 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-md relative group min-h-[280px]">
                            <iframe
                                src="https://maps.google.com/maps?q=Indu+Dental+Clinic,+Hospital+Road,+Naya+Bazar,+Siwan,+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full absolute inset-0"
                            ></iframe>
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-10">
                                <a
                                    href="https://maps.app.goo.gl/ys29FX4D8HjUWVtR9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto bg-white/95 backdrop-blur-sm border border-gray-100 text-[#0056B3] px-4 py-2 rounded-xl font-bold tracking-wide shadow-xl hover:bg-[#0056B3] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm"
                                >
                                    <MapPin size={16} /> Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ─── GOOGLE REVIEWS SECTION ───────────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white mt-4 border-y border-gray-100">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 text-center md:text-left">
                        <div>
                            <span className="text-[#20B2AA] font-bold tracking-widest uppercase text-sm mb-2 block">
                                Patient Testimonials
                            </span>
                            <h2 className="text-[#333333] text-3xl font-black tracking-tight">
                                Reviews from our Siwan Patients
                            </h2>
                        </div>
                        <a
                            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0056B3] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-1 hover:bg-blue-700 transition"
                        >
                            Write a Google Review
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Rahul Kumar",
                                text: "Best dental clinic in Siwan! The root canal treatment was completely painless. Highly recommend Dr. Indu and the team.",
                            },
                            {
                                name: "Priya Singh",
                                text: "Very clean and modern clinic near Naya Bazar. I got teeth whitening done and the results are amazing. Excellent service.",
                            },
                            {
                                name: "Amit Tiwari",
                                text: "Affordable dental care in Siwan with top-class equipment. They explain the problem clearly and don't overcharge.",
                            },
                        ].map((review, i) => (
                            <FadeIn key={i} delay={i * 0.15} direction="up">
                                <div className="bg-[#f5f7f8] p-6 rounded-[1.5rem] border border-gray-100 flex flex-col gap-4">
                                    <div className="flex text-yellow-500">
                                        <Star className="fill-yellow-500" size={18} />
                                        <Star className="fill-yellow-500" size={18} />
                                        <Star className="fill-yellow-500" size={18} />
                                        <Star className="fill-yellow-500" size={18} />
                                        <Star className="fill-yellow-500" size={18} />
                                    </div>
                                    <p className="text-gray-600 italic text-sm md:text-base leading-relaxed grow">
                                        "{review.text}"
                                    </p>
                                    <p className="font-bold text-[#333333]">- {review.name}</p>

                                    {/* Review JSON-LD Schema */}
                                    <script
                                        type="application/ld+json"
                                        dangerouslySetInnerHTML={{
                                            __html: JSON.stringify({
                                                "@context": "https://schema.org",
                                                "@type": "Review",
                                                "itemReviewed": {
                                                    "@type": "Dentist",
                                                    "name": "Indu Dental Clinic",
                                                    "address": "Siwan, Bihar"
                                                },
                                                "author": {
                                                    "@type": "Person",
                                                    "name": review.name
                                                },
                                                "reviewRating": {
                                                    "@type": "Rating",
                                                    "ratingValue": "5",
                                                    "bestRating": "5"
                                                },
                                                "reviewBody": review.text
                                            })
                                        }}
                                    />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHATSAPP BOOKING CARD ───────────────────────────────── */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 mb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-[1.5rem] sm:rounded-[2rem] bg-white p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#25D366]/10 border border-gray-100 relative overflow-hidden gap-6 lg:gap-10">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="flex flex-col gap-4 max-w-2xl relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="flex w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                                <p className="text-[#25D366] text-xs font-extrabold tracking-widest uppercase">Instant Scheduling</p>
                            </div>
                            <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                Book Appointment via WhatsApp
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                The fastest and easiest way to schedule your appointment is through our dedicated WhatsApp line.
                            </p>
                        </div>

                        <div className="flex flex-col items-stretch lg:items-end relative z-10 w-full lg:w-auto shrink-0">
                            <Link
                                href="/book"
                                className="flex items-center justify-center gap-3 rounded-2xl h-14 sm:h-16 px-6 sm:px-10 bg-[#25D366] text-white text-base sm:text-lg font-bold shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Book Appointment Now
                            </Link>
                            <p className="text-center mt-3 text-gray-400 text-xs font-medium">
                                Avg. response time: &lt;5 minutes
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
