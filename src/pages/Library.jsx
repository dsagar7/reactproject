import React from 'react'
import { Footer, Blog, Possibility, Features} from '../containers/index'
import { CTA, Brand, Navbar } from '../components/index'

const Library = () => {
  return (
    <div>
        <div className='App'>
                <div className='gradiant__bg'>
                    <Navbar />
                    <Blog />
                </div>
                <Brand />
                <Features />
                <Possibility />
                <CTA />
                <Footer />
            </div>
    </div>
  )
}

export default Library