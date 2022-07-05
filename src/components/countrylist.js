import React from "react"
import { Dropdown } from 'semantic-ui-react'
import {graphql, useStaticQuery } from "gatsby";


// const countryOptions = [
//   { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile ' , as: 'a',target:"_blank", href:'https://www.pedidosya.cl/cadenas/itacate'},
//   { key: 'pa', value: 'pa', flag: 'pa', text: 'Panama', as: 'a',target:"_blank", href:'https://www.pedidosya.com.pa/cadenas/itacate' },
//   { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore', as: 'a', target:"_blank", href:'https://www.foodpanda.sg/chain/ct5ym/itacate' },
// ]
const CountryList = () => {
  const action = (e, { value }) =>{
    //console.log ("value", value)
  }

  const data = useStaticQuery(graphql`
  {
    allWpCountry {
      edges {
        node {
          country {
            link
            value
          }
          title
        }
      }
    }
  }
`);

const countryArray = [ ]
data.allWpCountry.edges.map(c=>{
  countryArray.push({ key: c.node.country.value, value: c.node.country.value, flag: c.node.country.value, text:  c.node.title, as: 'a',target:"_blank", href: c.node.country.link})
})
  return (
   <div>

    <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryArray}
    onChange = {action}
  />
   </div>
  )
}

export default CountryList
