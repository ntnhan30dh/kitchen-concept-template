import * as React from "react";

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

import { useIntl } from "gatsby-plugin-react-intl"
// markup
const IndexPage = () => {
  const intl = useIntl();
  const locale = intl.locale !== "en" ? `/${intl.locale}` : "";
  return (
    <main>
      <title>Kitchen Concept</title>
      <StyleProvider>
        <MenuProvider>
          <Header intl={intl} locale={locale}/>
        </MenuProvider>
        <Description intl={intl} locale={locale}/>
        {/* <Menu type={1} intl={intl} /> */}
        {/* <Menu type={2} /> */}
        {/* <Menu type={2} intl={intl} margin="left" />
        <Menu type={2} intl={intl} margin="right" /> */}
        <Ig intl={intl} />
        {/* <Platform /> */}
        {/* <Footer /> */}
      </StyleProvider>
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

