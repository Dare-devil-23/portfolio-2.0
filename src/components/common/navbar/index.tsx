import { navLinks } from '@/constants'
import Link from 'next/link'
import React, { forwardRef, useState } from 'react'
import Magnetic from '@/components/common/magnetic'
import { motion, AnimatePresence } from 'framer-motion'
import { HamburgerIcon, CloseIcon } from '@/icon'

interface Props {
  props?: any
  ref: any
}

const NavBar: React.FC<Props> = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='fixed box-border top-0 left-0 w-full h-[8vh] z-50 lg:h-[10vh] mix-blend-difference'>
        <div className='w-full h-full px-5 lg:px-20 font-roboto flex justify-between items-center'>
          <Link href='/' className='text-[3vh] font-semibold font-sans tracking-wide text-zinc-300'>
            <Magnetic>
                Sahith
              <div ref={ref as any} className='absolute w-full h-full left-0 top-0 hover:scale-[3]' />
            </Magnetic>
          </Link>
          <div className='hidden lg:flex gap-6 items-center justify-around'>
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
          <button
            className='lg:hidden text-zinc-300 z-[60]'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
          >
            <HamburgerIcon className='w-8 h-8' />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className='fixed inset-0 bg-zinc-900 z-[100] flex flex-col items-center justify-center'
          >
            <button
              className='absolute top-6 right-6 text-zinc-300'
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
            >
              <CloseIcon className='w-8 h-8' />
            </button>
            <nav className='flex flex-col gap-8 items-center'>
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                >
                  <Link
                    className='text-4xl text-zinc-200 uppercase font-medium tracking-wide'
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

NavBar.displayName = 'NavBar';

export default NavBar
