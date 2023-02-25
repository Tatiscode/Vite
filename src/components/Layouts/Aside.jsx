import React from 'react'
import { ButtonShop } from '../UI/ButtonShop/ButtonShop'
import { ImagenBackground } from '../UI/ImagenBackground/ImagenBackground'
import { Phrase } from '../UI/Phrase/Phrase'
import { TitleTwo } from '../UI/TitleTwo/TitleTwo'

export const Aside = () => {
  return (

    <div className="container">
      <div className="container-img">
        <ImagenBackground/>
      </div>
      <div className="container-aside">
        <TitleTwo/>
        <Phrase/>
        <ButtonShop/>
      </div>
    </div>

  )
}
