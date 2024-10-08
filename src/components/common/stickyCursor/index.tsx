'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';

interface Props {
    stickyElement: any
}

const StickyCursor: React.FC<Props> = (props: Props) => {
    const { stickyElement } = props;

    const [isHovered, setIsHovered] = useState(false);
    const cursor = useRef(null);
    const cursorSize = isHovered ? 100 : 50;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const smoothOptions = { damping: 20, stiffness: 200, mass: 0.3 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const rotate = (distance: { x: number, y: number }) => {
        const angle = Math.atan2(distance.y, distance.x);
        animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 })
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

        const center = { x: left + width / 2, y: top + height / 2 }

        if (isHovered) {

            const distance = { x: clientX - center.x, y: clientY - center.y }

            rotate(distance)

            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
            const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3])
            const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8])
            scale.x.set(newScaleX);
            scale.y.set(newScaleY);

            mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
            mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
        }
        else {
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }

    const manageMouseLeave = () => {
        setIsHovered(false)
        animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 })
    }

    useEffect(() => {
        stickyElement.current.addEventListener("mouseenter", manageMouseOver)
        stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            stickyElement.current.removeEventListener("mouseenter", manageMouseOver)
            stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [isHovered])

    const template = ({ rotate, scaleX, scaleY }: any) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
    }

    return (
        <motion.div
            transformTemplate={template}
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                scaleX: scale.x,
                scaleY: scale.y,
            }}
            animate={{
                width: cursorSize,
                height: cursorSize
            }}
            className="fixed hidden z-0 mix-blend-luminosity lg:block w-[20px] h-[20px] bg-gray-400 rounded-full pointer-events-none"
            ref={cursor}>
        </motion.div>
    )
}

export default StickyCursor;