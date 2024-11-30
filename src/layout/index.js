import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
const layout = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Navbar />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default layout;
