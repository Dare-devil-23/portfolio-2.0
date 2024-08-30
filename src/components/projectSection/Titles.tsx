import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import { projectsData } from '@/components/projectSection/data'

interface TitleProps {
    data: typeof projectsData[0],
    setSelectedProject: (index: number | null) => void,
    index: number
}

interface Props {
    data: typeof projectsData,
    setSelectedProject: (index: number | null) => void
}

const Title: React.FC<TitleProps> = ({ data, setSelectedProject, index }) => {

    const { title, speed } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div ref={container} className="border-b border-b-zinc-800 cursor-default relative z-[2]">
            <div
                className="inline-block pl-[10%]"
                onMouseOver={() => { setSelectedProject(index) }}
                onMouseLeave={() => { setSelectedProject(null) }}
            >
                <motion.p
                    style={{ clipPath: clip }}
                    className='inline-block text-zinc-300 uppercase font-bold text-[6vw] leading-[6.5vw] m-0 relative z-[2]'
                >
                    {title}
                </motion.p>
                <p className='text-zinc-800 top-0 z-[1] uppercase font-bold text-[6vw] leading-[6.5vw] m-0 block absolute'>
                    {title}
                </p>
            </div>
        </div>
    )
}

const Titles: React.FC<Props> = ({ data, setSelectedProject }) => {
    return (
        <div className="w-full border-t border-t-zinc-800">
            {
                data.map((project, i) => {
                    return <Title key={i} data={{ ...project }} index={i} setSelectedProject={setSelectedProject} />
                })
            }
        </div>
    )
}

export default Titles;