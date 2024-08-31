import { Canvas } from '@react-three/fiber'
import React from 'react'
import ImageMesh from '@/components/projectSection/ImageMesh';

type Props = {
    selectedImage: number | null
}

const Image: React.FC<Props> = (props: Props) => {
    const { selectedImage } = props;    
    return (
        <div className='absolute w-full h-full z-[1] hidden md:block'>
            <Canvas>
                <ImageMesh activeMenu={selectedImage} />
            </Canvas>
        </div>
    )
}

export default Image