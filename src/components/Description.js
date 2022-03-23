import React from "react";
import { useStyle } from "./context/styleContext";

import DescriptionCard from "./descriptionCard";
import DescriptionCard2 from "./descriptionCard2";

const Description = () =>{
    const style = useStyle();
    return (
<section className="description mt-10 ">
    <DescriptionCard article={`${style.mx} md:my-10 xl:my-24  md:flex flex-row-reverse items-center`} text=" md:mr-10 xl:mr-32"/>
    <DescriptionCard article={` ${style.mx}  mr-16  md:my-10  xl:my-24  md:flex  items-center`}  text=" md:ml-10 xl:ml-32"/>
    <DescriptionCard article={`${style.mx}  ml-16  md:my-10  xl:my-24 md:flex  items-center`}  text=" md:ml-10 xl:ml-32"/>
    <DescriptionCard2 article="  md:p-10 xl:p-24  md:flex  items-center"  text="  pt-10  "/>
    <DescriptionCard2 article="  md:p-10 xl:p-24  "  text=" text-center pt-10 mx-auto  "/>
    <DescriptionCard2 article="  md:p-10 xl:p-24  md:flex  items-center justify-end"  text="  pt-10 md:max-w-1/2 md:w-1/2"/>

</section>
    )
}

export default Description;