import PageTransition from '@/components/common/pageTransition'
import HomeSection from '@/components/homeSection'
import React from 'react'

const About: React.FC = () => {
  return (
    <PageTransition>
      <HomeSection heroPhrase="Banglore  based  front end  developer" />
    </PageTransition>
  )
}

export default About