'use client';
import React, { useEffect, useRef, useState } from 'react'

const AboutSection: React.FC = () => {
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const element = document.getElementById("static-bg");
                const elementContainer = document.getElementById("static-bg-container");
                if (entry.isIntersecting) {
                    element?.style.setProperty("position", "absolute");
                    elementContainer?.style.setProperty("position", "static");
                    element?.style.setProperty("mix-blend-mode", "normal");
                } else {
                    element?.style.setProperty("position", "fixed");
                    elementContainer?.style.setProperty("position", "relative");
                    element?.style.setProperty("mix-blend-mode", "difference");
                }
            },
            { threshold: 0 }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className='bg-black/30 backdrop-blur-xl text-white/80 px-10 py-[10dvh]  lg:py-[15dvh]'>
                <div className='flex justify-between gap-5 lg:px-10 py-14 flex-col lg:flex-row border-t border-t-zinc-500'>
                    <div className='uppercase text-3xl pb-5 lg:pb-0'>
                        Profesionally
                    </div>
                    <div className='lg:max-w-[50%] text-2xl lg:text-4xl leading-[42px] lg:leading-[70px]'>
                        &emsp;&emsp;&emsp;As a front-end developer, I love to be creative with code,
                        putting a lot of effort into making interactions as
                        smooth as they can be. Over the last 2 years,
                        I have learned to use Next.js in combination with tools
                        such as Framer Motion, and React Three Fiber. Also learned backend using spring boot & Node.js
                    </div>
                </div>
                <div className='flex justify-between gap-5 lg:px-10 py-14 flex-col lg:flex-row border-t border-t-zinc-500'>
                    <div className='uppercase text-3xl pb-5 lg:pb-0'>
                        Personally
                    </div>
                    <div className='lg:max-w-[50%] text-2xl lg:text-4xl leading-[42px] lg:leading-[70px]'>
                        &emsp;&emsp;&emsp;Besides being a front-end developer,
                        I like to play video games, hit the gym, 
                        or continue my journey to cover the world. 
                        (Like to travel as much as possible)
                    </div>
                </div>
                <div className='flex justify-between gap-5 lg:px-10 py-14 flex-col lg:flex-row'>
                    <div className='uppercase text-3xl pb-5 lg:pb-0'>
                        My journey
                    </div>
                    <div className='lg:max-w-[50%] text-2xl lg:text-4xl leading-[40px] flex flex-col gap-10'>
                        <div className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between border-t border-t-zinc-500 pt-5'>
                            <div>
                                Full Stack Developer at FC.ONE
                            </div>
                            <div className='text-sm whitespace-nowrap lg:text-lg self-end'>
                                2023 - now
                            </div>
                        </div>

                        <div className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between border-t border-t-zinc-500 pt-5'>
                            <div>
                                Associate Software Developer at PromptCloud
                            </div>
                            <div className='text-sm whitespace-nowrap lg:text-lg self-end'>
                                2022 - 2023
                            </div>
                        </div>

                        <div className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between border-t border-t-zinc-500 pt-5'>
                            <div>
                                B.Tech Computer Science
                            </div>
                            <div className='text-sm whitespace-nowrap lg:text-lg self-end'>
                                2019 - 2023
                            </div>
                        </div>

                        <div className='flex lg:gap-10 gap-1 lg:flex-row flex-col justify-between border-t border-t-zinc-500 pt-5'>
                            <div>
                                Pre university
                            </div>
                            <div className='text-sm whitespace-nowrap lg:text-lg self-end'>
                                2017 - 2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={divRef} />
        </>
    )
}

export default AboutSection