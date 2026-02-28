import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import FadeIn from "@/components/FadeIn";

export default function Gallery() {
    const images = [
        { src: "/images/gallery1.jpeg", alt: "Bright, modern clinic reception area", title: "Welcoming Reception" },
        { src: "/images/gallery2.jpeg", alt: "State of the art dental operating room", title: "Advanced Treatment Rooms" },
        { src: "/images/gallery3.jpeg", alt: "Patient smiling after successful treatment", title: "Happy Smiles" },
        { src: "/images/gallery4.jpeg", alt: "Close up of modern sterilization equipment", title: "Pristine Environment" },
        { src: "/images/gallery5.jpeg", alt: "Dentist consulting with a relaxed patient", title: "Comfortable Consultations" },
        { src: "/images/gallery6.jpeg", alt: "High tech 3D dental scanning machine", title: "Latest Technology" }
    ];

    return (
        <div className="w-full overflow-x-hidden bg-[#f8f9fa]">

            {/* Hero Section */}
            <section className="bg-white py-20 border-b border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0056B3_0%,_transparent_20%)] opacity-5"></div>
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#20B2AA]/10 text-[#20B2AA] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <ImageIcon size={32} strokeWidth={1.5} />
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-[#333333] sm:text-4xl md:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6">
                        Our Clinic <AnimatedHeading sequence={["Gallery", 1000]} wrapper="span" className="text-[#0056B3]" cursor={true} />
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
                        Take a visual tour of our state-of-the-art facilities, advanced technology, and the beautiful smiles we&apos;ve helped create.
                    </p>
                </div>
            </section>

            {/* Masonry-style Grid Gallery */}
            <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {images.map((img, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div
                                className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-white shadow-lg border-[6px] sm:border-[8px] border-white hover:border-[#20B2AA]/10 hover:shadow-2xl hover:shadow-[#0056B3]/20 transition-all duration-500 ease-out h-[260px] sm:h-[320px] md:h-[400px] lg:h-[450px] transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center rounded-[2rem] transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                                    style={{ backgroundImage: `url("${img.src}")` }}
                                    aria-label={img.alt}
                                ></div>

                                {/* Soft overlay on hover */}
                                <div className="absolute inset-0 bg-[#0056B3]/0 group-hover:bg-[#0056B3]/10 transition-colors duration-500 rounded-[2rem]"></div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-12 sm:py-16 md:py-24 bg-white relative border-t border-gray-100">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">
                    <div className="flex flex-col items-center justify-center gap-6 py-12 sm:py-16 md:py-20 px-6 sm:px-8 text-center bg-[#f8f9fa] rounded-[2rem] shadow-sm border border-gray-200">
                        <div className="flex flex-col gap-4 items-center">
                            <h2 className="text-[#333333] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                                Experience It Yourself
                            </h2>
                            <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                                Our doors are open. We invite you to step into a dental environment where comfort meets clinical excellence.
                            </p>
                        </div>
                        <div className="mt-6">
                            <Link href="/book" className="inline-flex items-center justify-center rounded-xl h-14 sm:h-16 px-8 sm:px-12 bg-[#0056B3] text-white text-lg sm:text-xl font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
                                Book Your Visit <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
