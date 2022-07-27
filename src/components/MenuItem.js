import React from "react";
import { useStyle } from "./context/styleContext";


const MenuItem = (props) =>{
     const style = useStyle();
     const description = {
         "name": "Ningen pohuvis fäsade attefallshus, krorar. Lörem ipsum prektigt ode, bisigon helänade."     }
     return (
         <article className="mr-4 /md:mr-6 /md:mr-8  border-2 ">
         <div className={` `}>
        <img src={props.pic} alt="menu item pic" className="" />
        <div className="text p-5 md:p-8 md:p-8 mb-12 md:mb-28">
        <h3 className={`font-bold text-xl md:text-24px`}>{props.name}</h3>
        <p  className={`${style.text.body2} mt-2 md:mt-3`}> {props.copy} </p>
        </div>
      </div>
         </article>
     )
 }

 export default MenuItem