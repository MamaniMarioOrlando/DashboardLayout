import React from "react";

function LiTopBar(props){
    return(
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id={props.id}>
                <i className={props.icon+" fa-fw"}></i>
                {/* <!-- Counter - Alerts --> */}
                <span className="badge badge-danger badge-counter">{props.cant}</span>
            </a>
        </li>
    );
}
export default LiTopBar;