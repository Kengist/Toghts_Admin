import React, { useState } from "react";
// import { Row, Col } from "reactstrap";
import Header from "./Header";
import pfp from "../../asset/img/pfp.png";
import { FaUserAlt } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import MobileHeader from './MobileHeader'
import Footer from "./Footer";
import Search from "../../app/Search";
import { RiFileCopy2Fill } from "react-icons/ri";
// import message from "../../asset/img/smss.png";

const Layout = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e);
  };
  return (
    <div className="app">
      <div>
        <div className="d-none d-lg-block">
          <Header handleSearch={handleSearch} />
        </div>
        {/* 
        <div className="app-main-section">
          <Row className="gx-5 app-main-container">
            <div
              sm="12"
              md="3"
              className="bg-white right-container app-section" */}

        <div className="app-main-section">
          <div className="gx-5 app-main-container d-flex justify-content-between">
            <div className="bg-white px-4 py-4 app-section d-lg-block d-none app-left-container">
              <div className="admin-message-container">
                <p className="mb-0">Admin</p>
                <p className="mb-0">Message</p>
                <p className="mb-0">Panel</p>
              </div>
              <div className="user-details">
                <div className="profile-pic-container">
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
                  <div
                    className="d-flex align-items-center"
                    style={{
                      marginBottom: "35px",
                    }}
                  >
                    <FaUserAlt color="#B7B7B7" size="18" />
                    <Link to={"/app/profile"} className="text-decoration-none">
                      <h4 className="mb-0 left-container-nav-link ">
                        Public Profile
                      </h4>
                    </Link>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      marginBottom: "35px",
                    }}
                  >
                    <FaUserAlt color="#B7B7B7" size="18" />

                    <Link
                      to={"/app/detachedprofile"}
                      className="text-decoration-none"
                    >
                      <h4 className="mb-0 left-container-nav-link ">
                        Anonymous Profile
                      </h4>
                    </Link>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      marginBottom: "35px",
                    }}
                  >
                    <IoBookmarksOutline color="#B7B7B7" size="25" />
                    <h4 className="mb-0 left-container-nav-link">Topics</h4>
                  </div>
                  <Link
                    to="/app/history"
                    className="d-flex align-items-center"
                    style={{
                      marginBottom: "35px",
                      textDecoration: "none",
                    }}
                  >
                    <RiFileCopy2Fill color="#B7B7B7" size="28" />

                    <h4 className="mb-0 left-container-nav-link">
                      Viewing History
                    </h4>
                  </Link>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      marginBottom: "35px",
                    }}
                  >
                    <FaUserAlt color="#B7B7B7" size="18" />
                    <h4 className="mb-0 left-container-nav-link">Settings</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-section overflow-scroll app-center-container">
              {children}
            </div>

            <div className="bg-white app-section p-1 d-lg-block d-none app-right-container">
              <Search searchValue={searchValue} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none fixed-bottom px-4 py-4  bg-white  mobile-footer ">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
