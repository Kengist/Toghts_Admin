import React from "react";

import { Link } from "react-router-dom";

import { BiUser } from "react-icons/bi";
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import style from "./Login.module.css";
import SocialLogin from "../social/SocialLogin";
import { validator } from "../../utils/validate/validate";
import { useNavigate } from "react-router-dom";
// import { httpRequest } from "../../https/http";

const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = React.useState("password");
  const [visible, setVisible] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({
    email: "",
    password: "",
  });
  const handleToggle = () => {
    if (!visible) {
      setType("text");
      setVisible(true);
    } else {
      setType("password");
      setVisible(false);
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [err, setErr] = React.useState("");

  const handleLogin = async () => {
    try {
      const validate = validator(form);
      if (!validate.isValid) {
        setErr(validate.error);
        setError({ ...error, ...validate.error });
        setTimeout(() => setErr(""), 5000);
        return;
      }

      // const res = await httpRequest({
      //   url: "user/reset-password",
      //   method: "POST",
      //   body: form,
      // });

      // if (res.status === true) {
      const userInfo = {
        isAdmin: 1,
        isAuth: true,
        token: "lsajdfjksdhfkhkfjsdlfsdkfhdkfd",
        userDetaila: {
          firstName: "Iyke",
          lastName: "Afams",
          id: "iuyweufwekrkf8",
        },
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // sessionStorage.setItem("i-token", res.data.token);
      if (userInfo.isAdmin) {
        setTimeout(() => navigate("/app/admin/overview"), 1000);
      } else {
        setTimeout(() => navigate("/app"), 1000);
      }
      // } else {
      //errr res.msg
      // }
    } catch (err) {
      //errr
    }
  };
  return (
    <div className="">
      <div className={` ${style.formcontainer}`}>
        <form action="/action_page.php" className={`${style.form}`}>
          <h3 className="text-center">Sign In</h3>
          {err && (
            <p
              className={`  font-8 text-center text-danger  my-1  "
              `}
            >
              {err}
            </p>
          )}
          <div className={`${style.inputcontainer}`}>
            <span className={`${style.icon}`}>
              <BiUser />
            </span>
            <input
              className={`${style.inputfield}`}
              type="text"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={`${style.inputcontainer}`}>
            <span className={`${style.icon}`}>
              <AiFillLock />
            </span>
            <input
              className={`${style.inputfield}`}
              type={type}
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <span className={`${style.iconeye}`} onClick={handleToggle}>
              {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <span
            className="  d-flex justify-content-end"
            style={{ marginRight: "20px" }}
          >
            <Link to="#" style={{ textDecoration: "none" }}>
              <small>Forgot Password</small>
            </Link>
          </span>
          <div className={`${style.inputcontainer} `}>
            <button
              onClick={handleLogin}
              type="button"
              className={` text-center text-decoration-none ${style.btn}`}
            >
              Login{" "}
            </button>
          </div>
          <SocialLogin />
          <div className={` col-12 col-md-8 mx-auto  `}>
            <p className="  font-8 text-center m-2 d-md-">
              {" "}
              New to Toght?{" "}
              <Link to="/app/register" className="text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
