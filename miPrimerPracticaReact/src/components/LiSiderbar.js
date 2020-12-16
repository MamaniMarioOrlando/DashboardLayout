import React from "react";

function LiSiderbar(props){
    return(
        <li className="nav-item">
            <a className={"nav-link "+props.nomClass} href="/">
                <i className={props.icon}></i>
                <span>{props.nombreSpan}</span>
            </a>
        </li>
    );
}
export default LiSiderbar;