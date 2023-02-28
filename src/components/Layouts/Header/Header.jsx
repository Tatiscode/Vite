import React from 'react'
import { Navegation } from '../../UI/Navegation/Navegation'
import { Options } from '../../UI/Options/Options'
import { Title } from '../../UI/Title/Title'
import { Welcome } from '../../UI/Welcome/Welcome'

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