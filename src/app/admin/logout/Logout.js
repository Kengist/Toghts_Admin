import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigator("/");
  };

  return <div onClick={handleLogout}>Logout</div>;
};

export default Logout;
