import React from "react";
import Header from "./Header";
import "../styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
