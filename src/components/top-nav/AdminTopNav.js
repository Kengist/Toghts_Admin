// import moment from "moment";
// import { useState } from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import profile from "../../asset/img/profile.jpg";
import "./TopNav.css";

const AdminTopNav = ({ toggleNav, setToggleNav }) => {
  const [show, setShow] = useState(false);
  // const [toggleNav, setToggleNav] = useState(false);
  return (
    <div id="top-nav" className="d-flex align-items-center bg-light">
      <div className="bg-light Nav-logo  ">
        <h5>TOGHT</h5>

        <span className=" justify-content-end d-flex w-50">
          {" "}
          <IoMenu fontSize={28} className="" />
        </span>
      </div>
      <div className="top-nav-content align-self-star w-100  d-flex justify-content-between">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <h3>ADMIN DASHBOARD</h3>

          <IoMenu fontSize={32} className="d-md-none" />
          <div className="d-none  nav-width d-md-flex align-items-center justify-content-between">
            <h5 className="px-2 pt-2">Welcome</h5>

            <div className="profile-box">
              <img
                src={profile}
                alt=".."
                width="35"
                height="35"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className=" show">
              <Link
                className="profile-btn "
                to="#"
                role="button"
                id="actions"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Chinwe <MdArrowDropDown />
              </Link>

              {show && (
                <div className="menu-dropdown">
                  <Link className="dropdown-item" to="#">
                    Add
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Edit
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Delete
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopNav;
