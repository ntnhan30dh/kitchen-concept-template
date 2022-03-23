import React, { useState } from "react";

import Carousel from "./carousel";
import Menu2 from "./menu2";
import { useStyle } from "./context/styleContext";

const Menu = (props) => {
  let [menuType, setMenuType] = useState("category1");

  const style = useStyle();

 // const fillColor = "blue";

  const menuTypeItem = (type) => {
    return (
      <button
        className={`text-base font-bold xl:mx-3 ${
          type === menuType ? "text-blue" : "text-grayScale"
        }`}
        onClick={() => {
          setMenuType(type);
        }}
      >
        <div className="text-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            //fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={` mx-auto ${
              type === menuType ? "fill-blue" : "fill-grayScale"
            }`}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0032 5.53425C18.6106 5.18425 19.2993 5 20.0003 5C20.7014 5 21.3901 5.18426 21.9975 5.53429L22.0003 5.5359L31.3337 10.8692C31.8262 11.1536 32.2511 11.5389 32.5813 11.9983C32.6624 12.0791 32.7343 12.1718 32.7944 12.2756C32.8461 12.3649 32.8862 12.4578 32.9153 12.5524C33.1893 13.1035 33.333 13.7115 33.3337 14.3292V24.9986C33.3329 25.7001 33.1478 26.389 32.7967 26.9963C32.4457 27.6036 31.9411 28.1079 31.3337 28.4586L31.3285 28.4616L22.0003 33.792L21.9979 33.7933C21.5751 34.0371 21.1128 34.2005 20.6343 34.2773C20.4458 34.3794 20.2298 34.4374 20.0003 34.4374C19.7708 34.4374 19.5549 34.3794 19.3663 34.2773C18.8879 34.2005 18.4256 34.0371 18.0028 33.7934L18.0003 33.792L8.67214 28.4616L8.66699 28.4586C8.05952 28.1079 7.55495 27.6036 7.20392 26.9963C6.85288 26.389 6.66771 25.7001 6.66699 24.9986V14.3292C6.66763 13.7118 6.81116 13.1041 7.08494 12.5532C7.11405 12.4583 7.15428 12.3652 7.2061 12.2756C7.2663 12.1716 7.33839 12.0787 7.41968 11.9977C7.74989 11.5386 8.17464 11.1535 8.66699 10.8692L8.67213 10.8663L18.0032 5.53425ZM21.3337 31.1016L30.0003 26.1492L30.0024 26.148C30.204 26.0312 30.3714 25.8635 30.488 25.6618C30.605 25.4594 30.6668 25.2297 30.667 24.9959V15.0466L21.3337 20.4456V31.1016ZM18.667 20.4457V31.1016L10.0003 26.1492L9.99822 26.148C9.79667 26.0312 9.62924 25.8635 9.51263 25.6618C9.39571 25.4595 9.334 25.2301 9.33366 24.9965V15.0467L18.667 20.4457ZM20.667 7.84531L29.2811 12.7676L20.0002 18.1362L10.7195 12.7677L19.3285 7.84827L19.3337 7.8453C19.5363 7.72828 19.7663 7.66667 20.0003 7.66667C20.2344 7.66667 20.4643 7.72829 20.667 7.84531Z"
            />
          </svg>
          {type}
        </div>
      </button>
    );
  };
  const categoryList = ["category1", "category2", "category3", "category4"];
  return (
    <section className={`menu  xl:mt-14 ml-4 md:ml-10 xl:ml-24 ${style.my} ${props.margin?"md:hidden":""}`}>
      <div className="top  xl:flex justify-between items-end mr-4 md:mr-10 xl:mr-24 xl:mb-10">
        <div className={`text `}>
          <h2 className={`${style.text.h2} mb-2 `}>Menu</h2>
          <p className={`${style.text.body1} max-w-2xl `}>
            Ningen pohuvis fäsade attefallshus, krorar. Lörem ipsum prektigt
            ode, bisigon helänade.
          </p>
        </div>
      <ul className="flex justify-between flex-wrap my-8 xl:my-0">
        {categoryList.map((c) => {
          return <li> {menuTypeItem(c)}</li>;
        })}
      </ul>
      </div>
     {props.type===1 && <Carousel type={menuType} />}
     {props.type===2 && <Menu2 type={menuType} margin={props.margin}  />}
    </section>
  );
};

export default Menu;
