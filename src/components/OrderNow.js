import React from "react";

const OrderNow = (props) =>{
return (
     <button className={props.button}>  <div className={`uppercase bg-blue text-white font-bold  tracking-wider ${props.padding}`}> order now </div> </button>
)
}

export default OrderNow