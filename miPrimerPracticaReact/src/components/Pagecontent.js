import React from 'react';

import PagecontentTreeCar from "./PagecontentTreeCart.js"
import PageContentTitle from "./PagecontentTitle.js";
import SectionProduct from "./SectionProduct.js"
function Pagecontent(){
    return(
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
            <PageContentTitle title="App Dashboard"/>
        {/* <!-- Content Row --> */}
            <PagecontentTreeCar/>
        {/* <!-- Content Row --> */}
            <SectionProduct />
    </div>
    );
}
export default Pagecontent;