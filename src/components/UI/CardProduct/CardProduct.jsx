import React from 'react'
import { ButtonShop } from '../ButtonShop/ButtonShop'

export const CardProduct = () => {
  return (
       <div className="card-products">
        <div className="box-product">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677849395/homepage_desktop_glow_balms_730x_l3le9x.webp" alt="" />
        <div className="info-center">
        <h2 className='name-product'>Lips New</h2>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
        </div>
        <div className="box-product">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1677849395/homepage_desktop_glow_balms_730x_l3le9x.webp" alt="" />
        <div className="info-center">
        <h2 className='name-product'>Lips New</h2>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
        </div>
       </div>
    
  )
}