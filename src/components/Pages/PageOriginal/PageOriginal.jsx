import React from 'react'
import { SectionTwoPage } from '../../Layouts/SectionTwoPage/SectionTwoPage'
import ArticlePage from '../ArticlePage/ArticlePage'
import AsideTwoPage from '../AsideTwoPage/AsideTwoPage'
import { BodyPage } from '../BodyPage/BodyPage'
import FooterPage from '../FooterPage/FooterPage'
import { HomePage } from '../HomePage/HomePage'
import { SectionPage } from '../SectionPage/SectionPage'


function PageOriginal() {
  return (
    <div className="div-try">
    <BodyPage/>
    <SectionPage/>
    <SectionTwoPage/>
    <AsideTwoPage/>
    <ArticlePage/>
    <FooterPage/>
    </div>
  )
}

export default PageOriginal