import * as React from "react"

// styles
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

import Header from "../components/header"
import Footer from "../components/Footer"
import Description from "../components/Description"
import Menu from "../components/Menu"
// markup
const IndexPage = () => {
 
  return (
    <main >
      <title>Kitchen Concept</title>
      < MenuProvider> 
    <Header  /> 
  </MenuProvider>
  < StyleProvider> 
    {/* <Description/>  
    <Footer/>   */}
    <Menu/>
  </StyleProvider>
    </main>
  )
}

export default IndexPage
