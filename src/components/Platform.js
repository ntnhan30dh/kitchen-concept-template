import React from "react";
import {graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import { useStyle } from "./context/styleContext";

import pic from "../images/platform.png"
const Platform = () => {
  const style = useStyle();
  const intl = useIntl();
    const data = useStaticQuery(graphql`
    {
      allWpPage(filter: {title: {eq: "Platform"}}) {
        edges {
          node {
            language {
              slug
            }
            titleAndCopy {
              title
              copy
            }
          }
        }
      }

      allWpPlatformItem {
        edges {
          node {
            featuredImage {
              node {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allWpPage.edges
  .filter((n) => {
    return n.node.language.slug === intl.locale;
  })[0].node

  const iconItem = (img) =>{
    return(
      <div className="w-40 md:w-44 m-4">
        <img src={img} alt="platform" className="w-full" />
        </div>
    )
  }
  //const icons = [pic,pic,pic,pic,pic,pic,pic,pic]
  const icons = data.allWpPlatformItem.edges

  return (
    <section className={`platform ${style.mx} ${style.my}  `}>
      <div className={`text text-center ${style.mb_sm}`}>
        <h2 className={`${style.text.h2} mb-4`}> {content.titleAndCopy.title}</h2>
        <p className={`${style.text.body1} max-w-xl mx-auto`}>
          {content.titleAndCopy.copy}
        </p>
      </div>
      <div className="logos flex flex-wrap justify-center max-w-4xl mx-auto">
        {icons.map(i=>iconItem(i.node.featuredImage.node.localFile.url))}
      </div>
    </section>
  );
};

export default Platform;
