import * as React from "react"

// styles
import "../styles/index.scss"

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

import Header from "../components/header"
import Footer from "../components/Footer"
import Description from "../components/Description"
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
    <Footer/>  
  </StyleProvider>
    </main>
  )
}

export default IndexPage
