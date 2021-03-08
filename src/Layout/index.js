import React from "react";
import NavbarComponent from "./Navbar";

const Layout = (props) => {
  return (
    <div className="layout">
      <NavbarComponent />
      {props.children}
    </div>
  );
};
export default Layout;
