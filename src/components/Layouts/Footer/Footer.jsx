import React from 'react'
import { ButtonShop } from '../../UI/ButtonShop/ButtonShop'
import Contact from '../../UI/Contact/Contact'
import Cookies from '../../UI/Cookies/Cookies'
import InputEmail from '../../UI/InputEmail/InputEmail'
import { Phrase } from '../../UI/Phrase/Phrase'
import SocialNetworks from '../../UI/SocialNetworks/SocialNetworks'

function Footer() {
  return (
   <div className="container-footer">
    <Phrase  textPharse="SHOP OUR FREE" style="title-section-category"/>
    <Phrase  textPharse="sign up for updates:" style="bold"/>

    <div className="input">
        <InputEmail/>
        <ButtonShop textButton = "shop now" style="btn-1" />
    </div>
    <Phrase textPharse="by signing up you agree to our terms." style="credits"/>
    <SocialNetworks/>
    <Contact/>
    <Cookies/>
   </div>
  )
}

export default Footer