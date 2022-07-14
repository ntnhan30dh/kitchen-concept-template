import React from "react"
//import Header from "../components/header"
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
      <StyleProvider>
      < MenuProvider> 
    {/* <Header  />  */}
  </MenuProvider>
      </StyleProvider>
    <div className="legalInfo-div">
        <h1>Imprint</h1>
        <h2>Editorial Responsibility</h2>
        <p>
          Delivery Hero SE <br />
          Information according to § 5 TMG (Telekommunikationsgesetz) <br />
          Oranienburger Straße 70
          <br />
          10117 Berlin
          <br />
          Germany
        </p>
        <h3>Management Board</h3>
        <ul>
          <li>
            Niklas Östberg (CEO) <br />
          </li>
          <li>
            Emmanuel Thomassin (CFO) <br />
          </li>
        </ul>
        <h3>Supervisory Board</h3>
        <ul>
          <li>Dr. Martin Enderle (Chairman)</li>
        </ul>
        <h3>Contact</h3>
        <p>
          Phone: +49 (30) 54 44 59 000 <br />
          Email: hello@kitchen-concept.com
        </p>
        <p>
          Registergericht/district court: Amtsgericht Berlin-Charlottenburg /
          Local Court Charlottenburg Berlin <br />
          Handelsregister/Commercial Register: HRB 198015 B<br />
          Umsatzsteuer-Identifikationsnummer/ VAT–ID No.: DE 815294913 <br />
          Responsible for the content according to § 55 RStV
          (Rundfunkstaatsvertrag / Interstate Broadcasting Agreement): Niklas
          Östberg
        </p>
      </div>
      < StyleProvider> 
    <Footer/>  
  </StyleProvider>
    </div>
  )
}
