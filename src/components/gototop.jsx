import React from 'react'

import { FaArrowUp } from 'react-icons/fa'
import './gototop.css'

const Gototop = () => {

    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }

  return (
   
    <div className='top-btn-div' onClick={goToBtn}>
    <div className='top-btn' >
        <FaArrowUp className='top-btn-btn'/>
    </div>
    </div>
    
  )

}

export default Gototop