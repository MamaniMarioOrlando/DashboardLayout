import React from "react";
import imgen from "../images/product_dummy.svg";
import ComponentTitle from "./ComponentTitle";

function LastProduct(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <ComponentTitle title="Last product in Data Dase"/>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={imgen} alt="image dummy"/>
                </div>
                <p>{props.paragraph}</p>
                <a target="_blank" rel="nofollow" href="/">{props.link}</a>
            </div>
        </div>
    </div>
    );
}
export default LastProduct;
