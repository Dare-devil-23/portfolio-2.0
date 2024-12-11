import React from 'react'
import PageTransition from '@/components/common/pageTransition';
import HomeSection from '@/components/homeSection';
import ProjectSection from '@/components/projectSection';

const Phrase: React.FC = () => {
  return (
    <>
      <span className='pl-[12dvw]'>
        a full stack
      </span>
      <br /> developer
      <br /> who loves
      <br /> design
    </>
  )
}

const Home: React.FC = () => {
  return (
    <PageTransition>
      <HomeSection heroPhrase={<Phrase />} />
      <ProjectSection />
    </PageTransition>
  )
}

export default Home