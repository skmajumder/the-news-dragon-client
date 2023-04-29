import React from "react";
import NavMenu from "../pages/Shared/NavMenu/NavMenu";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default LoginLayout;
