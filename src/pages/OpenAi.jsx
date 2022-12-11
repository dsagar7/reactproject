import React from 'react'
import { Footer, Possibility, Features, Header } from '../containers/index'
import { CTA, Navbar } from '../components/index'

const OpenAi = () => {
  return (
    <div>
        <div className='App'>
                <div className='gradiant__bg'>
                    <Navbar />
                    <Possibility />
                </div>
                
                <Header />
                <Features />
                <CTA />
                <Footer />
            </div>
    </div>
  )
}

export default OpenAi