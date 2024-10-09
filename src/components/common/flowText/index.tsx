import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxTextProps {
    children: React.ReactNode;
    baseVelocity?: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity = 100 }: ParallaxTextProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });


    return (
        <div className={`overflow-hidden pb-[5dvw] whitespace-nowrap flex flex-nowrap text-white py-2`}>
            <motion.div className="font-semibold tracking-wide uppercase leading-[7dvw] text-[7dvw] whitespace-nowrap flex flex-nowrap" style={{ x }}>
                <span className="block mr-[30px]">
                    {children}
                </span>
                <span className="block mr-[30px]">
                    {children}
                </span>
                <span className="block mr-[30px]">
                    {children}
                </span>
                <span className="block mr-[30px]">
                    {children}
                </span>
            </motion.div>
        </div>
    );
}

interface Props {
    text: string;
}

const FlowText: React.FC<Props> = (props: Props) => {
    const { text } = props;
    return (
        <section >
            <ParallaxText baseVelocity={-1}>
                {`${text} | ${text} |`}
            </ParallaxText>
        </section>
    );
}

export default FlowText;