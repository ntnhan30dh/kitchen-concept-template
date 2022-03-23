import * as React from "react"

// styles
import "../styles/index.scss"

import {MenuProvider} from "../components/context/menuContext"
//import {StyleProvider} from "../components/context/styleContext"

import Header2 from "../components/Header2"
// markup
const Version2 = () => {
 
  return (
    <main >
      <title>Kitchen Concept</title>
      < MenuProvider> 
    <Header2 /> 
  </MenuProvider>
    </main>
  )
}

export default Version2
