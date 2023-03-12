import React from "react";

import { NavLink, Outlet } from "react-router-dom";
type Inputs = {
  username?: string;
  email: string;
  password: string;
};

function a11yProps(index: string) {
  return {
    id: `auth-tab-${index}`,
    "aria-controls": `auth-tabpanel-${index}`,
  };
}

const Auth = () => {
  return (
    <main className="flex flex-col items-center mt-20 h-screen p-2">
      <div className="flex h-max justify-between w-2/3 sm:w-1/3 lg:w-2/6 border-b-2 border-blue-500">
        <NavLink
          to={"login"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-900" : "border-b-2"
          }
        >
          <div className="p-2 px-4">
            <h2>Login</h2>
          </div>
        </NavLink>
        <NavLink
          to={"signup"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-900" : "border-b-2"
          }
        >
          <div className="p-2 px-4">
            <h2>Sign Up</h2>
          </div>
        </NavLink>
      </div>
      <section className="p-2">
        <Outlet />
      </section>
    </main>
  );
};

export default Auth;
