import { navLinks } from '@/contstants'
import Link from 'next/link'
import React, { forwardRef } from 'react'
import Magnetic from '@/components/common/magnetic'

interface Props {
  props?: any
  ref: any
}

const NavBar: React.FC<Props> = forwardRef((props, ref) => {
  return (
    <div className='fixed box-border top-0 left-0 w-full h-[8dvh] z-50 lg:h-[10dvh] mix-blend-difference'>
      <div className='w-full h-full px-5 lg:px-20 font-roboto flex justify-between items-center'>
        <Link href='/' className='text-[3dvh] font-semibold font-sans tracking-wide text-zinc-300'>
          <Magnetic>
              Sahith
            <div ref={ref as any} className='absolute w-full h-full left-0 top-0 hover:scale-[3]' />
          </Magnetic>
        </Link>
        <div className='lg:flex gap-6 items-center justify-around hidden'>
          {
            navLinks.map((item, index) => {
              return (
                <Link className='text-[20px] text-zinc-300' href={item.path} key={index}>
                  <Magnetic>
                    {item.title}
                  </Magnetic>
                </Link>
              )
            })
          }
        </div>
        <div className='block lg:hidden' />
      </div>
    </div>
  )
})

export default NavBar