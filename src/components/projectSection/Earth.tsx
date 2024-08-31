import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react';
import { MotionValue, useScroll } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useTexture } from "@react-three/drei"

const EartMesh: React.FC<{ scrollYProgress: MotionValue }> = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {

    const texture = useTexture({
        map: '/images/color.jpg',
        normalMap: '/images/normal.png',
        aoMap: '/images/occlusion.jpg'
    })

    return (
        <Suspense
            fallback={<img className='h-full' src="/images/earth.png" />}
        >
            <ambientLight intensity={0.3} />
            <directionalLight intensity={5} position={[1, 0, 0.5]} />
            <motion.mesh
                scale={2.5}
                rotation-y={scrollYProgress}
            >
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={texture.map} normalMap={texture.normalMap} aoMap={texture.aoMap} />
            </motion.mesh>
        </Suspense>
    )
}

const Earth: React.FC = () => {

    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    return (
        <Canvas ref={scene}>
            <EartMesh scrollYProgress={scrollYProgress} />
        </Canvas>
    )
}

export default Earth;