"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AnimatedHeading({
    sequence,
    className = "",
    wrapper = "span",
    cursor = true,
    repeat = 0,
}: {
    sequence: (string | number)[];
    className?: string;
    wrapper?: "p" | "div" | "span" | "strong" | "b" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    cursor?: boolean;
    repeat?: number;
}) {
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper={wrapper}
            cursor={cursor}
            repeat={repeat}
            className={className}
        />
    );
}
