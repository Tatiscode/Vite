import React from 'react'
import { ButtonShop } from '../ButtonShop/ButtonShop'

export const CardProduct = () => {
  return (
       <div className="card-products">

        <div className="box-product">
        <h2 className='name-product'>Lips New</h2>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
        <div className="box-product">
        <h2 className='name-product'>Lips New</h2>
        <ButtonShop textButton = "shop now" style="btn-1" />
        </div>
       </div>
    
  )
}