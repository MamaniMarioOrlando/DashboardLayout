import React from "react";

function Categories(props){
    return(
        <div className="row">{props.listCategories.map((element,i)=>
            <div key={element +i} className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">
                        {element}
                    </div>
                </div>
            </div>
        )}</div>
    );
}

export default Categories;