import React from 'react'
import { Footer, Possibility, Features } from '../containers/index'
import { CTA, Brand, Navbar } from '../components/index'

const CaseStudies = () => {
  return (
    <div>
        <div className='App'>
                <div className='gradiant__bg'>
                    <Navbar />
                    <Features />
                </div>
                <Brand />
                <Possibility />
                <CTA />
                <Footer />
            </div>
    </div>
  )
}

export default CaseStudies