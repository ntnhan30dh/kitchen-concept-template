import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl";
import { useStyle } from "./context/styleContext";
import logo from "../images/logo_footer.png";
import logoMobile from "../images/logo_footer__mobile.png";
import fb from "../images/footer/fb.png";
import ig from "../images/footer/ig.png";
import twitter from "../images/footer/twitter.png";
import snapchat from "../images/footer/snapchat.png";
import { Link } from "gatsby";

const Footer = () => {
  const style = useStyle();
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: {title: {eq: "Footer"}}) {
        edges {
          node {
            footer {
              copy
              copyright
              logo {
                localFile {
                  url
                }
              }
              logoMobile {
                localFile {
                  url
                }
              }
            }
            language {
              slug
            }
          }
        }
      }

      allWpSoMeItem {
        edges {
          node {
            title
            url {
              url
            }
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

      allWpFooterItems {
        edges {
          node {
            language {
              slug
            }
            infoColumn {
              type
            }
            title
          }
        }
      }
    }
  `);

  let columnList = [];
  const items = data.allWpFooterItems.edges.filter((n) => {
    return n.node.language.slug === intl.locale;
  });
  items.map((i) => {
    columnList.push(i.node.infoColumn.type);
  });
  columnList = [...new Set(columnList)];

  const content = data.allWpPage.edges
  .filter((n) => {
    return n.node.language.slug === intl.locale;
  })[0].node


  const soMe = (img,url,name) => {
    return (
      <Link to={url} target="_blank" className="w-12 mr-5 md:mr-auto md:ml-5" >
        <img src={img} alt={name} className="w-full " />
      </Link>
    );
  };

  const soMeList = [fb, ig, twitter, snapchat];
  const h4 = ` ${style.mt_sm}  mb-3`;
  return (
    <section className={`footer ${style.mx}  ${style.my} `}>
      {console.log("columnList", columnList)}
      <div className="top w-full md:flex justify-between md:mb-10 md:mt-14">
        <div className="w-full md:w-28 ">
          <Link to="/" className="w-full ">
            <img src={content.footer.logo.localFile.url} alt="logo" className="w-full hidden md:block" />
            <img src={content.footer.logoMobile.localFile.url} alt="logo" className="w-full md:hidden " />
          </Link>
        </div>
        <div className={`my-8 follow md:flex items-center md:my-auto`}>
          <h4 className={`${style.text.h4} my-6 md:mr-10`}> {content.footer.copy}</h4>
          <div className="some flex /md:justify-end">
            {data.allWpSoMeItem.edges.map((s) => soMe(s.node.featuredImage.node.localFile.url, s.node.url.url, s.node.title))}
          </div>
        </div>
      </div>
      <div
        className={`info grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 ${style.text.action2}`}
      >
        {columnList.map((c) => {
          return (
            <div>
              <h4 className={`${style.text.h4} ${h4}`}>{c}</h4>
              <ul>
                {items.filter((i)=>{
                  return i.node.infoColumn.type === c
                })
                
                .map((i) => {
                  return <li>{i.node.title}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p className={` ${style.text.action2} ${style.mt_md} `}>
       {content.footer.copyright}
      </p>
    </section>
  );
};

export default Footer;
