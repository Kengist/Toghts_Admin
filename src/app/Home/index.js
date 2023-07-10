import React, { useState, useEffect, useLayoutEffect } from "react";
import { Modal, Row, Col } from "reactstrap";
import pfp from "../../asset/img/pfp.png";
// import em from "../../asset/img/em.svg";
// import gal_min from "../../asset/img/gallery.svg";
// import send from "../../asset/img/send.svg";
import close from "../../asset/img/close.svg";
import comment from "../../asset/img/comment.svg";

import video from "../../asset/img/video.png";
import attach from "../../asset/img/attach.png";
import high from "../../asset/img/Vector-edit.png";
import medium from "../../asset/img/Vector-edit.png";
import low from "../../asset/img/Vector-edit.png";
import gallery from "../../asset/img/gallery.png";
import microphone from "../../asset/img/microphone-2.png";
import poll from "../../asset/img/poll.png";
import hashtag from "../../asset/img/hashtag.png";
import com from "../../asset/img/com.png";
import p1 from "../../asset/img/1.png";
import p2 from "../../asset/img/2.png";
import p3 from "../../asset/img/3.png";
import settings from "../../asset/img/settings.svg";
import link from "../../asset/img/link-2.svg";
import location from "../../asset/img/location.svg";
import cloud from "../../asset/img/cloud-plus.svg";
import message from "../../asset/img/messages-2.svg";

import { GoPrimitiveDot } from "react-icons/go";
import { VscClose, VscSettings } from "react-icons/vsc";

import toght from "../../asset/img/liposuction 1.png";
import MobileHeader from "../../components/layout/MobileHeader";
import Sidebar from "../../components/layout/Sidebar";
import { useSwipeable } from "react-swipeable";
import Search from "../Search";
import { Link } from "react-router-dom";
import { BiArrowBack, BiShareAlt } from "react-icons/bi";
import {
  MdArrowBackIosNew,
  MdOutlineNavigateNext,
  MdReport,
} from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
// import { GrFormPrevious, GrNext, GrPrevious } from "react-icons/gr";
import { COMMENT, DATA, MULTITOGHT } from "../../utils/data/DATA";
import Input from "../../components/input/Input";
import { BsShare } from "react-icons/bs";
const Home = () => {
  const [showPost, setShowPost] = useState(false);
  const [activeTab, setActiveTab] = useState("public");

  const [active, setActive] = useState(false);
  const [showToght, setShowToght] = useState(false);
  const [showMobileToght, setShowMobileToght] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [showUserDetails, setUserDetails] = useState(false);
  const [activeSection, setActiveSection] = useState("toght");
  const [postComment, showPostComment] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showMultipleToghts, setShowMultipleToghts] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log(position)
    setScrollPosition(position);
  };
  const handleActive = () => {
    setActive(!active);
  };

  const togglePostComment = () => {
    showPostComment(!postComment);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // useEffect(()=>{
  //   console.log(scrollPosition)

  // },[scrollPosition])

  const toggleToght = () => {
    setShowPost(!showPost);
  };

  const toggleUserDetails = () => {
    setUserDetails(!showUserDetails);
  };

  const toggleToghtPost = () => {
    setShowToght(!showToght);
  };

  const toggleMobileToghtPost = () => {
    setShowMobileToght(!showMobileToght);
  };

  const toggleSidebar = () => {
    // console.log("working----");
    setShowSidebar(!showSidebar);
  };

  const [expandToght, setExpandToght] = useState(false);
  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      // console.log('User Swiped!', eventData)
      if (eventData.dir === "Left") {
        setShowMultipleToghts(true);
      } else if (eventData.dir === "Right") {
        setShowMultipleToghts(false);
      }
    },
    ...config,
  });

  const [isGeneral, setIsGeneral] = useState(false);

  const [btnSel, setBtnSel] = useState([
    { name: "News", isActive: false },
    { name: "Celebrities", isActive: false },
    { name: "Personal", isActive: false },
    { name: "Testimonial", isActive: false },
    { name: "Testimonials", isActive: false },
  ]);

  const leftHandler = (id) => {
    if (id === 1) return alert("No other toght");
    const toght = DATA.filter((data) => data.id === Number(id - 1));
    if (toght) setModalDetails(toght[0]);
  };

  const rightHandler = (id) => {
    if (id === 10) return alert("No other toght");

    const toght = DATA.filter((data) => data.id === Number(id + 1));
    if (toght[0].hasOwnProperty("id")) setModalDetails(toght[0]);
  };

  const handleBtnSel = (item) => {
    const newArr = btnSel.filter((menu) => {
      menu.isActive = false;
      if (menu.name !== item) return menu;
    });
    setBtnSel([{ name: item, isActive: true }, ...newArr]);
  };
  // const { topic, author, category, time, details, postImage } = POST;
  const { name, userName, like, disLike, comment, noOfComment } = COMMENT;

  return (
    <div>
      {/* || for small screen */}
      <div className={`sidebar d-block d-lg-none ${showSidebar ? "show" : ""}`}>
        <Sidebar show={showSidebar} toggleShow={toggleSidebar} />
      </div>
      {/* ||SMALL SCREEN */}
      <div className="d-lg-none d-block bg-white fixed-top ">
        <MobileHeader toggleShow={toggleSidebar} />
        <div className="d-flex flex-column d-md-none  align-items-center justify-content-center ">
          <select
            className="header-select mr-25"
            style={{
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: 0,
            }}
          >
            <option>Nigeria</option>
          </select>
          <div className="d-flex">
            <select
              className="header-select "
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              <option>Portharcourt</option>
            </select>
            <p className="mb-0 px-1">|</p>
            <div className="d-flex align-items-center">
              <GoPrimitiveDot color="#4DEC70" />
              <p className="mb-0 online-user-counter fw-bold">50,000</p>
            </div>
          </div>
        </div>
        {/* || for small screen */}
        <div className="px-3 px-md-0 d-flex toghts-section-Homeer overflow-auto mt-2">
          <p
            className="toght-section mb-0 position-relative"
            onClick={() => setIsGeneral(!isGeneral)}
          >
            {isGeneral ? (
              <AiFillStar
                style={{
                  color: "yellow",
                  fontSize: "10px",
                  position: "absolute",
                  top: "4px",
                }}
              />
            ) : (
              ""
            )}
            <span className="d-block"> General</span>
          </p>
          {btnSel?.length &&
            btnSel.map((item, index1) => (
              <p
                key={index1}
                onClick={() => handleBtnSel(item.name)}
                className="toght-section mb-0 position-relative"
              >
                {item.isActive ? (
                  <AiFillStar
                    style={{
                      color: "yellow",
                      fontSize: "10px",
                      position: "absolute",
                      top: "4px",
                    }}
                  />
                ) : (
                  ""
                )}
                <span className="d-block">{item.name}</span>
              </p>
            ))}
        </div>

        <div className="border-bottom ">
          <p
            className="mb-0 pt-3 pb-3 text-center"
            style={{
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            Admin Message Panel
          </p>
        </div>
      </div>
      {/* ||BIG SCEEN */}

      <div className="toghts-container bg-white  pt-md-3 px-md-3 pb-0 app-section user-notification-mobil">
        <div
          className="position-sticky bg-white pt-4 "
          style={{ top: "-16px" }}
        >
          <div className="px-3 px-md-0  pt-2  toghts-section-Homeer overflow-auto d-none d-lg-flex">
            <p
              className="toght-section mb-0 cursor-pointer"
              onClick={() => setIsGeneral(!isGeneral)}
            >
              {isGeneral ? (
                <AiFillStar
                  style={{
                    color: "yellow",
                    fontSize: "10px",
                    position: "absolute",
                    top: "35px",
                  }}
                />
              ) : (
                ""
              )}
              <span className="d-block"> General</span>
            </p>
            {btnSel?.length &&
              btnSel.map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleBtnSel(item.name)}
                  className="toght-section mb-0 cursor-pointer"
                >
                  {item.isActive ? (
                    <AiFillStar
                      style={{
                        color: "yellow",
                        fontSize: "10px",
                        position: "absolute",
                        top: "35px",
                      }}
                    />
                  ) : (
                    ""
                  )}
                  <span className="d-block">{item.name}</span>
                </p>
              ))}
          </div>
          <div className="home-separator mt-2 "></div>
        </div>
        {/* SMALL SCREEN TOGHTS */}
        <div className="toght-wrapper   px-2 px-md-0 d-block d-md-none ">
          {DATA.map((item) => {
            return (
              <div
                key={item.id}
                role="button"
                className="toght  d-flex justify-content-between align-items-center "
              >
                <div className="d-flex">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      zIndex: "999",
                    }}
                    onClick={() => {
                      setModalDetails(item);

                      toggleUserDetails();
                    }}
                  >
                    <img
                      src={item.profileimage}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className="toght-details">
                    <p
                      onClick={() => {
                        setModalDetails(item);
                        toggleMobileToghtPost();
                      }}
                      className="toght-header mb-1"
                    >
                      {item.topic}
                    </p>
                    <div
                      className="d-flex justify-content-between  width
                     align-items-center"
                    >
                      <span className="toght-author width">
                        {" "}
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          By
                        </span>{" "}
                        {item.author}
                      </span>
                      <span className="toght-location d-flex mb-0 text-left nowrap">
                        {item.location}
                        <span className="px-1">away</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={high} alt="..." />
                </div>
              </div>
            );
          })}
        </div>
        {/* BIG SCREEN TOGHTS */}

        <div className="toght-wrapper mt-2   px-md-3 d-none d-md-block ">
          {/* <div className="notifications-container"></div> */}

          {DATA.map((item) => {
            return (
              <div
                key={item.id}
                role="button"
                className="toght d-flex justify-content-between align-items-center "
              >
                <div className="d-flex">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      setModalDetails(item);
                      toggleUserDetails();
                    }}
                  >
                    <img
                      src={item.profileimage}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className="toght-details">
                    <p
                      className="toght-header mb-1 cursor-pointer"
                      onClick={() => {
                        setModalDetails(item);
                        toggleToghtPost();
                      }}
                    >
                      {item.topic}
                      <span className="toght-author"> By {item.author}</span>
                    </p>
                    <p className="toght-location mb-0 text-left">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div>
                  <img src={high} alt="..." />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All MODAL BOX BELOW */}

      {/* || big screen comment box */}
      <Modal isOpen={showToght} toggle={toggleToghtPost} size="xl">
        <Row className="gx-0">
          {modalDetails.hasOwnProperty("id") ? (
            <Col sm="12" md="7" className="toght-full-details">
              <div
                className="post-toght-header pt-2 pb-3 px-2 "
                style={{
                  borderRadius: "none",
                }}
              >
                <div className="d-flex align-items-center">
                  <Link to="/app/profile-v">
                    <div className="commenter">
                      <img
                        src={modalDetails.profileimage}
                        alt="..."
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </div>
                  </Link>
                  <span>
                    <h3 className="post-details-header mb-0">
                      {" "}
                      {modalDetails.topic}{" "}
                    </h3>

                    <h3
                      className=" mb-0 post-details-header"
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#3A3A3A",
                      }}
                    >
                      {" "}
                      By: @{modalDetails.author}
                    </h3>
                  </span>
                </div>
              </div>
              <div className="px-4 mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4
                      className="mb-0"
                      style={{
                        fontSize: "11px",
                        fontWeight: "400",
                        color: "#3A3A3A",
                      }}
                    >
                      Category: {modalDetails.category}
                    </h4>
                    <p
                      className="mb-0"
                      style={{
                        fontWeight: "700",
                        fontSize: "8px",
                        color: "#B7B7B7",
                      }}
                    >
                      {modalDetails.time} ago
                    </p>
                  </div>
                  <div>
                    <img src={high} alt="..." />
                  </div>
                </div>
                <div className="toght-details-wrapper mb-0">
                  <div>
                    <div className="d-flex align-items-center justify-content-center h-100 mb-2">
                      <div>
                        <img src={modalDetails.postImage} alt="..." />
                      </div>
                    </div>

                    {/* || PREVIOUS TOGHT BUTTON */}
                    <div className="previous-toght-btn">
                      <MdArrowBackIosNew
                        onClick={() => leftHandler(modalDetails.id)}
                        className="cursor-pointer"
                        size={45}
                        style={{ color: "white" }}
                      />
                    </div>
                    <p
                      className="toght-description "
                      style={{ textAlign: "justify" }}
                    >
                      <span className="fw-bold">Liposuction</span>{" "}
                      {modalDetails.details}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center  align-items-center mb-3 mt-1">
                  <div className="post-icon d-flex align-items-center">
                    <div>
                      <img src={p1} alt="..." />
                    </div>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "15.0392px",
                        color: "#878282",
                        marginLeft: "6px",
                      }}
                    >
                      100k
                    </p>
                  </div>
                  <div className="post-icon d-flex align-items-center">
                    <div>
                      <img src={p2} alt="..." />
                    </div>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "15.0392px",
                        color: "#878282",
                        marginLeft: "6px",
                      }}
                    >
                      246
                    </p>
                  </div>
                  <div className="post-icon d-flex align-items-center">
                    <div>
                      <img src={p3} alt="..." />
                    </div>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "15.0392px",
                        color: "#878282",
                        marginLeft: "6px",
                      }}
                    >
                      245
                    </p>
                  </div>
                  <div className="post-icon d-flex align-items-center">
                    <div>
                      <MdReport size="25" color="#8a8484" />
                    </div>
                  </div>
                  <div className="post-icon d-flex align-items-center">
                    <div>
                      <BiShareAlt style={{ color: "grey", fontSize: "20px" }} />
                    </div>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "15.0392px",
                        color: "#878282",
                        marginLeft: "6px",
                      }}
                    >
                      20k
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ) : (
            <Col sm="12" md="7" className="toght-full-details">
              <div> No result found</div>
            </Col>
          )}

          <Col sm="12" md="5">
            <div className=" py-1 px-1 pb-2 ">
              <div className=" px-3 pt-1 pb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h3
                    className="mb-0"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Comments{" "}
                  </h3>
                  <div className="">
                    <img
                      src={settings}
                      alt="..."
                      style={{ width: "20px" }}
                      className="topic-filter-image"
                    />
                  </div>
                </div>
              </div>
              <div className="comments-details-wrapper mb-0">
                <div>
                  <div className="toght-wrapper   px-2">
                    <div className="comments-container ">
                      {/* || NEXT TOGHT BUTTON */}

                      <div
                        className="next-toght-btn"
                        onClick={() => rightHandler(modalDetails.id)}
                      >
                        <MdOutlineNavigateNext
                          className="cursor-pointer text-white"
                          size={120}
                        />
                      </div>

                      {COMMENT.map((item) => {
                        return (
                          <div className="mt-1 d-flex  ">
                            <Link to="/app/profile-v">
                              <div>
                                <img src={com} alt="..." />
                              </div>
                            </Link>
                            <div>
                              <div className="comment-wrapper ">
                                <p className="comments-poster mb-0">
                                  {item.name}
                                  <span
                                    className="fw-bold"
                                    style={{
                                      fontSize: "12px",
                                      color: "#B7B7B7",
                                    }}
                                  >
                                    @{item.userName}
                                  </span>
                                </p>
                                <p className="comment-text m-0">
                                  {item.comment}
                                </p>
                              </div>
                              <div className="d-flex justify-content-center   align-items-center mb-3 mt-1">
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <img src={p2} alt="..." />
                                  </div>
                                  <p
                                    className="mb-0"
                                    style={{
                                      fontSize: "15.0392px",
                                      color: "#878282",
                                      marginLeft: "6px",
                                    }}
                                  >
                                    {item.like}
                                  </p>
                                </div>
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <img src={p3} alt="..." />
                                  </div>
                                  <p
                                    className="mb-0"
                                    style={{
                                      fontSize: "15.0392px",
                                      color: "#878282",
                                      marginLeft: "6px",
                                    }}
                                  >
                                    {item.disLike}
                                  </p>
                                </div>
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <MdReport size="25" color="#8a8484" />
                                  </div>
                                </div>
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <img
                                      src={close}
                                      width="12px"
                                      height="12px"
                                      alt="..."
                                    />
                                  </div>
                                  <p
                                    className="mobile-comment-icon mb-0"
                                    style={{
                                      fontSize: "15.0392px",
                                      color: "#878282",
                                      marginLeft: "6px",
                                    }}
                                  >
                                    {item.noOfComment}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div
                        className="d-flex align-items-center bg-white  position-sticky"
                        style={{ bottom: "-20px" }}
                      >
                        <Input />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
      {/* ||MODAL EXPAND  */}
      {/* ||MODAL EXPAND  SMALL SCREEN MODAL */}

      <Modal
        isOpen={showMobileToght}
        toggle={toggleMobileToghtPost}
        // backdropClassName='position-relative'
        // wrapClassName='modal-testing'
        className="modal-dialog-centered   position-relative"
        // backdropClassName='position-relative'
        size="md"
      >
        {/* ||mobile comment box */}
        <div {...handlers}>
          <Row className="gx-0 ">
            {modalDetails.hasOwnProperty("id") ? (
              <Col sm="12" md="12" className="toght-full-details ">
                <div
                  className="post-toght-header pt-2 pb-3 px-2 "
                  style={{
                    borderRadius: "none",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div className="commenter">
                      <img
                        src={modalDetails.profileimage}
                        alt="..."
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3 className=" post-details-header mb-0">
                          {modalDetails.topic}
                        </h3>
                        <h3
                          className=" mb-0 post-details-header"
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#3A3A3A",
                          }}
                        >
                          {" "}
                          By: @{modalDetails.author}
                        </h3>
                      </div>
                      <div className="" onClick={toggleMobileToghtPost}>
                        {/* <img
                          src={comment}
                          alt="..."
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        /> */}
                        <VscClose />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h4
                        style={{
                          fontSize: "11px",
                          fontWeight: "400",
                          color: "#3A3A3A",
                        }}
                      >
                        Category: {modalDetails.category}
                      </h4>
                      <p
                        className="mb-0"
                        style={{
                          fontWeight: "700",
                          fontSize: "8px",
                          color: "#B7B7B7",
                        }}
                      >
                        {modalDetails.time} ago
                      </p>
                    </div>
                    <div>
                      <img src={high} alt="...." width="18px" height="18px" />
                    </div>
                  </div>
                  {expandToght && (
                    <div
                      onClick={() => {
                        setExpandToght(false);
                      }}
                      className="mb-2"
                    >
                      {" "}
                      <BiArrowBack size="25" className="mb-4" />
                    </div>
                  )}
                  {activeSection === "toght" ? (
                    <div className="position-relative">
                      <div
                        className={`toght-details-wrapper mb-0 mx-1 ${
                          expandToght ? "toght-expanded" : ""
                        }`}
                      >
                        <div className="position-relative">
                          <div className="d-flex align-items-center justify-content-center h-100 mb-2">
                            <div>
                              <img
                                src={modalDetails.postImage}
                                alt="..."
                                width="100%"
                              />
                            </div>
                          </div>
                          <p
                            className={` ${
                              expandToght
                                ? "toght-description-expanded"
                                : "toght-description mobile"
                            }`}
                          >
                            {/* <span className="fw-bold">Liposuction</span>  */}
                            {modalDetails.details}
                          </p>
                          {!expandToght && (
                            <div className="text-center w-100 d-flex align-items-center justify-content-center">
                              <button
                                className="mb-0 expand-toght-btn position-sticky px-3"
                                style={{
                                  bottom: "0px",
                                }}
                                onClick={() => {
                                  setExpandToght(true);
                                }}
                              >
                                Expand
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {!expandToght && (
                        <div className="d-flex justify-content-start align-items-center mb-3 mt-1">
                          <div className="post-icon d-flex align-items-center">
                            <div>
                              <img src={p1} alt="..." />
                            </div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "15.0392px",
                                color: "#878282",
                                marginLeft: "6px",
                              }}
                            >
                              100k
                            </p>
                          </div>
                          <div className="post-icon d-flex align-items-center">
                            <div>
                              <img src={p2} alt="..." />
                            </div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "15.0392px",
                                color: "#878282",
                                marginLeft: "6px",
                              }}
                            >
                              245
                            </p>
                          </div>
                          <div className="post-icon d-flex align-items-center">
                            <div>
                              <img src={p3} alt="..." />
                            </div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "15.0392px",
                                color: "#878282",
                                marginLeft: "6px",
                              }}
                            >
                              245
                            </p>
                          </div>
                          <div className="post-icon d-flex align-items-center">
                            <div>
                              <MdReport size="25" color="#8a8484" />
                            </div>
                          </div>
                          <div className="post-icon d-flex align-items-center">
                            <div>
                              <BiShareAlt
                                style={{ color: "grey", fontSize: "20px" }}
                              />
                            </div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "15.0392px",
                                color: "#878282",
                                marginLeft: "6px",
                              }}
                            >
                              20k
                            </p>
                          </div>
                        </div>
                      )}

                      {showMultipleToghts && !expandToght && (
                        <div
                          className="position-absolute w-100"
                          style={{
                            top: "200px",
                            right: "-69px",
                            opacity: "0.8",
                          }}
                        >
                          {MULTITOGHT.map((item) => {
                            return (
                              <div
                                key={item.id}
                                role="button"
                                className="toght d-flex justify-content-between align-items-center bg-white "
                                style={{
                                  boxShadow:
                                    "0px 0px 2.43478px 1.21739px rgb(0 0 0 / 20%)",
                                  width: "270px",
                                }}
                              >
                                <div className="d-flex">
                                  <div
                                    style={{
                                      width: "35px",
                                      height: "35px",
                                      borderRadius: "50%",
                                      zIndex: "999",
                                    }}
                                    // onClick={() => {
                                    //   toggleUserDetails();
                                    // }}
                                    onClick={toggleUserDetails}
                                  >
                                    <img
                                      src={pfp}
                                      alt=".."
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                      }}
                                    />
                                  </div>
                                  <div className="toght-details">
                                    <p
                                      onClick={() => {
                                        setModalDetails(item);
                                        toggleMobileToghtPost();
                                      }}
                                      // onClick={toggleMobileToghtPost}
                                      className="toght-header mb-0"
                                      style={{
                                        fontSize: "10.9565px",
                                      }}
                                    >
                                      {item.topic}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <span className="toght-author">
                                        {" "}
                                        <span
                                          style={{
                                            fontSize: "8px",
                                            fontWeight: "400",
                                          }}
                                        >
                                          By
                                        </span>{" "}
                                        {item.author}
                                      </span>
                                      <p className="toght-location mb-0 text-left">
                                        {item.location}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    src={high}
                                    alt="..."
                                    height="17px"
                                    width="17px"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div
                          className="text-right d-flex justify-content-between align-items-center my-3"
                          onClick={() => {
                            setActiveSection("toght");
                          }}
                        >
                          <VscSettings size="15" />
                          <div>
                            <VscClose />
                          </div>
                        </div>
                      </div>
                      {Array.from(Array(3)).map(() => (
                        <div className="comments-container">
                          <div className="mt-1 d-flex  ">
                            <Link to="/app/profile-v">
                              <div>
                                <img src={com} alt="..." />
                              </div>
                            </Link>
                            <div>
                              <div className="comment-wrapper ">
                                <p className="comments-poster mb-0">
                                  Cee-man{" "}
                                  <span
                                    className="fw-bold"
                                    style={{
                                      fontSize: "12px",
                                      color: "#B7B7B7",
                                    }}
                                  >
                                    @Xmen_don
                                  </span>
                                </p>
                                <p className="comment-text m-0">
                                  Great read, i was enlightened, as someone who
                                  has had a family member go through this, i
                                  understand what it’s all about.
                                </p>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-3 mt-1">
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <img
                                      src={p2}
                                      alt="..."
                                      width="12px"
                                      height="12px"
                                    />
                                  </div>
                                  <p
                                    className="mobile-comment-icon mb-0"
                                    style={{
                                      fontSize: "15.0392px",
                                      color: "#878282",
                                      marginLeft: "6px",
                                    }}
                                  >
                                    245
                                  </p>
                                </div>
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <img
                                      src={p3}
                                      alt="..."
                                      width="12px"
                                      height="12px"
                                    />
                                  </div>
                                  <p
                                    className="mobile-comment-icon mb-0"
                                    style={{
                                      fontSize: "15.0392px",
                                      color: "#878282",
                                      marginLeft: "6px",
                                    }}
                                  >
                                    245
                                  </p>
                                </div>
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <MdReport size="20" color="#8a8484" />
                                  </div>
                                </div>
                                <div className="post-icon d-flex align-items-center">
                                  <div>
                                    <img
                                      src={close}
                                      width="12px"
                                      height="12px"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!expandToght && (
                    // ||post comment button
                    <div className="d-flex  my-4">
                      <div
                        className="w-100"
                        style={{
                          margin: "0 11px",
                        }}
                      >
                        <p
                          className="comment-toght-counter mb-0 align-items-center"
                          onClick={() => {
                            setActiveSection("");
                          }}
                        >
                          <span className="fw-bold text-black pb-2">
                            View 1,000
                          </span>{" "}
                          Comments
                        </p>

                        <Input />
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            ) : (
              <Col sm="12" md="7" className="toght-full-details">
                <div> No result found</div>
              </Col>
            )}
          </Row>
        </div>
        {activeSection === "toght" && !expandToght && (
          // ||Next comment header
          <div
            className="toghts-change-controller position-absolute w-100 py-3"
            style={{
              bottom: 0,
            }}
          ></div>
        )}
      </Modal>
      {/* ||MODAL View profile */}
      <Modal
        isOpen={showUserDetails}
        toggle={toggleUserDetails}
        className="modal-dialog-centered"
        size="sm"
      >
        {modalDetails.hasOwnProperty("id") ? (
          <div>
            <div className="mobile-modal-card-details">
              <div
                className="d-flex justify-content-end"
                onClick={() => {
                  toggleUserDetails();
                }}
              >
                <VscClose />
              </div>
              <div className="d-flex">
                <div>
                  <img
                    alt="..."
                    src={modalDetails.profileimage}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      border: "1px solid rgba(58, 58, 58, 0.2)",
                    }}
                  />
                </div>
                <div className="mobile-user-details-container">
                  <h3 className="user-modal-name mb-0">
                    {modalDetails.author}
                  </h3>
                  <p className="user-modal-username mb-0">
                    @{modalDetails.userName}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <button className="mobile-subscribe-btn btn px-4">
                  Subscribe
                </button>
                <p className="mobile-subscriber-counter mb-0">
                  50K Subscribers
                </p>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <div>
                  <img src={link} alt="icon" />
                </div>
                <div>
                  <p className="info-details mb-0">Joined August 12 2022</p>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <div>
                  <img src={location} alt="icon" />
                </div>
                <div>
                  <p className="info-details mb-0">Nigeria, Port-harcourt</p>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <div>
                  <img src={cloud} alt="icon" />
                </div>
                <div>
                  <p className="info-details mb-0">201</p>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <div>
                  <img src={message} alt="icon" />
                </div>
                <div>
                  <p className="info-details mb-0">3400</p>
                </div>
              </div>
              <div className="mb-1 d-flex align-items-center">
                <div>
                  <img src={p2} alt="icon" />
                </div>
                <div>
                  <p className="info-details mb-0">3500</p>
                </div>
              </div>
            </div>
            <Link
              to="/app/profile-v"
              style={{
                textDecoration: "none",
              }}
            >
              <h3
                className="text-center mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "#5B3896",
                }}
              >
                View Profile
              </h3>
            </Link>
          </div>
        ) : (
          <div sm="12" md="7" className="toght-full-details">
            <div> No result found</div>
          </div>
        )}
      </Modal>
      {/* || Post COMMENT MODAL */}
      <Modal
        isOpen={postComment}
        toggle={togglePostComment}
        className=" modal-dialog-centered"
        // backdrop={false}
        backdropClassName="modal-backdrop-no-blur"
      >
        <div className="d-flex justify-content-between post-toght-header py-3 px-2 border-top">
          <div></div>
          <h3 className="text-center post-toght-title">Post Comment</h3>
          <div
            onClick={() => {
              showPostComment(!postComment);
            }}
          >
            <VscClose className="cursor-pointer" size={25} />
          </div>
        </div>
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-center mx-auto w-50 mt-1 mb-3 ">
            <div
              onClick={() => {
                setActiveTab("public");
              }}
              className={`  rounded px-3 w-100 text-center cursor-pointer py-1 ${
                activeTab === "public" ? "active-tab" : ""
              }`}
              style={{
                marginRight: "12px",
                border: "0.5px solid #B7B7B7",
                borderRadius: "10px",
              }}
            >
              Public
            </div>
            <div
              onClick={() => {
                setActiveTab("anonymous");
              }}
              className={`d-flex border  cursor-pointer rounded px-3 w-100 text-center py-1 align-items-center w-100 ${
                activeTab === "anonymous" ? "active-tab" : ""
              }`}
              style={{
                border: "0.5px solid #B7B7B7 !important",
                borderRadius: "10px !important",
              }}
            >
              Anonymous
            </div>
          </div>
          <textarea
            className="post-toght-wrapper-textarea w-100 form-control"
            rows="7"
          />

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
            </div>

            <button
              className="post-toght-button"
              onClick={() => {
                toggleMobileToghtPost();
                togglePostComment();
                setActiveSection("");
              }}
            >
              Post Comment
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
