"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    text: string;
    duration?: number;
}

const TextHoverEffect: React.FC<Props> = ({ text, duration }: Props) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            });
        }
    }, [cursor]);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 420 300" // Adjust the SVG viewBox to suit your text
            preserveAspectRatio="none" // Ensures the text scales proportionally
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            className="select-none overflow-hidden"
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="25%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor={"var(--yellow-500)"} />
                            <stop offset="25%" stopColor={"var(--red-500)"} />
                            <stop offset="50%" stopColor={"var(--blue-500)"} />
                            <stop offset="75%" stopColor={"var(--cyan-500)"} />
                            <stop offset="100%" stopColor={"var(--violet-500)"} />
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    animate={maskPosition}
                    transition={{ duration: duration ?? 0, ease: "easeOut" }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>

            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="3"
                className="font-[arial] font-bold stroke-neutral-200 fill-transparent"
                fontSize="250" // Define a base font size in SVG units
                style={{ opacity: hovered ? 0.7 : 0 }}
            >
                {text}
            </text>

            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="3"
                className="font-[arial] font-bold fill-transparent stroke-neutral-200"
                fontSize="250" // Keep the same font size for consistent scaling
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                }}
            >
                {text}
            </motion.text>

            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="3"
                mask="url(#textMask)"
                className="font-[arial] font-bold fill-transparent"
                fontSize="250" // Keep the same font size for scaling
            >
                {text}
            </text>
        </svg>
    );
};

export default TextHoverEffect;