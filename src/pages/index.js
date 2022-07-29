import React, { useState, useEffect } from "react";

// styles
import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "semantic-ui-css/semantic.min.css";

import { MenuProvider } from "../components/context/menuContext";
import { StyleProvider } from "../components/context/styleContext";

import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/description";
import Menu from "../components/menu";
import Ig from "../components/ig";
import Platform from "../components/platform";
// markup
const IndexPage = () => {
  let [windowIs, setWindowIs] = useState(typeof window !== "undefined");
  let [locale, setLocale] = useState("");

  useEffect(() => {
    if (windowIs) {
      const url = window.location.href;
      setLocale(url.indexOf("/es") > -1 ? "es" : "en");
    }
  });
  const lang = locale === "es" ? "es" : "en";
  return (
    <main>
      <title>Kitchen Concept</title>(
      <StyleProvider>
        <MenuProvider>
          <Header locale={lang} />
        </MenuProvider>
        <h1>{windowIs && locale}</h1>
        {/* <Description locale={lang} /> */}
        {/* <Menu type={1} /> */}
        {/* <Menu type={2} /> */}
        {/* <Menu type={2} intl={intl} margin="left" />
        <Menu type={2} intl={intl} margin="right" /> */}
        {/* <Ig  /> */}
        {/* <Platform /> */}
        {/* <Footer /> */}
      </StyleProvider>
      )
    </main>
  );
};

export default IndexPage;

// example dynamic query

/* 
export const query = graphql`
query MyQuery($locale: String!) {
  allWpHeaderItem(filter: {language:{slug:{eq:$locale}}}) {
    edges {
      node {
        headerItems {
          id
        }
        title
        language {
          slug
        }
      }
    }
  }
}

`; */
