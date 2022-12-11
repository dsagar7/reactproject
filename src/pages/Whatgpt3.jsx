import React from 'react'
import { Footer, Possibility, Features, WhatGPT3 } from '../containers/index'
import { CTA, Navbar } from '../components/index'

const Whatgpt3 = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradiant__bg'>
                    <Navbar />
                    <WhatGPT3 />
                </div>
                <Features />
                <Possibility />
                <CTA />
                <Footer />
            </div>
        </div>
    )
}

export default Whatgpt3