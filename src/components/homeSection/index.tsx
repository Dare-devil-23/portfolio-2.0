import React, { useRef } from 'react'
import { useTransform, useScroll, motion } from 'framer-motion';

const heroPhrase = "a front end  developer  who loves  design"

const HomeSection: React.FC = () => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    
    return (
        <div ref={container} className='min-h-[60dvh] lg:min-h-[100dvh] p-5 md:p-0'>
            <div className='flex flex-col md:flex-row'>
                <motion.div style={{ y }} className='flex -mt-[80px] mb-[80px] gap-x-3 max-w-[90dvw] md:pl-[10dvw] flex-wrap md:[&>*:nth-child(1)]:pl-[10dvw] mix-blend-difference'>
                    {
                        heroPhrase.split('  ').map((phrase, index) => (
                            <h1 className='text-[3dvh] leading-[4dvh] md:text-[9dvw] md:leading-[9dvw] md:whitespace-nowrap font-sans uppercase font-medium text-zinc-300' key={index}>
                                {phrase}
                            </h1>
                        ))
                    }
                </motion.div>
                <div className='bg-gray-300 rounded-[36px] lg:rounded-r-[0px] flex items-end self-end md:-ml-[45vw] -mb-[25dvh]'>
                    <img
                        src="/images/sahith-bg.webp"
                        alt='sahith'
                        className='object-cover px-[8dvw] pt-[10dvh]'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSection