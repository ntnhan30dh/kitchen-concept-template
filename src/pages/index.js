import * as React from "react"

// styles
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description"
import Menu from "../components/Menu"
import IG from "../components/IG"
import Platform from "../components/Platform"
// markup
const IndexPage = () => {
 
  return (
    <main >
      <title>Kitchen Concept</title>
      < MenuProvider> 
    <Header  /> 
  </MenuProvider>
  < StyleProvider> 
    <Description/>  
    <Menu type={1}/>
    <Menu type={2}/>
    <Menu type={2} margin="left"/>
    <Menu type={2} margin="right"/>
    <IG/>
    <Platform/>
    <Footer/>  
  </StyleProvider>
    </main>
  )
}

export default IndexPage
