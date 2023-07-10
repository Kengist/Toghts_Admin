import React from "react";
import { GiNigeria } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import style from "./Signup2.module.css";
import { validator } from "../../utils/validate/validate";
import { useNavigate } from "react-router-dom";

const Signup2 = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    country: "Nigeria",
    state: "Rivers",
    city: "Portharcourt",
  });

  const [success, setSuccess] = React.useState("");
  const [err, setErr] = React.useState("");
  const [error, setError] = React.useState({
    country: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const validate = validator(form);
    if (!validate.isValid) {
      setErr(validate.error);
      setError({ ...error, ...validate.error });
      setTimeout(() => setErr(""), 5000);
      return;
    }
    setSuccess(`Success`);
    setTimeout(() => navigate("/app"), 1000);
  };
  return (
    <div className={`  ${style.formcontainer}`}>
      <div>
        <form action="/action_page.php" className={`${style.form}`}>
          <h5 className="text-center ">Your Location Details</h5>
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
          <div className={`${style.inputcontainer}`}>
            <span className={`${style.icon}`}>
              <GiNigeria />
            </span>
            <input
              className={`${style.inputfield}`}
              type="text"
              placeholder="Nigeria"
              name="country"
              onChange={handleChange}
              value={form.country}
              disabled
            />
          </div>
          <div className={`${style.inputcontainer}`}>
            <span className={`${style.icon}`}>
              <GrLocation />
            </span>
            <input
              className={`${style.inputfield}`}
              type="text"
              placeholder="Rivers"
              name="state"
              onChange={handleChange}
              value={form.state}
              disabled
            />
          </div>
          <div className={`${style.inputcontainer}`}>
            <span className={`${style.icon}`}>
              <GrLocation />
            </span>
            <input
              className={`${style.inputfield}`}
              type="text"
              placeholder="Port-Harcourt"
              name="city"
              onChange={handleChange}
              value={form.city}
              disabled
            />
          </div>
          <div className={`${style.inputcontainer} `}>
            <button
              type="button"
              onClick={handleRegister}
              className={` text-center text-decoration-none ${style.btn}`}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup2;
