import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Rahul Verma",
            role: "Patient",
            content: "The best dental experience I've ever had. Dr. Priyadarshi and his team are incredibly professional. The clinic is spotless, and my root canal was completely painless. Highly recommend Indu Dental Clinic to everyone in Siwan.",
            rating: 5,
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Patient",
            content: "I visited for teeth whitening before my wedding. The results were amazing! The staff made me feel very comfortable, and the modern equipment they use is very impressive. I finally have the confident smile I always wanted.",
            rating: 5,
        },
        {
            id: 3,
            name: "Amit Kumar",
            role: "Patient",
            content: "Got a dental implant done recently. The entire process was explained clearly beforehand, and the surgery went smoothly. Dr. Rajnish is very skilled and patient. The follow-up care has also been excellent.",
            rating: 5,
        },
        {
            id: 4,
            name: "Sneha Gupta",
            role: "Patient",
            content: "Took my 7-year-old son for a cavity filling. Usually, he is terrified of dentists, but the doctor here was so gentle and friendly that my son didn't cry at all. Very kid-friendly clinic.",
            rating: 5,
        },
        {
            id: 5,
            name: "Vikas Singh",
            role: "Patient",
            content: "Orthodontic treatment for my daughter is going on here. We can clearly see the improvement in just a few months. The clinic hygiene is top-notch, and appointments are always on time.",
            rating: 5,
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#f5f7f8] overflow-x-hidden">
            <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 md:py-16 flex flex-col items-center">
                <div className="flex flex-col max-w-[1200px] w-full gap-16">

                    {/* Hero Section */}
                    <section className="flex flex-col gap-6 text-center pt-8">
                        <span className="mb-2 inline-block rounded-full bg-[#0056B3]/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#0056B3] w-max mx-auto">
                            Patient Stories
                        </span>
                        <h1 className="text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Smiles We've <span className="text-[#0056B3]">Transformed</span>
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
                            Don't just take our word for it. Read what our valued patients have to say about their experience at Indu Dental Clinic.
                        </p>
                    </section>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative group">
                                <Quote className="absolute top-6 right-6 text-[#20B2AA]/20 w-16 h-16 group-hover:text-[#20B2AA]/40 transition-colors" />

                                <div className="flex gap-1 mb-6 text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-10 flex-grow relative z-10 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-[#0056B3]/10 flex items-center justify-center text-[#0056B3] font-black text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#333333] font-bold text-lg">{testimonial.name}</p>
                                        <p className="text-[#20B2AA] text-sm font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-4 mb-10 px-0 sm:px-6">
                        <div className="flex flex-col lg:flex-row items-center justify-between rounded-[2rem] bg-[#0056B3] p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

                            <div className="flex flex-col gap-4 max-w-2xl relative z-10 text-center lg:text-left text-white mb-8 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                                    Ready to start your journey?
                                </h2>
                                <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
                                    Join our growing family of happy patients. Book your consultation today and take the first step towards perfect oral health.
                                </p>
                            </div>

                            <div className="relative z-10 w-full lg:w-auto flex justify-center lg:justify-end">
                                <Link
                                    href="/book"
                                    className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl h-13 sm:h-16 px-8 sm:px-10 bg-white text-[#0056B3] text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    Book Now <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
