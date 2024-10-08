import React from 'react';
import Magnetic from '@/components/common/magnetic';

import { motion } from 'framer-motion';

const socialLinks = [
  {
    title: 'Github',
    path: 'https://github.com/Dare-devil-23'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/saisahith/'
  },
  {
    title: 'X (Twitter)',
    path: 'https://twitter.com/Sahith9866'
  }
]

const Footer: React.FC = () => {
  return (
    <div className='relative h-[600px] lg:h-[470px] mix-blend-difference' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='relative h-[calc(100vh+600px)] lg:h-[calc(100vh+470px)] -top-[100vh]'>
        <div className='sticky top-[calc(100vh-600px)] lg:top-[calc(100vh-470px)] h-[600px] lg:h-[470px]'>
          <div className='px-5 py-8 bg-zinc-900 h-full'>
            <div className='flex gap-10 flex-col lg:flex-row'>
              <div className='w-full h-auto max-w-[400px] lg:w-[400px] rounded-xl bg-zinc-300'>
                <img src="/images/sahith-bg.webp" className='w-full h-full max-w-[400px]' />
              </div>
              <div className='flex gap-8 flex-col justify-around'>
                <div className='flex gap-3 items-start lg:items-end justify-between lg:justify-start'>
                  <div className='text-[4vh] leading-[4vh] text-white lg:text-[7dvw] lg:leading-[7dvw] uppercase'>
                    Lets <br /> Connect
                  </div>
                  <motion.a whileTap={{ scale: 0.9 }} href='mailto:sahith.sahi9866@gmail.com' className='rounded-full text-[14px] px-3 py-2 bg-zinc-300 lg:px-5 lg:py-3 font-semibold'>
                    <Magnetic>
                      <div className='flex w-full h-full'>
                        &bull; Get in touch
                      </div>
                    </Magnetic>
                  </motion.a>
                </div>
                <div className='flex gap-3 items-center'>
                  {
                    socialLinks.map((item, index) => {
                      return (
                        <Magnetic key={index}>
                          <a target='_blank' className='text-[16px] text-zinc-200 font-medium' href={item.path}>
                            {item.title}
                          </a>
                        </Magnetic>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='flex justify-between text-[12px] lg:text-[14px] items-center text-zinc-300 mt-10'>
              <div>
                @sahith {new Date().getFullYear()}
              </div>
              <div>
                Made with ❤️ by me.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer