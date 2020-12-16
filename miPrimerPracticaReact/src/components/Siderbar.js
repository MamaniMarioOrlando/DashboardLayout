import React from "react";
import LiSiderbar from "./LiSiderbar";

function Siderbar(){
    return(
                // <!-- Sidebar -->
        
		    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <LiSiderbar nomClass={"active"} icon="fas fa-fw fa-tachometer-alt" nombreSpan="Dashboard" />
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>

            {/* <!-- Nav Item - Pages collapsed Pages--> */}
            <LiSiderbar nomClass={"collapsed"} icon="fas fa-fw fa-folder" nombreSpan="Pages" />

            {/* <!-- Nav Item - Charts --> */}
            <LiSiderbar nomClass={""} icon="fas fa-fw fa-chart-area" nombreSpan="Charts" />

            {/* <!-- Nav Item - Tables --> */}
            <LiSiderbar nomClass={""} icon="fas fa-fw fa-table" nombreSpan="Tables" />

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
        </ul>

    );
}

export default Siderbar;