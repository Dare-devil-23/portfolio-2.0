import React, { useState } from 'react';
import Projects from '@/components/projectSection/Projects';
import Earth from '@/components/projectSection/Earth';
import Image from '@/components/projectSection/Image';

const ProjectSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section className='lg:my-[10dvh] my-0'>
            <div className='lg:h-[100dvh] relative flex items-center justify-center'>
                <Earth />
                <Projects setSelectedImage={setSelectedImage} />
                <Image selectedImage={selectedImage} />
            </div>
        </section>
    )
}

export default ProjectSection;