'use client';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { text, curve, translate } from '@/components/common/pageTransition/varients';

interface Props {
    children: React.ReactNode
}

const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/work": "Work",
}

const anim = (variants: Record<string, Object>) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

const SVG: React.FC<{ height: number, width: number }> = ({ height, width }: { height: number, width: number }) => {

    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg style={{ willChange: 'transform' }}  fill="#3d3d3d" className="w-[100dvw] h-[calc(100vh+600px)] top-[-300px] z-40 left-0 fixed pointer-events-none" {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}

const PageTransition: React.FC<Props> = (props: Props) => {

    const { children } = props;

    const router = useRouter();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <div>
            <div style={{ opacity: dimensions.width === 0 ? 1 : 0 }} className='bg-black w-[100dvw] h-[calc(100vh+600px)] top-[-300px] left-0 fixed pointer-events-none' />
            <motion.p className='absolute left-[50%] top-[40%] text-white text-[46px] z-50 -translate-x-[50%] text-center' {...anim(text)}>
                {routes[router.route as keyof typeof routes]}
            </motion.p>
            {dimensions.width !== 0 && <SVG {...dimensions} />}
            {
                children
            }
        </div>
    )
}

export default PageTransition;