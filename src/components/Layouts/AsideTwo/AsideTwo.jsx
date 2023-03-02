import React from 'react'
import CardShop from '../../UI/CardShop/CardShop'
import { TitleTwo } from '../../UI/TitleTwo/TitleTwo'

function AsideTwo() {
  return (
    <div className="container-aside-two">
        <TitleTwo textTitle="BEST SELLERS" style="title-product-shop"/>
        <CardShop/>
    </div>
  )
}

export default AsideTwo