import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { profile } from '@/data/resume';

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.3em] inline-block">
      {word}
    </motion.span>
  );
};

const IntroSection: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.3'],
  });

  const words = profile.summary.split(' ');

  return (
    <section ref={container} className="py-[15vh] lg:py-[20vh] px-8 lg:px-[12dvw]">
      <p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed lg:leading-[1.4] font-medium text-zinc-900 flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
        })}
      </p>
    </section>
  );
};

export default IntroSection;
