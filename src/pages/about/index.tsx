import React, { useEffect, useState } from 'react'
import AboutSection from '@/components/aboutSection'
import PageTransition from '@/components/common/pageTransition'
import HomeSection from '@/components/homeSection'
import { motion } from 'framer-motion'

const Phrase: React.FC = () => {
  return (
    <>
      <span className='pl-[12dvw]'>
        An Indian
      </span>
      <br /> based
      <br /> front end
      <br /> developer
    </>
  )
}

const About: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate blur percentage based on scroll
      const maxScroll = windowHeight
      const blur = Math.min((scrollY / maxScroll) * 100, 100)
      setBlurAmount(blur)
    }

    // Listen to scroll event
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <PageTransition>
      <div className='relative'>
        <motion.div
          className=''
          initial={{ filter: 'backdrop-filter(0px)' }}
          animate={{ filter: `backdrop-filter(${blurAmount / 10}px)` }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        />
        <HomeSection heroPhrase={<Phrase />} staticBg />
        <AboutSection />
      </div>
    </PageTransition>
  )
}

export default About
