import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/index.scss"
import 'semantic-ui-css/semantic.min.css'

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

export default function Home() {  
   
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Kitchen Concept</title>
      </head>
      < MenuProvider> 
    <Header  /> 
  </MenuProvider>
    <div className="legalInfo-div">
        <h1>Disclaimer</h1>
        <h2>Legal notice</h2>
        <p>
          Delivery Hero SE constantly checks and updates the information on its
          web pages. Despite the utmost care taken, we cannot rule out that some
          of the data may since have become outdated. Therefore, we cannot
          accept liability for the currency, accuracy and completeness of the
          information displayed. The same applies to all other web pages that
          can be reached via hyperlink. Delivery Hero SE is not responsible for
          the content of websites which can be reached via such links.
          Furthermore, Delivery Hero SE reserves the right to make changes or
          additions to the information displayed. Content and structure of the
          Delivery Hero SE website is protected by copyright. The reproduction
          of information or data, in particular the use of texts, text excerpts
          or illustrative material, requires our prior approval. We wish you an
          informative stay on our pages and would welcome any suggestions,
          requests or criticism you may have.
        </p>
      </div>
      < StyleProvider> 
    <Footer/>  
  </StyleProvider>
    </div>
  )
}
