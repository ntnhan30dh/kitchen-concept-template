import React from "react";
import Plx from 'react-plx';

import {useStyle} from './context/styleContext'
import OrderNow from './orderNow'

import pic from "../images/description.png";

const DescriptionCard = (props) => {
    const style = useStyle()

    const parallaxData = [
      {
        start: 0,
        end: 500,
        properties: [
          {
            startValue: 1,
            endValue: 2,
            property: 'scale',
          },
        ],
      },
    ];
    
  return (
    <article className={`descriptionCard ${props.article} mb-12`}>
    <div
        parallaxData={ parallaxData }
       className={`  mt-10 mb-8`}>
        <img src={pic} alt="description" className="w-full " />
      </div>
      <div className={`text max-w-500px ${props.text}`}>
      <h2 className={`${style.text.h2}`}>Description</h2>
      <p className={`${style.text.body1} mt-2 md:mt-3`}>
      Ningen pohuvis fäsade attefallshus, krorar.
      Lörem ipsum prektigt ode, bisigon helänade.  
      </p>
      <OrderNow padding=" py-4 md:py-5 md:px-10 my-10" button="w-full md:w-auto"/>
      </div>
    </article>
  );
};

export default DescriptionCard;
