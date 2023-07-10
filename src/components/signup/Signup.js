import React from "react";
import { BiUser } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail, MdOutlineDateRange } from "react-icons/md";
import style from "./Signup.module.css";
import { Link } from "react-router-dom";
import SocialLogin from "../social/SocialLogin";
import { validator } from "../../utils/validate/validate";
const Signup = ({ tab, setTab }) => {
  const [type, setType] = React.useState("password");
  const [visible, setVisible] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    userName: "",
    displayName: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = React.useState("");
  const [err, setErr] = React.useState("");
  const [error, setError] = React.useState({
    email: "",
    userName: "",
    displayName: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleToggle = () => {
    if (!visible) {
      setType("text");
      setVisible(true);
    } else {
      setType("password");
      setVisible(false);
    }
  };
  const handleRegister = () => {
    const validate = validator(form);
    if (!validate.isValid) {
      setErr(validate.error);
      setError({ ...error, ...validate.error });
      setTimeout(() => setErr(""), 5000);
      return;
    }
    setSuccess(`success `);
    setTimeout(() => setTab(tab + 1), 2000);
  };

  return (
    <div className="">
      <div className={` bg-main py-3 ${style.formcontainer}`}>
        <form action="/action_page.php" className={`${style.form}`}>
          <h3 className="text-center">Create An Account</h3>
          <div className="row mx-auto my-2">
            <div className="col-12 col-md-12">
              {" "}
              {success && (
                <p
                  className={`  font-10 text-center  my-2 p-2 "
               ${style.success}`}
                >
                  {success}
                </p>
              )}
              {err && (
                <p
                  className={`  font-10 text-center  my-2 p-2 "
               ${style.err}`}
                >
                  {err}
                </p>
              )}
            </div>
            <div className={`col-12 col-md-6 mb-2 ${style.iconHolder}`}>
              <span className={`${style.icon}`}>
                <MdEmail />
              </span>
              <input
                className={`${style.inputfield}`}
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className={`col-12 col-md-6 mb-2 ${style.iconHolder}`}>
              <span className={`${style.icon}`}>
                <BiUser />
              </span>
              <input
                className={`${style.inputfield}`}
                type="text"
                placeholder="Username"
                name="userName"
                onChange={handleChange}
                value={form.userName}
              />
              {/* {error.userName && <small>{error.userName}</small>} */}
            </div>
          </div>
          <div className="row mx-auto">
            <div className={`col-12 col-md-6 mb-2 ${style.iconHolder}`}>
              <span className={`${style.icon}`}>
                <BiUser />
              </span>
              <input
                className={`${style.inputfield}`}
                type="text"
                placeholder="Display name"
                name="displayName"
                onChange={handleChange}
                value={form.displayName}
              />
            </div>
            <div className={`col-12 col-md-6 ${style.iconHolder}`}>
              <span className={`${style.icon}`}>
                <MdOutlineDateRange />
              </span>
              <input
                className={`${style.inputfield}`}
                type="date"
                placeholder="Age"
                name="age"
                onChange={handleChange}
                value={form.age}
              />
            </div>
          </div>
          <div className="row mx-auto">
            <div className={` col-12 col-md-12 my-2 ${style.iconHolder}`}>
              <span className={`${style.icon}`}>
                <BsGenderAmbiguous />
              </span>

              <select
                name="gender"
                className={` pr-4 ${style.inputfield}`}
                onChange={handleChange}
                value={form.gender}
              >
                <option value="" className={`${style.inputfield}`}>
                  Gender
                </option>
                <option value="male" className={`${style.inputfield}`}>
                  Male
                </option>
                <option value="female" className={`${style.inputfield}`}>
                  Female
                </option>
                {/* <option value="others" className={`${style.inputfield}`}>
                  Others
                </option> */}
              </select>
            </div>
            <div className={` col-12 col-md-12 ${style.iconHolder} `}>
              <span className={`${style.icon}`}>
                <AiFillLock />
              </span>
              <input
                className={`  ${style.inputfield}`}
                type={type}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
              <span className={`${style.iconeye}`} onClick={handleToggle}>
                {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className={`col-12 col-md-12 my-3 ${style.iconHolder}`}>
              <span className={`${style.icon}`}>
                <AiFillLock />
              </span>
              <input
                className={`${style.inputfield}`}
                type={type}
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                value={form.confirmPassword}
              />
              <span className={`${style.iconeye}`} onClick={handleToggle}>
                {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <div className="row mx-auto">
            <div className={`col-12 col-md-9 mx-auto  `}>
              <p className={`text-center font-12 d-none d-md-block`}>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
            </div>
            <div className={`col-12 col-md-7 mx-auto my-2 `}>
              <button
                type="button"
                onClick={handleRegister}
                className={`col-12 col-md-7 mx-auto d-block text-decoration-none text-center my-2 ${style.btn}`}
              >
                Submit
              </button>
            </div>

            <SocialLogin />

            <div className={` col-12 col-md-8 mx-auto  `}>
              <p className="  font-10 text-center m-2 d-md-">
                {" "}
                Already have an account?{" "}
                <Link to="/" className="text-decoration-none">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
