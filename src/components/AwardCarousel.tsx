"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface ReusableCarouselProps {
    tag: string;
    title: string;
    description: string;
    items: CarouselItem[];
    hideCardContent?: boolean;
    imageContainerClassName?: string;
    imageClassName?: string;
}

function ReusableCarousel({ tag, title, description, items, hideCardContent, imageContainerClassName = "w-full aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden bg-gray-50 group", imageClassName = "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" }: ReusableCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-[#0056B3] font-bold tracking-widest uppercase text-sm mb-3">{tag}</span>
                <h2 className="text-[#333333] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">{title}</h2>
                <div className="h-1 w-24 bg-[#20B2AA] mt-6 rounded-full"></div>
                <p className="mt-6 text-gray-600 text-lg max-w-2xl">
                    {description}
                </p>
            </div>

            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
                <div className="flex touch-pan-y pt-4 pb-12 px-4 -m-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-4 md:pr-6">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 h-full">
                                {/* Image Container */}
                                <div className={imageContainerClassName}>
                                    <div
                                        className={imageClassName}
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                    ></div>
                                </div>
                                {/* Content Section */}
                                {!hideCardContent && (
                                    <div className="w-full p-6 flex flex-col bg-white border-t border-gray-100 flex-grow">
                                        <h3 className="text-xl font-bold text-[#333333] mb-2 leading-tight">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-2">
                <button
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0056B3] hover:bg-[#0056B3] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0056B3] hover:bg-[#0056B3] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

const certificationsData = [
    {
        id: 1,
        title: "ISO 9001 Certification",
        description: "Certified globally for quality management systems in healthcare.",
        image: "/images/cer1.jpeg",
    },
    {
        id: 2,
        title: "Advanced Board Certification",
        description: "Certified by the national dental boards for surgical expertise.",
        image: "/images/cer2.jpeg",
    },
    {
        id: 3,
        title: "Sterilization Excellence",
        description: "Exceeding international guidelines for medical sterilization.",
        image: "/images/cer3.jpeg",
    }
];

const achievementsData = [
    {
        id: 1,
        title: "Best Dental Clinic 2023",
        description: "Awarded for exceptional patient care and modern facilities.",
        image: "/images/award1.jpeg",
    },
    {
        id: 2,
        title: "Excellence in Implantology",
        description: "Recognized for outstanding success rates in complex implant procedures.",
        image: "/images/award2.jpeg",
    },
    {
        id: 3,
        title: "Top Cosmetic Dentist Award",
        description: "National recognition for transformative smile makeovers.",
        image: "/images/award3.jpeg",
    }
];

export function CertificationCarousel() {
    return (
        <ReusableCarousel
            tag="Official Recognition"
            title="Our Certifications"
            description="Our clinic is officially certified by leading industry safety and standard organizations, guaranteeing the highest quality care."
            items={certificationsData}
            imageContainerClassName="w-full aspect-[4/3] lg:aspect-[3/2] relative overflow-hidden bg-white group"
            imageClassName="absolute inset-4 bg-contain bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-105"
        />
    );
}

export function AchievementCarousel() {
    return (
        <ReusableCarousel
            tag="Industry Excellence"
            title="Rewards & Achievements"
            description="We are proud to be recognized across the industry for our commitment to exceptional clinical standards, innovation, and patient care."
            items={achievementsData}
            hideCardContent={true}
        />
    );
}
