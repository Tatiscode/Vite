import React from 'react'

export const ButtonShop = ({style, textButton = "shop now"}) => {
  return (
    <button className={style}>{textButton}</button>
  )
}
