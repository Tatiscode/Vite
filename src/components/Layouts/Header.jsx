import React from 'react'
import { Navegation } from '../UI/Navegation'
import { Options } from '../UI/Options'
import { Title } from '../UI/Title'
import { Welcome } from '../UI/Welcome'

export const Header = () => {
  return (

    <div className="box-container">
      <Welcome/>

    <div className="container-header">
      <Navegation/>
      <Title/>
      <Options/>
    </div>
    
    </div>
  )
}   