import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminSideNav from "../side-nav/AdminSideNav";
import AdminTopNav from "../top-nav/AdminTopNav";
import "./AdminRoute.css";

const AdminRoute = () => {
  const [toggleNav, setToggleNav] = useState(false);
  let authorized = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";
  return authorized?.isAuth && authorized.isAdmin ? (
    <div className="d-flex">
      <AdminSideNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <div id="main-area">
        <AdminTopNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoute;
