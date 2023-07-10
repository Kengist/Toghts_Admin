import React from "react";
import google from "../../asset/img/Google.webp";
import facebook from "../../asset/img/facebook.png";
import apple from "../../asset/img/apple.png";
import style from "../social/SocialLogin.module.css";

const SocialLogin = () => {
  return (
    <div className="row ">
      <div className="col-12 col-md-8 mx-auto">
        <div className="center px-3  pt-0 ">
          <div className={`${style.line}`}>
            <hr />
          </div>
          <span className={`${style.or} text-center `}>or</span>
          <div className={`${style.line}`}>
            <hr />
          </div>
        </div>
        <div className=" mt-4">
          <p className="text-center">Sign up with</p>
        </div>
        <div className=" center">
          <div className={`${style.socialcontainer}`}>
            <img
              src={google}
              alt="google"
              className=""
              width="40px"
              height="40px"
            />
          </div>
          <div className={`${style.socialcontainer}`}>
            {" "}
            <img
              src={facebook}
              alt="facebook"
              className="pt-2"
              width="35px"
              height="35px"
            />
          </div>
          <div className={`${style.socialcontainer}`}>
            {" "}
            <img
              src={apple}
              alt="apple"
              className="mt-2"
              width="23px"
              height="23px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
