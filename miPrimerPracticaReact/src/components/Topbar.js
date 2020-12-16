import React from 'react';
import Btntopbar from "./Btntopbar.js";
import Ultopbar from './Ultopbar.js';
function Topbar(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <Btntopbar/>
            <Ultopbar/>
        </nav>
    );
}

export default Topbar;