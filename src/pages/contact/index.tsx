'use client'
import FlowText from '@/components/common/flowText'
import PageTransition from '@/components/common/pageTransition'
import { RightArrow } from '@/icon'
import { socialLinks } from '@/data/resume'
import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const displayLinks = socialLinks.filter(l => l.title !== 'Email');

  return (
    <PageTransition>
      <div className='text-white mix-blend-difference max-w-[1200px] mx-auto px-10'>
        <div className='pt-[40px] gap-10 md:pt-[50px] lg:pt-[70px] flex flex-col md:flex-row justify-between'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Let&apos;s build something remarkable
          </motion.div>
          <div className='flex gap-5 flex-wrap'>
            {
              displayLinks.map((item, index) => {
                return (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    target='_blank'
                    className='border-2 border-zinc-300 rounded-full text-[14px] px-3 py-2 hover:bg-white hover:text-black transition-colors duration-500 mix-blend-difference'
                    href={item.path}
                  >
                    {item.title}
                  </motion.a>
                )
              })
            }
          </div>
        </div>
        <div className='mt-10 text-[2vh] lg:text-[4dvw]'>
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            href='mailto:sahith.sahi9866@gmail.com'
            className='py-14 border-b border-zinc-700 flex items-center justify-between'
          >
            <div>
              Email
            </div>
            <div>
              <RightArrow className='w-[60px] h-[60px] text-zinc-600' />
            </div>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            href='tel:7989575626'
            className='py-14 border-b border-zinc-700 flex items-center justify-between'
          >
            <div>
              Phone
            </div>
            <div>
              <RightArrow className='w-[60px] h-[60px] text-zinc-600' />
            </div>
          </motion.a>
        </div>
      </div>
      <div className='lg:mt-20 py-10'>
        <FlowText text="Say Hello" />
      </div>
    </PageTransition>
  )
}

export default Contact
