import React from "react";

import Login from "../../components/login/Login";
import style from "./LandingPage.module.css";
import BigScreenCard from "./BigScreenCard";
const LandingPage = () => {
  return (
    <div className={`container-fluid bg-main ${style.con}`}>
      <div className="row  ">
        <div className="col-12 col-md-6 p-0">
          <BigScreenCard />
        </div>
        <div className="col-12 col-md-6" id="login">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
