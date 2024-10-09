import React from 'react';
import Projects from '@/components/projectSection/Projects';
import Earth from '@/components/projectSection/Earth';

const ProjectSection: React.FC = () => {
    return (
        <section className='lg:my-[10vh] my-0'>
            <div className='h-[100vh] relative flex items-center justify-center'>
                <Earth />
                <Projects />
            </div>
        </section>
    )
}

export default ProjectSection;