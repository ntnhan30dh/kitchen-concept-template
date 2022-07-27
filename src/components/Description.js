import React from "react";
import { useStyle } from "./context/styleContext";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl"
import DescriptionCard from "./descriptionCard";
import DescriptionCard2 from "./descriptionCard2";

const Description = (props) => {
  const style = useStyle();
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { title: { eq: "Description" } }) {
        edges {
          node {
            language {
              slug
            }
            layout {
              layout
            }
          }
        }
      }
    }
  `);
  const layout = data.allWpPage.edges.filter((n) => {
    return n.node.language.slug === intl.locale;
  })[0].node.layout.layout;
  const left1 = {
    article: "md:my-10 xl:my-24  md:flex flex-row-reverse items-center",
    text: "md:mr-10 xl:mr-32",
  };
  const right1 = {
    article: "mr-16  md:my-10  xl:my-24 md:flex  items-center",
    text: "md:ml-10 xl:ml-32",
  };

  const left2 = {
    article: "md:p-10 xl:p-24  md:flex  items-center",
    text: "pt-10 ",
  };
  const center2 = {
    article: "md:p-10 xl:p-24",
    text: "text-center pt-10 mx-auto",
  };

  const right2 = {
    article: "md:p-10 xl:p-24 md:flex  items-center justify-end",
    text: "pt-10 md:max-w-1/2 md:w-1/2",
  };

  const layout1 = layout === "left" ? left1 : right1;
  let layout2 = "";
  switch (layout) {
    case "left":
      layout2 = left2;
      break;
    case "center":
      layout2 = center2;
      break;
    case "right":
      layout2 = right2;
      break;
    default:
        layout2 = left2;
  }

  return (
    <section className="description mt-10 " id="story">
      <h1>
      {layout}
      </h1>
      <DescriptionCard
        article={`${style.mx} ${layout1.article}`}
        text={layout1.text}
      />
      {/* <DescriptionCard article={`${style.mx}  mr-16  md:my-10  xl:my-24 md:flex  items-center`}  text="md:ml-10 xl:ml-32"/> */}
      <DescriptionCard2
        article={layout2.article}
        text={layout2.text}
      />
      {/* <DescriptionCard2 article="md:p-10 xl:p-24"  text="text-center pt-10 mx-auto"/>
    <DescriptionCard2 article="md:p-10 xl:p-24  md:flex  items-center justify-end"  text="pt-10 md:max-w-1/2 md:w-1/2"/> */}
    </section>
  );
};

export default Description;
