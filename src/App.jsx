import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HomePage } from './components/Pages/HomePage'
import { BodyPage } from './components/Pages/BodyPage/BodyPage'
import { SectionPage } from './components/Pages/SectionPage/SectionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <HomePage/>
     <BodyPage/>
     <SectionPage/>
    </div>
  )
}

export default App
