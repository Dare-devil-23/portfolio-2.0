import React from 'react'
import { projectsData } from '@/components/projectSection/data'

interface Props {
    data: typeof projectsData
    selectedProject: number | null
}

const Descriptions: React.FC<Props> = ({ data, selectedProject }) => {

    const crop = (string: string, maxLength: number) => {
        return string.substring(0, maxLength);
    }

    return (
        <div className="absolute top-[3px] h-full w-full z-[2] pointer-events-none">
            {
                data.map((project, i) => {
                    const { title, description } = project;
                    return (
                        <div
                            key={i}
                            className="bg-zinc-300 flex justify-between items-center px-[10%]"
                            style={{ 
                                clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)",
                                transition: "clip-path .4s"
                            }}
                        >
                            <p className='text-[#010101] uppercase font-bold text-[6vw] leading-[6.5vw] m-0 relative z-[1]'>
                                {crop(title, 9)}
                            </p>
                            <p className='w-[40%] text-[1vw] font-bold'>
                                {description}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Descriptions;