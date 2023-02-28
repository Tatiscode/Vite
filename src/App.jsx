import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HomePage } from './components/Pages/HomePage/HomePage'
import { BodyPage } from './components/Pages/BodyPage/BodyPage'
import { SectionPage } from './components/Pages/SectionPage/SectionPage'
import {Routes, Route} from 'react-router-dom'
import { NotFound } from './assets/NotFound/NotFound'
import { SectionTwo } from './components/Layouts/SectionTwo/SectionTwo'
import AsideTwoPage from './components/Pages/AsideTwoPage/AsideTwoPage'
import ArticlePage from './components/Pages/ArticlePage/ArticlePage'
import FooterPage from './components/Pages/FooterPage/FooterPage'

export function App() {
  return (
    <div className="App">
     <HomePage/>
     <BodyPage/>
     <SectionPage/>
     <SectionTwo/>
     <AsideTwoPage/>
     <ArticlePage/>
     <FooterPage/>

     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/BodyPageKyle' element={<BodyPage/>}/>
     <Route path='/*' element={<NotFound/>}/>
     </Routes>
    </div>
  )
}



