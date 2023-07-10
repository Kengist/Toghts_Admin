import React from "react";
import pfp from "../../asset/img/pfp.png";
import settings from "../../asset/img/setting-2.svg";
import { FaUserAlt } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { RiFileCopy2Fill } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const Sidebar = ({ show, toggleShow }) => {
  return (
    <div className="d-flex sidebar-wrapper">
      <div
        className={`px-2 sidebar-content bg-white pt-4 ${show ? "show" : ""}`}
      >
        <div className="admin-message-container d-none d-lg-block">
          <p className="mb-0">Admin</p>
          <p className="mb-0">Message</p>
          <p className="mb-0">Panel</p>
        </div>
        <div className="user-details">
          <div className="profile-pic-container w-100 d-flex justify-content-center align-items-center">
            <img src={pfp} alt="..." />
          </div>
          <div className="mb-2">
            <h1 className="user-name mb-0">Amanda Anyanwu</h1>
            <p className="username text-center mb-0">@Thatphgirl</p>
          </div>
          <div className="d-flex justify-content-between user-container">
            <div className="text-center">
              <h4
                className=" mb-0"
                style={{
                  fontWeight: "700",
                  fontSize: "18.821px",
                }}
              >
                50
              </h4>
              <p
                className=""
                style={{
                  color: "#B7B7B7",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Toghts
              </p>
            </div>

            <div className="text-center">
              <h4
                className=" mb-0"
                style={{
                  fontWeight: "700",
                  fontSize: "18.821px",
                }}
              >
                5k
              </h4>
              <p
                className=""
                style={{
                  color: "#B7B7B7",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Subscribers
              </p>
            </div>

            <div className="text-center">
              <h4
                className=" mb-0"
                style={{
                  fontWeight: "700",
                  fontSize: "18.821px",
                }}
              >
                2K
              </h4>
              <p
                className=""
                style={{
                  color: "#B7B7B7",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Subscription
              </p>
            </div>
          </div>

          <div className="py-3 px-2">
            <NavLink
              to="/app/profile"
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
                textDecoration: "none",
              }}
            >
              <FaUserAlt color="#B7B7B7" size="18" />
              <h4 className="mb-0 left-container-nav-link"> Public Profile</h4>
            </NavLink>
            <NavLink
              to="/app/detachedprofile"
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
                textDecoration: "none",
              }}
            >
              <FaUserAlt color="#B7B7B7" size="18" />
              <h4 className="mb-0 left-container-nav-link">
                Anonymous Profile
              </h4>
            </NavLink>
            <div
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
              }}
            >
              <IoBookmarksOutline color="#B7B7B7" size="25" />
              <h4 className="mb-0 left-container-nav-link">Topics</h4>
            </div>
            <NavLink
              to="/app/history"
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
                textDecoration: "none",
              }}
            >
              <RiFileCopy2Fill color="#B7B7B7" size="28" />
              <h4 className="mb-0 left-container-nav-link">Viewing History</h4>
            </NavLink>
            <div
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
              }}
            >
              <div color="#B7B7B7" size="18">
                <img src={settings} width="25px" height="25px" />{" "}
              </div>
              <h4 className="mb-0 left-container-nav-link">Settings</h4>
            </div>
            <div
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
              }}
            >
              <div className="toggle-switch">
                <label className="toggle__label">
                  <input type="checkbox" className="toggle__input" />
                  <span className="slider"></span>
                </label>
              </div>
              {/* <h4 className="mb-0 left-container-nav-link">Settings</h4> */}
            </div>
            <div
              className="d-flex align-items-center"
              style={{
                marginBottom: "45px",
              }}
            >
              <div className="toggle-switch">
                <label className="toggle__label">
                  <input type="checkbox" className="toggle__input" />
                  <span className="slider"></span>
                </label>
              </div>
              {/* <h4 className="mb-0 left-container-nav-link">Settings</h4> */}
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-right-content" onClick={toggleShow}></div>
    </div>
  );
};

export default Sidebar;
