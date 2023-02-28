import React from 'react'
import { Phrase } from '../../UI/Phrase/Phrase'
import { TitleTwo } from '../../UI/TitleTwo/TitleTwo'
import './sectionTwoPage.css'

 export function SectionTwoPage() {
  return (
    <div className="container-section-two-page">
        <TitleTwo textTitle="SOLD-OUT LIP TINT IS BACK" style=""/>
        <Phrase textPharse="get yours before it?s gone again" style=""/>
        <ButtonShop textButton = "shop now" style="btn-1" />

    </div>
  )
}
