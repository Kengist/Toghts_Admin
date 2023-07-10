import React, { useState } from "react";
import activeHome from "../../asset/img/activeHome.svg";
import home from "../../asset/img/home.svg";

import search from "../../asset/img/search.svg";
// import sms from "../../asset/img/sms.svg";
// import activeSms from "../../asset/img/activeSms.png";
import activeSearch from "../../asset/img/activeSearch.svg";

import cloud from "../../asset/img/cloud-plus.svg";
import activeCloud from "../../asset/img/activeCloud.svg";

import plus from "../../asset/img/Plus.svg";
import { NavLink } from "react-router-dom";
import gallery from "../../asset/img/gallery.png";
import microphone from "../../asset/img/microphone-2.png";
import poll from "../../asset/img/poll.png";
import hashtag from "../../asset/img/hashtag.png";
import { Modal } from "reactstrap";
import video from "../../asset/img/video.png";
import attach from "../../asset/img/attach.png";

import { IoMailUnreadOutline } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";

const Footer = () => {
  const [active, setActive] = useState(false);

  const [showPost, setShowPost] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleToght = () => {
    setShowPost(!showPost);
  };
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <div className=" d-flex justify-content-between align-items-center">
        <NavLink
          to="/app/"
          onClick={() => {
            setActiveTab("home");
          }}
        >
          {activeTab === "home" ? (
            <img src={activeHome} alt="nav-icon" />
          ) : (
            <img src={home} alt="nav-icon" />
          )}
        </NavLink>
        <NavLink
          to="/app/search"
          onClick={() => {
            setActiveTab("search");
          }}
        >
          {activeTab === "search" ? (
            <img src={activeSearch} alt="nav-icon" />
          ) : (
            <img src={search} alt="nav-icon" />
          )}
        </NavLink>
        <div onClick={toggleToght}>
          <img src={plus} alt="nav-icon" />
        </div>
        <NavLink
          to="/app/subscriptions"
          onClick={() => {
            setActiveTab("sub");
          }}
        >
          {activeTab === "sub" ? (
            <img src={activeCloud} alt="nav-icon" />
          ) : (
            <img src={cloud} alt="nav-icon" />
          )}
        </NavLink>
        <NavLink
          to="/app/message"
          onClick={() => {
            setActiveTab("message");
          }}
        >
          {activeTab === "message" ? (
            // <img
            //   src={activeSms}
            //   alt="nav-icon"
            //   style={{ backGround: "purple" }}
            // />
            <VscMail
              // className="text-dark bg-dark"
              style={{ color: "#2c199f", fontSize: "31px" }}
            />
          ) : (
            // <img src={sms} alt="nav-icon" />
            <IoMailUnreadOutline style={{ color: "grey", fontSize: "33px" }} />
          )}
        </NavLink>
      </div>
      {/* MAKE A POST MODAL SMALL SCREEN*/}
      <Modal
        isOpen={showPost}
        toggle={toggleToght}
        className="modal-dialog-centered"
      >
        <div className="post-toght-header py-3 px-2 border-top">
          <h3 className="text-center post-toght-title">Post Toghts</h3>
        </div>
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-center mx-auto w-50 mt-1 mb-3 ">
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
                className="header-select "
                style={{
                  fontSize: "14px",
                  color: "#3A3A3A",
                }}
              >
                <option>Category</option>
              </select>
            </div>
            {/* <div
              className="px-4 py-2"
              style={{
                marginRight: "12px",
                border: "0.5px solid #B7B7B7",
                borderRadius: "10px",
                paddingRight: "1em",
              }}
            >
              Header
            </div> */}
          </div>
          <textarea
            className="post-toght-wrapper-textarea w-100 form-control mb-2"
            rows="2"
            placeholder="Enter Your Heading"
          />
          <textarea
            className="post-toght-wrapper-textarea  textarea-body w-100 form-control"
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
                Anonimize Toght
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

export default Footer;
