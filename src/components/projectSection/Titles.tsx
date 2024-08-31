import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import { projectsData } from '@/components/projectSection/data'

interface TitleProps {
    data: typeof projectsData[0],
    setSelectedProject: (index: number | null) => void,
    setSelectedImage: (index: number | null) => void
    index: number
}

interface Props {
    data: typeof projectsData,
    setSelectedProject: (index: number | null) => void,
    setSelectedImage: (index: number | null) => void
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
    const { data, setSelectedProject, index, setSelectedImage } = props;

    const { title, speed, link } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    const redirectOnClick = () => {
        window.open(link, '_blank');
    }

    return (
        <div ref={container} className="cursor-default relative z-[3] flex">
            <div
                className="inline-block pl-[10%] cursor-pointer"
                onMouseOver={() => { setSelectedProject(index) }}
                onMouseLeave={() => { setSelectedProject(null) }}
                onClick={redirectOnClick}
            >
                <motion.p
                    style={{ clipPath: clip }}
                    className='inline-block text-zinc-300 uppercase font-bold text-[6vw] leading-[6.5vw] m-0 relative z-[3]'
                >
                    {title}
                </motion.p>
                <p className='text-zinc-800 top-0 z-[2] uppercase font-bold text-[6vw] leading-[6.5vw] m-0 block absolute'>
                    {title}
                </p>
            </div>
            <div className='grow' onMouseOver={() => { setSelectedImage(index) }} onMouseLeave={() => { setSelectedImage(null) }} />
        </div>
    )
}

const Titles: React.FC<Props> = (props: Props) => {
    const { data, setSelectedProject, setSelectedImage } = props;
    return (
        <div className="w-full">
            {
                data.map((project, i) => {
                    return <Title key={i} data={{ ...project }} index={i} setSelectedProject={setSelectedProject} setSelectedImage={setSelectedImage} />
                })
            }
        </div>
    )
}

export default Titles;