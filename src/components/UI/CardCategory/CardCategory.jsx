import React from 'react'
import { TitleTwo } from '../TitleTwo/TitleTwo'

function CardCategory() {
  return (
    <div className="container-cards-categorys">
        <div className="card-category">
        <img className="img-category" src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677765935/category_smonhe.webp" alt="" />
        <TitleTwo style="title-category" textTitle="KYLE COSMETICS"/>
        </div>
        <div className="card-category">
        <img className="img-category" src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677765935/category_smonhe.webp" alt="" />
        <TitleTwo style="title-category" textTitle="KYLE SKIN"/>
        </div>
        <div className="card-category">
        <img className="img-category" src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677765935/category_smonhe.webp" alt="" />
        <TitleTwo style="title-category" textTitle="KYLE BABY"/>
        </div>
    </div>
  )
}

export default CardCategory