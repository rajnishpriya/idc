"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
    {
        id: 1,
        title: "Reclaim Your Confidence: A Complete Smile Transformation",
        description: "From a broken front tooth and noticeable gaps to a seamless, healthy smile! This multi-stage treatment shows the journey from \"Before\" to \"Complete\" recovery. We specialize in restoring both function and aesthetics so you can smile without hesitation.",
        image: "/images/before1.png",
    },
    {
        id: 2,
        title: "Transforming Smiles, Reclaiming Lives: Pediatric Health Journey",
        description: "Dental health is just as important for our little ones! This case highlights a young patient’s journey from severe gum inflammation and pain to a joyful, healthy recovery. Seeing a happy, healed smile is the best part of our work at Indu Dental Clinic.",
        image: "/images/before2.png",
    },
    {
        id: 3,
        title: "Complete Overhaul: From Severe Decay to Optimal Health",
        description: "Don't let severe staining or decay hold you back. This patient underwent a complete restoration of functional and esthetic health, resulting in a flawless smile line and healthy gums. Our goal is always a natural-looking, long-lasting result.",
        image: "/images/before3.png",
    }
];

export default function BeforeAfterCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">


            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {cases.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 first:pl-0">
                            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col">

                                {/* Image Container (Before & After) */}
                                <div className="w-full relative overflow-hidden bg-gray-50 group flex justify-center items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto max-h-[450px] object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="w-full px-4 py-5 md:px-8 md:py-6 flex flex-col items-center text-center justify-center bg-white border-t border-gray-100">
                                    <h3 className="text-xl md:text-2xl font-black text-[#333333] mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">{item.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-10">
                <button
                    className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0056B3] hover:bg-[#0056B3] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0056B3] hover:bg-[#0056B3] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} />
                </button>
            </div>
        </div>
    );
}
