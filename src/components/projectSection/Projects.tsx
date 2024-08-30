import { useState } from 'react';
import Titles from '@/components/projectSection/Titles';
import Descriptions from '@/components/projectSection/Descritions';
import { projectsData } from '@/components/projectSection/data';

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    return (
        <div className="absolute z-[1] w-full">
            <Titles data={projectsData} setSelectedProject={setSelectedProject}/>
            <Descriptions data={projectsData} selectedProject={selectedProject}/>
        </div>
    )
}

export default Projects;