import React from 'react'
import CardCategory from '../../UI/CardCategory/CardCategory'
import { TitleTwo } from '../../UI/TitleTwo/TitleTwo'

export default function ArticleCategory() {
  return (
      <div className="container-article-category">
        <TitleTwo textTitle="SHOP BY BRAND" style="title-section-category"/>
        <CardCategory/>

      </div>
  
  )
}
