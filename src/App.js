import './App.css';
import React from 'react'
import { Home, OpenAi, CaseStudies, Whatgpt3, Library } from './pages/imports';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gototop from './components/gototop';


const App = () => {
  return (

    <BrowserRouter>
    
      <Routes>
        <Route path='/reactproject' element={<Home />}/>
        <Route path='/reactproject/whatgpt3' element={<Whatgpt3 />}/>
        <Route path='/reactproject/openai' element={<OpenAi />}/>
        <Route path='/reactproject/casestudies/features' element={<CaseStudies/>}/>
        <Route path='/reactproject/library' element={<Library />}/>
      </Routes>
      <Gototop />
    </BrowserRouter>
  )
}

export default App
