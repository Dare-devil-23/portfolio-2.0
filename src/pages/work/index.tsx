import PageTransition from '@/components/common/pageTransition'
import ProjectSection from '@/components/projectSection'
import FlowText from '@/components/common/flowText'
import React from 'react'

const Work: React.FC = () => {
  return (
    <PageTransition>
      <ProjectSection />
      <div className='py-10 bg-zinc-900 mt-10'>
        <FlowText text="Frontend Engineer" />
      </div>
    </PageTransition>
  )
}

export default Work
