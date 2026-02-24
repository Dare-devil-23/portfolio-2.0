import React from 'react';
import Projects from '@/components/projectSection/Projects';
import Earth from '@/components/projectSection/Earth';

const ProjectSection: React.FC = () => {
    return (
        <section className='my-0'>
            <div className='h-[100dvh] -mt-20 relative flex items-center justify-center'>
                <Earth />
                <Projects />
            </div>
        </section>
    )
}

export default ProjectSection;