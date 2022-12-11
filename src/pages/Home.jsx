import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers/index'
import { CTA, Brand, Navbar } from '../components/index'

const Home = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradiant__bg'>
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </div>
    )
}

export default Home