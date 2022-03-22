import React from "react";
import { useStyle } from "./context/styleContext";

import pic from "../images/platform.png"
const Platform = () => {
  const style = useStyle();
  const iconItem = (img) =>{

    return(
      <div className="w-40 md:w-44 m-4">
        <img src={img} alt="platform" className="w-full" />
        </div>
    )
  }
  const icons = [pic,pic,pic,pic,pic,pic,pic,pic]
  return (
    <section className="platform mx-4 md:mx-10 xl:mx-24 my-10 md:my-14">
      <div className="text text-center mb-6 md:mb-10">
        <h2 className={`${style.text.h2} mb-4`}> Title</h2>
        <p className={`${style.text.body1} max-w-xl mx-auto`}>
          {" "}
          Ningen pohuvis fäsade attefallshus, krorar. Lörem ipsum prektigt ode,
          bisigon helänade.
        </p>
      </div>
      <div className="logos flex flex-wrap justify-center max-w-4xl mx-auto">
        {icons.map(i=>iconItem(i))}
      </div>
    </section>
  );
};

export default Platform;
