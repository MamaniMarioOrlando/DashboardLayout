import React from "react";
import Main from "./Main.js";
import Footer from "./Footer.js";
function ContentWrapper(){
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <Main/>
            <Footer/>
        </div>
    );
}

export default ContentWrapper;