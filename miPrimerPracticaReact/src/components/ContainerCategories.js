import React from "react";
import ComponentTitle from "./ComponentTitle.js";
import Categories from "./Categories.js"

function ContainerCategories(){
    let listCategories=["Category 01","Category 02","Category 03","Category 04","Category 05","Category 06"];
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <ComponentTitle title="Categories in Data Base" />
            </div>
            <div className="card-body">
                <Categories listCategories={listCategories} />
            </div>
        </div>
    );
}

export default ContainerCategories;