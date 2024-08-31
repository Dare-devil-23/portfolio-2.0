import { useState } from 'react';
import Titles from '@/components/projectSection/Titles';
import Descriptions from '@/components/projectSection/Descritions';
import { projectsData } from '@/components/projectSection/data';

interface Props {
    setSelectedImage: (index: number | null) => void
}

const Projects: React.FC<Props> = (props: Props) => {
    const { setSelectedImage } = props;
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    return (
        <div className="absolute z-[2] w-full">
            <Titles data={projectsData} setSelectedProject={setSelectedProject} setSelectedImage={setSelectedImage}/>
            <Descriptions data={projectsData} selectedProject={selectedProject}/>
        </div>
    )
}

export default Projects;