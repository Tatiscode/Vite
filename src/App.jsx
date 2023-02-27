import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HomePage } from './components/Pages/HomePage'
import { BodyPage } from './components/Pages/BodyPage/BodyPage'
import { SectionPage } from './components/Pages/SectionPage/SectionPage'
import {Routes, Route} from 'react-router-dom'
import { NotFound } from './assets/NotFound/NotFound'

export function App() {
  return (
    <div className="App">
     <HomePage/>
     <BodyPage/>
     <SectionPage/>
     {/* <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/BodyPageKyle' element={<BodyPage/>}/>
     <Route path='/SectionPageKyle' element={<SectionPage/>}/>
     <Route path='/*' element={<NotFound/>}/>
     
     </Routes> */}
    </div>
  )
}



