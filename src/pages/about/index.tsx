import React, { useCallback, useState } from 'react'
import AboutSection from '@/components/aboutSection'
import PageTransition from '@/components/common/pageTransition'
import HomeSection from '@/components/homeSection'

const Phrase: React.FC = () => {
  return (
    <>
      <span className='pl-[12dvw]'>
        The mind
      </span>
      <br /> behind
      <br /> the
      <br /> interfaces
    </>
  )
}

const About: React.FC = () => {
  const [bgPinned, setBgPinned] = useState(true)

  const handleIntersect = useCallback((isIntersecting: boolean) => {
    setBgPinned(!isIntersecting)
  }, [])

  return (
    <PageTransition>
      <div className='relative'>
        <HomeSection heroPhrase={<Phrase />} staticBg bgPinned={bgPinned} />
        <AboutSection onIntersect={handleIntersect} />
      </div>
    </PageTransition>
  )
}

export default About
