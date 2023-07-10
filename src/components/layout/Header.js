import React from "react";
import logo from "../../asset/img/Vector.png";
import home from "../../asset/img/home.png";
import plus from "../../asset/img/Plus.svg";

import Notification from "../../asset/img/Notification.png";
import cloud from "../../asset/img/cloud-plus.png";
import { GoPrimitiveDot } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "reactstrap";
import video from "../../asset/img/video.png";
import attach from "../../asset/img/attach.png";

import gallery from "../../asset/img/gallery.png";
import microphone from "../../asset/img/microphone-2.png";
import poll from "../../asset/img/poll.png";
import hashtag from "../../asset/img/hashtag.png";

const Header = ({ handleSearch }) => {
  const [showPost, setShowPost] = useState(false);
  const [active, setActive] = useState(false);

  const [showUserDetails, setUserDetails] = useState(false);
  //  console.log(toggleShow);
  const toggleUserDetails = () => {
    setUserDetails(!showUserDetails);
  };
  const toggleToght = () => {
    setShowPost(!showPost);
  };
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="header bg-white">
        <div className="d-flex align-items-center bg-dar justify-content-between">
          <div>
            <img src={logo} alt="..." width="32px" height="34px" />
          </div>

          <div className="d-flex align-items-center justify-content-center nav-links-wrapper">
            <div className="d-flex align-items-center justify-content-between">
              <NavLink to="/app" className="nav-item">
                <img src={home} alt="..." width="28px" height="28px" />
              </NavLink>
              <NavLink to="/app/subscriptions" className="nav-item">
                <img src={cloud} alt="..." width="28px" height="28px" />
              </NavLink>

              <NavLink to="/app/notifications" className="nav-item  ">
                <img src={Notification} alt="..." width="28px" height="28px" />
              </NavLink>
              <NavLink
                to=""
                className="nav-item text-decoration-none text-dark"
              >
                <BsBoxArrowInDownLeft
                  className="nav-item"
                  style={{ marginRight: "0px", fontSize: "24px" }}
                  alt="menu"
                  onClick={() => {
                    toggleUserDetails();
                  }}
                  role="button"
                />{" "}
              </NavLink>
              {/* <div>
                
              </div> */}
              <span onClick={toggleToght} className="cursor-pointer ">
                <img src={plus} alt="nav-icon" />
              </span>
            </div>
            <div className="d-flex nav-item align-items-center bg-darkjustify-content-between">
              <select className="header-select mr-25">
                <option>Nigeria</option>
              </select>
              <div className="d-flex">
                <select className="header-select ">
                  <option>Portharcourt</option>
                </select>
                <p className="mb-0 px-1">|</p>
                <div className="d-flex align-items-center">
                  <GoPrimitiveDot color="#4DEC70" />
                  <p className="mb-0 fw-bold">50,000</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <input
              placeholder="Search toghts in your city"
              className="header-search-input form-control w-100"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={showUserDetails}
        toggle={toggleUserDetails}
        className="modal-dialog-centered"
        size="md"
      >
        <div className="pt-4 post-toght-header ">
          <div className="home-separator  ">
            <div className="d-none d-lg-flex nav-item align-items-center justify-content-center mt-1 mb-3 px-2 px-md-4">
              <div className="mobile-border">
                <select className="header-select mr-25 ">
                  <option>Viewing Prefrences</option>
                </select>
              </div>
              <div className="mobile-border">
                <div className="d-flex">
                  <select className="header-select">
                    <option>Trending Hashtags</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-flex toghts-section-wrapper justify-content-center align-items-center mt-4 pb-4 px-3 px-md-0">
          <p className="toght-category high  mb-0">All</p>
          <p className="toght-category medium  mb-0">High</p>
          <p className="toght-category low  mb-0">Low</p>
          <p className="toght-category new no-margin-right mb-0">New</p>
        </div>
      </Modal>
      {/* MAKE A POST MODAL BIG SCREEN*/}
      <Modal isOpen={showPost} toggle={toggleToght}>
        <div className="post-toght-header py-3 px-2 border-top">
          <h3 className="text-center post-toght-title">Post Toghts</h3>
        </div>
        <div className="p-3">
          <div className=" align-items-center justify-content-center mx-auto w-50 mt-1 mb-3 ">
            <div
              className="py-2  rounded "
              style={{
                marginRight: "12px",
                border: "0.5px solid #B7B7B7",
                borderRadius: "10px",
                paddingRight: "1em",
              }}
            >
              <select
                className="header-select w-100  "
                style={{
                  fontSize: "14px",
                  color: "#3A3A3A",
                  paddingLeft: "80px",
                }}
              >
                <option>Category</option>
              </select>
            </div>
          </div>
          <textarea
            className="post-toght-wrapper-textarea w-100 form-control mb-2 "
            placeholder="Enter Your Heading"
            rows="2"
          />
          <textarea
            className="post-toght-wrapper-textarea textarea-body w-100 form-control"
            rows="9"
            placeholder="What are you thinking"
          />
          <div className="d-flex justify-content-between align-items-center  mt-2 mb-1">
            <div className={`d-flex `} onClick={handleActive}>
              <div>
                <img src={attach} alt="..." />
              </div>
              <p
                className={`detach-toghts-text mb-0 cursor-pointer ${
                  active ? "active-purple" : ""
                }`}
              >
                Anonymize Toght
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src={video} alt="..." />
              </div>
              <p className="go-live-text mb-0">Go Live</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="post-icon">
                <img src={gallery} alt="..." />
              </div>
              <div className="post-icon">
                <img src={microphone} alt="..." />
              </div>

              <div className="post-icon">
                <img src={poll} alt="..." />
              </div>
              <div className="post-icon">
                <img src={hashtag} alt="..." />
              </div>
            </div>

            <button className="post-toght-button">Post Toght</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
