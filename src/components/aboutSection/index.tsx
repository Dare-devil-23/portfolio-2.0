'use client';
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience, education } from '@/data/resume'
import SkillsSection from '@/components/skillsSection'

interface Props {
    onIntersect?: (isIntersecting: boolean) => void;
}

const AboutSection: React.FC<Props> = ({ onIntersect }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                onIntersect?.(entries[0].isIntersecting);
            },
            { threshold: 0 }
        );

        const el = divRef.current;
        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, [onIntersect]);

    const toggleEntry = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className='bg-black/30 backdrop-blur-xl text-white/80 px-10 py-[10vh] lg:py-[15vh]'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='flex justify-between gap-5 lg:px-10 py-14 flex-col lg:flex-row border-t border-t-zinc-500'
                >
                    <div className='uppercase text-3xl pb-5 lg:pb-0'>
                        Professionally
                    </div>
                    <div className='lg:max-w-[50%] text-2xl lg:text-4xl leading-[42px] lg:leading-[70px]'>
                        &emsp;&emsp;&emsp;My craft lives at the intersection of engineering
                        rigor and design sensibility. I obsess over interaction details — fluid
                        animations, sub-second load times, components that anticipate the user.
                        Currently shaping Web3 products, previously built AI-powered analytics
                        and data-heavy dashboards.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='flex justify-between gap-5 lg:px-10 py-14 flex-col lg:flex-row border-t border-t-zinc-500'
                >
                    <div className='uppercase text-3xl pb-5 lg:pb-0'>
                        Personally
                    </div>
                    <div className='lg:max-w-[50%] text-2xl lg:text-4xl leading-[42px] lg:leading-[70px]'>
                        &emsp;&emsp;&emsp;When I step away from the editor,
                        you&apos;ll find me chasing boss fights in video games,
                        pushing limits at the gym, or mapping new corners of the globe.
                        Driven by the same curiosity that fuels my code — an itch to explore,
                        level up, and never stay comfortable.
                    </div>
                </motion.div>

                <SkillsSection />

                <div className='flex justify-between gap-5 lg:px-10 py-14 flex-col lg:flex-row'>
                    <div className='uppercase text-3xl pb-5 lg:pb-0'>
                        My journey
                    </div>
                    <div className='lg:max-w-[50%] text-2xl lg:text-4xl leading-[40px] flex flex-col gap-10'>
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='border-t border-t-zinc-500 pt-5 cursor-pointer'
                                onClick={() => toggleEntry(index)}
                            >
                                <div className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between'>
                                    <div>
                                        {job.role} at {job.company}
                                    </div>
                                    <div className='text-sm whitespace-nowrap lg:text-lg self-end flex items-center gap-2'>
                                        {job.period}
                                        <motion.span
                                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='inline-block text-xs'
                                        >
                                            &#9660;
                                        </motion.span>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden text-base lg:text-lg text-zinc-100 mt-4 flex flex-col gap-2'
                                        >
                                            {job.bullets.map((bullet, bIndex) => (
                                                <li key={bIndex} className='flex gap-2'>
                                                    <span className='text-zinc-100'>&bull;</span>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: experience.length * 0.1 }}
                            className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between border-t border-t-zinc-500 pt-5'
                        >
                            <div>
                                {education.degree}
                            </div>
                            <div className='text-sm whitespace-nowrap lg:text-lg self-end'>
                                {education.period}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (experience.length + 1) * 0.1 }}
                            className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between border-t border-t-zinc-500 pt-5'
                        >
                            <div>
                                Pre university
                            </div>
                            <div className='text-sm whitespace-nowrap lg:text-lg self-end'>
                                2017 – 2019
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div ref={divRef} />
        </>
    )
}

export default AboutSection
