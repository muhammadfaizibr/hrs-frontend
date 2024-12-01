import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import '../assets/css/LayoutStyles.css'
import Footer from "../components/Footer";
const layout = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Navbar />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="layout-setting">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default layout;
