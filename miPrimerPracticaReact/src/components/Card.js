import React from "react";
import PropTypes from "prop-types";
function Card(props){
    return(
        <div className="col-md-4 mb-4">{props.list.map((element,i)=>
        <div key={element+i} className={"card " +element.borderColor+" shadow h-100 py-2"}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className= {"text-xs font-weight-bold "+element.nameClass+" text-uppercase mb-1"}> {element.nameContent}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{element.data}</div>
                    </div>
                    <div className="col-auto">
                        <i className={element.icon+" fa-2x text-gray-300"}></i>
                    </div>
                </div>
             </div>
        </div>
    )}</div>       
    );
}

Card.propTypes={
        borderColor:PropTypes.string,
        nameClass: PropTypes.string,
        nameContent:PropTypes.string,
        data:PropTypes.number,
        icon:PropTypes.string
}

export default Card;