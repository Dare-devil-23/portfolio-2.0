import React, { useState } from 'react';
import Projects from '@/components/projectSection/Projects';
import Earth from '@/components/projectSection/Earth';
import Image from '@/components/projectSection/Image';

const ProjectSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section className='md:my-[10dvh] my-0'>
            <div className='h-[20dvh] bg-gradient-to-t from-zinc-900 to-transparent'/>
            <div className='h-[100dvh] bg-zinc-900 relative flex items-center justify-center'>
                <Earth />
                <Projects setSelectedImage={setSelectedImage} />
                <Image selectedImage={selectedImage} />
            </div>
            <div className='h-[20dvh] bg-gradient-to-b from-zinc-900 to-transparent'/>
        </section>
    )
}

export default ProjectSection;