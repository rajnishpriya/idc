"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    amount?: "some" | "all" | number;
}

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction = "up",
    className = "",
    amount = 0.2,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
            case "none":
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
            default:
                return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
        }
    };

    const variants = getVariants();

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
