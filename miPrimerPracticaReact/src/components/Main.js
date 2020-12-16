import React from "react";
import Topbar from "./Topbar.js";
import Pagecontent from "./Pagecontent.js";

function Main(){
    return(
        <div id="content">

        {/* <!-- Topbar --> */}
        <Topbar/>
        {/* <!-- End of Topbar --> */}

        {/* <!-- Begin Page Content --> */}
        <Pagecontent/>
        {/* <!-- /.container-fluid --> */}
    </div>
    );
}

export default Main;