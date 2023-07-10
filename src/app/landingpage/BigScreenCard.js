import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/img/Vector-2.png";

import style from "./BigScreenCard.module.css";
import { TbArrowBigUpLines } from "react-icons/tb";

const BigScreenCard = () => {
  return (
    <div>
      {" "}
      <div className={`  `} style={{ height: "100vh", background: "#5B3896" }}>
        <div className={` p-3 `}>
          <div className=" p-2  m-3 align">
            <img
              src={logo}
              alt="logo"
              className="text-white "
              width="50px"
              height="50px"
            />
          </div>

          <div className="d-flex flex-column text-white  justify-content-center align-items-start p-3 mt-5">
            <h2 className={` mx-auto ${style.heading}`}>Toghts </h2>
            <h2 className={` mx-auto ${style.heading}`}>
              Your Virtual Town Square
            </h2>
            <p className={`p-2 ${style.text}`}>
              Connect With Your Desired Community, Make Your Opinion Known On
              Your Own Terms, Engage With The Thoughts Of Those Around You, Be
              Your Authentic Self, Access The World Like Never Before!
            </p>

            <Link to={"/app/register"} className={`  ${style.getStarted}`}>
              Get started
            </Link>
          </div>
          <h5 className="mt-3 text-warning text-center">
            This is our Beta Version, We're still in construction...
          </h5>
          <div
            className={`d-md-none  ${style.arrow} `}
            // style={{ marginTop: "23rem" }}
          >
            {" "}
            <h6>Scroll Up to login </h6>
            <a href="#login" style={{ textDecoration: "none", color: "white" }}>
              <TbArrowBigUpLines />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigScreenCard;
