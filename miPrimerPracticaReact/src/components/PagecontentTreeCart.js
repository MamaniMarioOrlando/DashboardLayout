import React from "react";
import Card from "./Card.js";
function PagecontentTreeCart(){
    let list=[[{borderColor:"border-left-primary",nameClass:"text-primary",nameContent:"Product in Data Base",data:135,icon:"fas fa-clipboard-list"}],
    [{borderColor:"border-left-success",nameClass:"text-success",nameContent:"Amount in products",data:546.456,icon:"fas fa-dollar-sign"}],
    [{borderColor:"border-left-warning",nameClass:"text-warning",nameContent:"Users quantity",data:38,icon:"fas fa-user-check "}]
    ];
    return(
        <div className="row">

            {/* <!-- Amount of Products in DB --> */}
                <Card list={list[0]}/>
                <Card list={list[1]}/>
                <Card list={list[2]}/>
            {/* <!-- $$$ of all products in DB --> */}


        </div>
    );
}

export default PagecontentTreeCart;