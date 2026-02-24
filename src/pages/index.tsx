import React from 'react'
import PageTransition from '@/components/common/pageTransition';
import HomeSection from '@/components/homeSection';
import IntroSection from '@/components/introSection';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Phrase: React.FC = () => {
  return (
    <>
      <span className='pl-[12dvw]'>
        Crafting
      </span>
      <br /> digital
      <br /> experiences
      <br /> that resonate
    </>
  )
}

const Home: React.FC = () => {
  return (
    <PageTransition>
      <HomeSection heroPhrase={<Phrase />} />
      <IntroSection />
      <div className='flex justify-center py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href='/work'
            className='border-2 border-zinc-800 rounded-full px-8 py-4 text-lg font-medium hover:bg-zinc-900 hover:text-white transition-colors duration-300'
          >
            Explore my work &rarr;
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Home
