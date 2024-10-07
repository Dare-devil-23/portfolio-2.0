import React from 'react'
import PageTransition from '@/components/common/pageTransition';
import HomeSection from '@/components/homeSection';
import ProjectSection from '@/components/projectSection';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <HomeSection heroPhrase="a front end  developer  who loves  design"/>
      <ProjectSection />
    </PageTransition>
  )
}

export default Home