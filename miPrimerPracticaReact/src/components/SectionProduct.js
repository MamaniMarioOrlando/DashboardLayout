import React from "react";
import LastProduct from "./LastProduct.js";
import ContainerCategories from "./ContainerCategories.js";

function SectionProduct(){
    let paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?";
    let link="View product detail";
    return(
    <div className="row">
        <LastProduct paragraph={paragraph} link={link}/>
        <ContainerCategories />
    </div>
    );
}
export default SectionProduct;