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
        <div className="absolute top-[3px] h-full w-full z-[3] pointer-events-none">
            {
                data.map((project, i) => {
                    const { title, description } = project;
                    return (
                        <div
                            key={i}
                            className="bg-zinc-800 text-zinc-300 flex justify-between items-center px-[10%]"
                            style={{ 
                                clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)",
                                transition: "clip-path .4s"
                            }}
                        >
                            <p className='hidden lg:block uppercase project-title-font-size m-0 relative z-[2]'>
                                {crop(title, 9)}
                            </p>
                            <p className='lg:hidden block uppercase project-title-font-size m-0 relative z-[2]'>
                                {crop(title, 4)}
                            </p>
                            <p className='w-[60%] lg:w-[40%] text-[1vh] lg:text-[1vw] font-bold'>
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