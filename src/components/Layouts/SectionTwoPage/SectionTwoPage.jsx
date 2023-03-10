import React from 'react'
import { ButtonShop } from '../../UI/ButtonShop/ButtonShop'
import { Phrase } from '../../UI/Phrase/Phrase'
import { TitleTwo } from '../../UI/TitleTwo/TitleTwo'
import './sectionTwoPage.css'

 export function SectionTwoPage() {
  return (
    <div className="container-section-two-page">
      <div className="img">
        <img className="kyle-img" src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677849641/kylies-valentines-day-lookv2_740x545_crop_center_lk0hme.webp" alt="" />
      </div>
        <div className="two-box-section">
        <TitleTwo textTitle="SOLD-OUT LIP TINT IS BACK " style="title-kyle"/>
        <Phrase textPharse="get yours before it?s gone again" style="phrase-kyle"/>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
    </div>
  )
}
