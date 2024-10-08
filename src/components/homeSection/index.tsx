import React, { useRef, useEffect, useState } from 'react';
import { useTransform, useScroll, motion, useAnimation } from 'framer-motion';

interface Props {
    heroPhrase: React.ReactNode;
    staticBg?: boolean;
}

const HomeSection: React.FC<Props> = (props: Props) => {

    const { heroPhrase, staticBg = false } = props;
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
        <div ref={container} id="static-bg-container" style={{ position: staticBg ? 'relative' : 'static' }} className='z-0 min-h-[100vh] overflow-hidden flex lg:block items-center lg:min-h-[100vh] p-5 lg:p-0'>
            <div className='flex flex-col lg:flex-row w-full'>
                <motion.div
                    style={{ y }}
                    className={`flex ${staticBg ? "-mt-[42vh]" : "-mt-[10vh]"} mb-[20vh] lg:mb-10 lg:-mt-[8vh] gap-x-3 max-w-[90dvw] lg:pl-[10dvw] justify-center mix-blend-difference`}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isTransitionComplete ? "visible" : "hidden"}
                >
                    <motion.h1
                        className='text-[5vh] leading-[5vh] lg:text-[9dvw] lg:leading-[9dvw] lg:whitespace-nowrap font-sans uppercase font-medium text-zinc-300'
                        variants={itemVariants}
                    >
                        {heroPhrase}
                    </motion.h1>
                </motion.div>
                {
                    staticBg ? (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            id='static-bg'
                            style={{
                                position: 'fixed',
                                bottom: 5,
                                mixBlendMode: 'difference'
                            }}
                            className='bg-gray-300 rounded-[36px] lg:rounded-r-[0px] right-0 mt-[25vh] mx-5 max-w-3xl lg:max-w-none lg:mx-0 xl:w-[50dvw] xl:h-[70vh] z-0'
                        >
                            <img
                                src="/images/sahith-bg.webp"
                                alt='sahith'
                                className='object-cover px-[7dvw] h-full'
                            />
                        </motion.div>
                    ) : (
                        <div className='bg-gray-300 rounded-[36px] lg:rounded-r-[0px] flex items-end self-end lg:-ml-[38vw] lg:mt-[25vh]'>
                            <img
                                src="/images/sahith-bg.webp"
                                alt='sahith'
                                className='object-cover px-[8dvw] pt-[10vh]'
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeSection;
