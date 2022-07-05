import React from "react";
import {graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import {useStyle} from './context/styleContext'
import OrderNow from './orderNow'

import pic from "../images/description.png";

const DescriptionCard2 = (props) => {
    const style = useStyle()
    const intl = useIntl();
    const data = useStaticQuery(graphql`
    {
      allWpPage (filter: {title:{eq:"Description"}}) {
        edges  {
          node  {
            language {
              slug
            }
            title
            imageAndTextSection {
              imageAndText {
                copy
                title
                image {
                  localFile {
                    url
                  }
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
  })[0].node.imageAndTextSection.imageAndText

  return (
    <article className={`descriptionCard ${props.article} bg-cover bg-center relative mb-12`}style={{backgroundImage: "url(" + content.image.localFile.url + ")"}}>
      <div className="w-full h-full absolute top-0 left-0 bg-white opacity-40 z-10"></div>
      <div className={`relative z-20 text max-w-500px px-4 md:px-0 ${props.text}`}>
      <h2 className={`${style.text.h2} `}>{content.title}</h2>
      <p className={`${style.text.body1} mt-2 md:mt-3 max-w-500px  `}>
      {content.copy} 
      </p>
      <OrderNow padding=" py-4 md:py-5 md:px-10 my-10" button="w-full md:w-auto "/>
      </div>
      <div>

      </div>
    </article>
  );
};

export default DescriptionCard2;
