import React from "react";
import {graphql, useStaticQuery } from "gatsby";
import { useStyle } from "./context/styleContext";
import OrderNow from './orderNow'

const Menu2 = (props) => {
  const style = useStyle();
  const intl = props.intl
    const data = useStaticQuery(graphql`
    {
      allWpPage(filter: {title: {eq: "Menu"}}) {
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
      allWpMenuCard {
        edges {
          node {
            title
            language {
              slug
            }
            menuCard {
              description
              type
            }
          }
        }
      }
    }
  `);
  const menuType = {
    category1: [
      "category1.1",
      "category1.2",
      "category1.3",
      "category1.4",
      "category1.5",
      "category1.6",
      "category1.7",
      "category1.8",
    ],
    category2: [
      "category2.1",
      "category2.2",
      "category2.3",
      "category2.4",
      "category2.5",
      "category1.6",
      "category1.7",
      "category1.8",
    ],
    category3: [
      "category3.1",
      "category3.2",
      "category3.3",
      "category3.4",
      "category3.5",
      "category1.6",
      "category1.7",
      "category1.8",
    ],
    category4: [
      "category4.1",
      "category4.2",
      "category4.3",
      "category4.4",
      "category4.5",
      "category1.6",
      "category1.7",
      "category1.8",
    ],
  };
  //const itemList = menuType[props.type];
  const itemList = data.allWpMenuCard.edges
    .filter((n) => {
      return n.node.language.slug === intl.locale;
    })
    .filter((n) => {
      return n.node.menuCard.type === props.type;
    });
  const left = props.margin === "left"? true: false
  const right = props.margin === "right"? true: false
  return (
    <div className="lg:flex mr-4 md:mr-10 xl:mr-24 lg:mb-10 ">
        <div className={` relative  lg:pr-8 lg:w-2/3 ${left?"ml-11":""} ${right?"mr-11":""}`}>
        <img src={data.allWpPage.edges[0].node.featuredImage.node.localFile.url} alt="description" className="w-full" />
        </div>
        <div className={`bg-white relative z-20 text text-center lg:w-1/3 border-2 lg:flex flex-col justify-center ${left?"-mt-5 mr-11":""} ${right?"-mt-5 ml-11":""}`}>
        <h3 className={`font-bold text-xl md:text-24px my-5`}>Title</h3>
      <ul className="">
        {itemList.map((n) => {
          return <li className={`${style.text.body1} mb-2`}  >{n.node.title} </li>;
        })}
        <div className="bg-blue m-5 xl:m-8">
        <OrderNow padding="py-4 w-full "/>
        </div>
      </ul>
        </div>
    </div>
  );
};

export default Menu2;
