import React from 'react';
import Projects from '@/components/projectSection/Projects';
import Earth from '@/components/projectSection/Earth';

const ProjectSection: React.FC = () => {
    return (
        <section className='h-[100dvh] bg-zinc-900 md:py-[10dvh] md:my-[10dvh] relative flex items-center justify-center'>
            <Earth />
            <Projects />
        </section>
    )
}

export default ProjectSection;