import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "../components/layout";

const PrivateRoute = () => {
  let authorized = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return authorized?.isAuth ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
