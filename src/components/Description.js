import React from "react";

import DescriptionCard from "./DescriptionCard";
import DescriptionCard2 from "./DescriptionCard2";

const Description = () =>{
    return (
<section className="description">
    {/* <DescriptionCard article="px-4 md:p-10 xl:p-24 w-full md:flex flex-row-reverse items-center" text=" md:mr-10 xl:mr-32"/>
    <DescriptionCard article="pl-4 pr-16 md:p-10 xl:p-24 w-full md:flex  items-center"  text=" md:ml-10 xl:ml-32"/>
    <DescriptionCard article="pr-4 pl-16 md:p-10 xl:p-24 w-full md:flex  items-center"  text=" md:ml-10 xl:ml-32"/> */}
    <DescriptionCard2 article="  md:p-10 xl:p-24  md:flex  items-center"  text="  pt-10  "/>
    <DescriptionCard2 article="  md:p-10 xl:p-24  "  text=" text-center pt-10 mx-auto  "/>
    <DescriptionCard2 article="  md:p-10 xl:p-24  md:flex  items-center justify-end"  text="  pt-10 md:max-w-1/2 md:w-1/2"/>

</section>
    )
}

export default Description;