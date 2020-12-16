import React from "react";

function ComponentTitle(props){
    return(
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
        </div>
    );
}

export default ComponentTitle;