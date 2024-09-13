import React, { useRef, useEffect, useState } from 'react';
import { useTransform, useScroll, motion, useAnimation } from 'framer-motion';

const heroPhrase = "a front end  developer  who loves  design";

const HomeSection: React.FC = () => {
    const container = useRef(null);
    const controls = useAnimation();
    const [isTransitionComplete, setIsTransitionComplete] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitionComplete(true);
            controls.start('visible');
        }, 800);

        return () => clearTimeout(timer);
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <div ref={container} className='min-h-[calc(100dvh-80px)] flex lg:block items-center lg:min-h-[100dvh] p-5 lg:p-0'>
            <div className='flex flex-col lg:flex-row'>
                <motion.div
                    style={{ y }}
                    className='flex -mt-[40dvh] mb-[20dvh] lg:mb-10 lg:-mt-[8dvh] gap-x-3 max-w-[90dvw] lg:pl-[10dvw] flex-wrap lg:[&>*:nth-child(1)]:pl-[10dvw] mix-blend-difference'
                    variants={containerVariants}
                    initial="hidden"
                    animate={isTransitionComplete ? "visible" : "hidden"}
                >
                    {
                        heroPhrase.split('  ').map((phrase, index) => (
                            <motion.h1
                                className='text-[4dvh] leading-[4dvh] lg:text-[9dvw] lg:leading-[9dvw] lg:whitespace-nowrap font-sans uppercase font-medium text-zinc-300'
                                key={index}
                                variants={itemVariants}
                            >
                                {phrase}
                            </motion.h1>
                        ))
                    }
                </motion.div>
                <div className='bg-gray-300 rounded-[36px] lg:rounded-r-[0px] flex items-end self-end lg:-ml-[45vw] -mb-[25dvh]'>
                    <img
                        src="/images/sahith-bg.webp"
                        alt='sahith'
                        className='object-cover px-[8dvw] pt-[10dvh]'
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
