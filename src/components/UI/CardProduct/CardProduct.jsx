import React from 'react'
import { ButtonShop } from '../ButtonShop/ButtonShop'

export const CardProduct = () => {
  return (
       <div className="card-products">
        <div className="box-product">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677359962/KJC_SUMMER_22_Gloss_Drip_Stop_Staring_EPI_q38zlw.webp" alt="" />
        <h2 className='name-product'>Lips New</h2>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
        <div className="box-product">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677359962/KJC_SUMMER_22_Gloss_Drip_Stop_Staring_EPI_q38zlw.webp" alt="" />
        <h2 className='name-product'>Lips New</h2>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
       </div>
    
  )
}