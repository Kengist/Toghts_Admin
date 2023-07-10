import React, { useState } from "react";
import Menu from "../../asset/img/menu.svg";
import logo from "../../asset/img/Vector.png";
import notification from "../../asset/img/Notification.svg";
// import attach from "../../asset/img/arrow.png";
import { NavLink } from "react-router-dom";
import { Modal } from "reactstrap";
import { VscClose } from "react-icons/vsc";
import { BsBoxArrowInDownLeft } from "react-icons/bs";

const MobileHeader = ({ toggleShow }) => {
  const [showUserDetails, setUserDetails] = useState(false);
  // console.log(toggleShow);
  const toggleUserDetails = () => {
    setUserDetails(!showUserDetails);
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-3 bg-white pb-3 pt-4">
        <div
          onClick={() => {
            toggleShow();
          }}
          role="button"
        >
          <img src={Menu} alt="menu" />
        </div>
        {/* <div>  */}
        <div className="" style={{ paddingLeft: "30px" }}>
          <img src={logo} alt="menu" width="32px" height="32px" />
        </div>
        <span className="d-flex justify-content-betwee">
          <BsBoxArrowInDownLeft
            style={{ marginRight: "35px", fontSize: "28px" }}
            alt="menu"
            // width="40px"
            // height="40px"
            onClick={() => {
              toggleUserDetails();
            }}
            role="button"
          />
          <NavLink to="/app/notifications">
            <img
              src={notification}
              alt="menu"
              width="32px"
              height="32px"
              // onClick={() => {
              //   toggleUserDetails();
              // }}
              role="button"
            />
          </NavLink>
        </span>
      </div>

      <Modal
        isOpen={showUserDetails}
        toggle={toggleUserDetails}
        className="modal-dialog-centered"
        size="sm"
      >
        <div className="mobile-modal-card-details post-toght-header">
          <div
            className="d-flex justify-content-end"
            onClick={() => {
              toggleUserDetails();
            }}
          >
            <VscClose />
          </div>

          <div className="d-flex  align-items-center justify-content-center mt-2  px-2 px-md-4">
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
        <div className="d-flex toghts-section-wrapper justify-content-center align-items-center py-4 px-3 px-md-0 border-bottom">
          <p className="toght-category high  mb-0">All</p>
          <p className="toght-category medium  mb-0">High</p>
          <p className="toght-category low  mb-0">Low</p>
          <p className="toght-category new  mb-0">New</p>
        </div>
      </Modal>
    </>
  );
};

export default MobileHeader;
