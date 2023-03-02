import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideMenu } from "../components/";

const NavLayout = () => {
  return (
    <nav>
      <Header />
      <div>
        <SideMenu />
        <Outlet />
      </div>
    </nav>
  );
};

export default NavLayout;
