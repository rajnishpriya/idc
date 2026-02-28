"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
    end,
    decimals = 0,
    duration = 2.5,
    suffix = "",
}: {
    end: number;
    decimals?: number;
    duration?: number;
    suffix?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "some" });

    return (
        <span ref={ref}>
            {isInView ? (
                <CountUp
                    start={0}
                    end={end}
                    decimals={decimals}
                    duration={duration}
                    separator=","
                    suffix={suffix}
                />
            ) : (
                `0${suffix}`
            )}
        </span>
    );
}
