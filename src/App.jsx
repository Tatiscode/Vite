import './App.css'
import { HomePage } from './components/Pages/HomePage/HomePage'
import { BodyPage } from './components/Pages/BodyPage/BodyPage'
import { SectionPage } from './components/Pages/SectionPage/SectionPage'
import {Routes, Route} from 'react-router-dom'
import { NotFound } from './assets/NotFound/NotFound'
import AsideTwoPage from './components/Pages/AsideTwoPage/AsideTwoPage'
import ArticlePage from './components/Pages/ArticlePage/ArticlePage'
import FooterPage from './components/Pages/FooterPage/FooterPage'
import { SectionTwo } from './components/Pages/SectionTwo/SectionTwo'
import FormContatcUs from './components/Pages/FormContactUs/FormContatcUs'

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
     <FormContatcUs/>

     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/ContactUs' element={<FormContatcUs/>}/>
     <Route path='/Error*' element={<NotFound/>}/>
     </Routes>
    </div>
  )
}



