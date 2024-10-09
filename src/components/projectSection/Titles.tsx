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
    setSelectedProject: (index: number | null) => void,
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
    const { data, setSelectedProject, index } = props;

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
        <div
            ref={container}
            onMouseOver={() => setSelectedProject(index)}
            onMouseLeave={() => setSelectedProject(null)}
            className="cursor-default relative z-[3] flex"
        >
            <div
                className="inline-block pl-[10%] cursor-pointer"

                onClick={redirectOnClick}
            >
                <motion.p
                    style={{ clipPath: clip }}
                    className='inline-block text-zinc-300 lg:text-zinc-400 uppercase project-title-font-size m-0 relative z-[3]'
                >
                    {title}
                </motion.p>
                <p className='text-zinc-800 top-0 z-[2] uppercase project-title-font-size m-0 block absolute'>
                    {title}
                </p>
            </div>
        </div>
    )
}

const Titles: React.FC<Props> = (props: Props) => {
    const { data, setSelectedProject } = props;
    return (
        <div className="w-full">
            {
                data.map((project, i) => {
                    return <Title key={i} data={{ ...project }} index={i} setSelectedProject={setSelectedProject} />
                })
            }
        </div>
    )
}

export default Titles;