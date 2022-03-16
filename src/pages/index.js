import * as React from "react"

// styles
import "../styles/index.scss"

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

import Header from "../components/header"
// markup
const IndexPage = () => {
 
  return (
    <main >
      <title>Kitchen Concept</title>
      < MenuProvider> 
    <Header  /> 
  </MenuProvider>
    </main>
  )
}

export default IndexPage
