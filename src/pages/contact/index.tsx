'use client'
import PageTransition from '@/components/common/pageTransition'
import { RightArrow } from '@/icon'
import React from 'react'

const socialLinks = [
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/saisahith/'
  },
  {
    title: 'X (Twitter)',
    path: 'https://twitter.com/Sahith9866'
  }
]

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className='text-white mix-blend-difference max-w-[1200px] mx-auto px-10'>
        <div className='pt-[40px] gap-10 md:pt-[50px] lg:pt-[70px] flex flex-col md:flex-row justify-between'>
          <div>
            You are just a click away
          </div>
          <div className='flex gap-10'>
            {
              socialLinks.map((item, index) => {
                return (
                  <a target='_blank' className='border-2 border-zinc-300 rounded-full text-[14px] px-3 py-2 hover:bg-white hover:text-black transition-colors duration-500 mix-blend-difference' href={item.path} key={index}>
                    {item.title}
                  </a>
                )
              })
            }
          </div>
        </div>
        <div className='mt-10 text-[2dvh] lg:text-[4dvw]'>
          <a href='mailto:sahith.sahi9866@gmail.com' className='py-14 border-b border-zinc-700 flex items-center justify-between'>
            <div>
              Email
            </div>
            <div>
              <RightArrow className='w-[60px] h-[60px] text-zinc-600' />
            </div>
          </a>
          <a href='tel:7989575626' className='py-14 border-b border-zinc-700 flex items-center justify-between'>
            <div>
              Phone
            </div>
            <div>
              <RightArrow className='w-[60px] h-[60px] text-zinc-600' />
            </div>
          </a>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact