import React from 'react';
import avatar from  "../images/dummy-avatar.jpg";
import LiTopBar from "./LiTopBar.js"
function Ultopbar(){
    return(  
        <ul className="navbar-nav ml-auto">
                {/* <!-- Nav Item - Alerts -->  "alertsDropdown" "fas fa-bell"  "messagesDropdown" "fas fa-envelope" */}
                <LiTopBar id={"alertsDropdown"} icon={"fas fa-bell"} cant={3+"+"}/>
                {/* <!-- Nav Item - Messages --> */}
                <LiTopBar id={"messagesDropdown"} icon={"fas fa-envelope"} cant={7}/>
                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                        <img className="img-profile rounded-circle imagen" src={avatar} />
                    </a>
                </li>

        </ul>
    );
}
export default Ultopbar;