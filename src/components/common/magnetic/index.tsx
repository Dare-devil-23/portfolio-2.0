import { MouseEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion';

interface MagneticProps {
    children: React.ReactNode
}

const Magnetic: React.FC<MagneticProps> = (props: MagneticProps) => {
    const { children } = props
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2)
            const middleY = clientY - (top + height / 2)
            setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
        }
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default Magnetic;