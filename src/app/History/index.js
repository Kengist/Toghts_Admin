import React, { useState, useEffect, useLayoutEffect } from "react";
import { Modal, Row, Col } from "reactstrap";
import pfp from "../../asset/img/pfp.png";
import em from "../../asset/img/em.svg";
import gal_min from "../../asset/img/gallery.svg";
import send from "../../asset/img/send.svg";
import close from "../../asset/img/close.svg";
import comment from "../../asset/img/comment.svg";

import video from "../../asset/img/video.png";
import attach from "../../asset/img/attach.png";
import high from "../../asset/img/Vector-edit.png";
import medium from "../../asset/img/toghtmedium.png";
import low from "../../asset/img/toghtlow.png";
import gallery from "../../asset/img/gallery.png";
import microphone from "../../asset/img/microphone-2.png";
import poll from "../../asset/img/poll.png";
import hashtag from "../../asset/img/hashtag.png";
import com from "../../asset/img/com.png";
import p1 from "../../asset/img/1.png";
import p2 from "../../asset/img/2.png";
import p3 from "../../asset/img/3.png";
import p4 from "../../asset/img/4.png";
import p5 from "../../asset/img/5.png";
import link from "../../asset/img/link-2.svg";
import location from "../../asset/img/location.svg";
import cloud from "../../asset/img/cloud-plus.svg";
import message from "../../asset/img/messages-2.svg";
import like from "../../asset/img/like.svg";
import { HiArrowLeft } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { VscClose } from "react-icons/vsc";

import toght from "../../asset/img/liposuction 1.png";
import MobileHeader from "../../components/layout/MobileHeader";
import Sidebar from "../../components/layout/Sidebar";
import { NavLink } from "react-router-dom";
import { DATA } from "../../utils/data/DATA";
import Input from "../../components/input/Input";
import { BiShareAlt } from "react-icons/bi";

const Home = () => {
  const [active, setActive] = useState(false);

  const [showPost, setShowPost] = useState(false);
  const [showToght, setShowToght] = useState(false);
  const [showMobileToght, setShowMobileToght] = useState(false);
  const [showUserDetails, setUserDetails] = useState(false);
  const [activeSection, setActiveSection] = useState("toght");

  const [showSidebar, setShowSidebar] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(window.pageYOffset);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll)
    // }
  }, []);

  // useEffect(()=>{
  //   console.log(scrollPosition)

  // },[scrollPosition])
  const handleActive = () => {
    setActive(!active);
  };
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
    console.log("working----");
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-white px-0 px-lg-3 py-0 py-lg-2">
      <div className=" d-block fixed-top bg-white d-flex align-items-center py-4 px-4 py-md-3">
        <NavLink
          to="/app"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <HiArrowLeft size="25" />
        </NavLink>
        <div className="w-100 d-flex align-items-center justify-content-center">
          <p
            className="mb-0 text-center"
            style={{
              fontWeight: "600",
              fontSize: "20px",
              lineheight: "27px",

              color: "#3A3A3A",
            }}
          >
            Last viewed toght
          </p>
        </div>
      </div>

      <div className="history-container">
        <div className="toght-wrapper mt-4 mb-4 px-3 px-md-0 d-none d-md-block">
          {DATA.map((item, i) => {
            return (
              <div
                key={i}
                role="button"
                className="toght d-flex justify-content-between align-items-center "
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
                      toggleUserDetails();
                    }}
                  >
                    <img
                      src={pfp}
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
                      onClick={toggleMobileToghtPost}
                      className="toght-header mb-1"
                    >
                      {item.topic}
                    </p>
                    <div className="d-flex  align-items-center">
                      <span className="toght-author mx-3">
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
                      <p className="toght-location mb-0 text-left">
                        {item.location}
                      </p>
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

        <div className="toght-wrapper my-4 mb-5 pb-4 px-2 px-md-0 d-block d-md-none">
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
                      zIndex: "999",
                    }}
                    onClick={() => {
                      toggleUserDetails();
                    }}
                  >
                    <img
                      src={pfp}
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
                      onClick={toggleMobileToghtPost}
                      className="toght-header  mb-1"
                    >
                      {item.topic}
                    </p>
                    <div className="d-flex  align-items-center">
                      <span className="toght-author mx-3">
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
                      <p className="toght-location mb-0 text-left">
                        {item.location}
                      </p>
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
      </div>

      <Modal isOpen={showPost} toggle={toggleToght}>
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
            <div className="d-flex border  rounded align-items-center w-100">
              <input
                placeholder="Header"
                className="form-control post-header-input py-2 w-100 px-3"
                style={{
                  border: "none",
                }}
              />
            </div>
          </div>
          <textarea
            className="post-toght-wrapper-textarea w-100 form-control"
            rows="9"
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
                Detach Toghts
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

            <button className="post-toght-button">Post Toghts</button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={showToght} toggle={toggleToghtPost} size="xl">
        <Row className="gx-0">
          <Col sm="12" md="7" className="toght-full-details">
            <div
              className="post-toght-header pt-2 pb-3 px-2 "
              style={{
                borderRadius: "none",
              }}
            >
              <div className="d-flex align-items-center">
                <div className="commenter">
                  <img
                    src={com}
                    alt="..."
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </div>
                <h3 className="post-details-header mb-0">
                  The Liposuction Mania
                </h3>
              </div>
            </div>
            <div className="px-4 mt-3">
              <div>
                <h4
                  className="mb-0"
                  style={{
                    fontSize: "11px",
                    fontWeight: "400",
                    color: "#3A3A3A",
                  }}
                >
                  Category: Health
                </h4>
                <p
                  className="mb-0"
                  style={{
                    fontWeight: "700",
                    fontSize: "8px",
                    color: "#B7B7B7",
                  }}
                >
                  6m ago
                </p>
              </div>
              <div className="toght-details-wrapper mb-0">
                <div>
                  <div className="d-flex align-items-center justify-content-center h-100 mb-2">
                    <div>
                      <img src={toght} alt="..." />
                    </div>
                  </div>
                  <p className="toght-description">
                    <span className="fw-bold">Liposuction</span> is a surgical
                    procedure that uses a suction technique to remove fat from
                    specific areas of the body, such as the abdomen, hips,
                    thighs, buttocks, arms or neck. Liposuction also shapes
                    (contours) these areas. Other names for liposuction include
                    lipoplasty and body contouring. Liposuction isn't typically
                    considered an overall weight-loss method or a weight-loss
                    alternative. If you're overweight, you're likely to lose
                    more weight through diet and exercise or through bariatric
                    procedures — such as gastric bypass surgery — than you would
                    with liposuction. You may be a candidate for liposuction if
                    you have too much body fat in specific spots but otherwise
                    have a stable body weight.
                  </p>
                </div>
              </div>
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
                    <img src={p4} alt="..." />
                  </div>
                </div>
                <div className="post-icon d-flex align-items-center">
                  <div>
                    <BiShareAlt style={{ color: "grey", fontSize: "20px" }} />{" "}
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
          <Col sm="12" md="5">
            <div className=" py-1 px-1 pb-2 ">
              <div className=" px-3 pt-1 pb-2">
                <div className="d-flex align-items-center">
                  <h3
                    className="mb-0"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Comments{" "}
                  </h3>
                </div>
              </div>
              <div className="toght-wrapper px-3">
                <div className="comments-container">
                  <div className="mt-1 d-flex  ">
                    <div>
                      <img src={com} alt="..." />
                    </div>
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
                          Great read, i was enlightened, as someone who has had
                          a family member go through this, i understand what
                          it’s all about.
                        </p>
                      </div>
                      <div className="d-flex justify-content-start align-items-center mb-3 mt-1">
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
                            <img src={p4} alt="..." />
                          </div>
                          <p
                            className="mb-0"
                            style={{
                              fontSize: "15.0392px",
                              color: "#878282",
                              marginLeft: "6px",
                            }}
                          >
                            20
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>

      <Modal
        isOpen={showMobileToght}
        toggle={toggleMobileToghtPost}
        className="modal-dialog-centered"
        // size="sm"
      >
        <Row className="gx-0">
          <Col sm="12" md="12" className="toght-full-details">
            <div
              className="post-toght-header pt-2 pb-3 px-2 "
              style={{
                borderRadius: "none",
              }}
            >
              <div className="d-flex align-items-center">
                <div className="commenter">
                  <img
                    src={com}
                    alt="..."
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h3 className="post-details-header mb-0">
                    The Liposuction Mania
                  </h3>
                  <div className="" onClick={toggleMobileToghtPost}>
                    <img
                      src={comment}
                      alt="..."
                      style={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mt-3">
              <div>
                <h4
                  className="mb-0"
                  style={{
                    fontSize: "11px",
                    fontWeight: "400",
                    color: "#3A3A3A",
                  }}
                >
                  Category: Health
                </h4>
                <p
                  className="mb-0"
                  style={{
                    fontWeight: "700",
                    fontSize: "8px",
                    color: "#B7B7B7",
                  }}
                >
                  6m ago
                </p>
              </div>
              {activeSection === "toght" ? (
                <div>
                  <div className="toght-details-wrapper mb-0">
                    <div>
                      <div className="d-flex align-items-center justify-content-center h-100 mb-2">
                        <div>
                          <img src={toght} alt="..." width="100%" />
                        </div>
                      </div>
                      <p className="toght-description">
                        <span className="fw-bold">Liposuction</span> is a
                        surgical procedure that uses a suction technique to
                        remove fat from specific areas of the body, such as the
                        abdomen, hips, thighs, buttocks, arms or neck.
                        Liposuction also shapes (contours) these areas. Other
                        names for liposuction include lipoplasty and body
                        contouring.
                      </p>
                      {/* <p className='mb-0 read-more-text'>Read more</p> */}
                    </div>
                  </div>

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
                        <img src={p4} alt="..." />
                      </div>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "15.0392px",
                          color: "#878282",
                          marginLeft: "6px",
                        }}
                      ></p>
                    </div>
                    <div className="post-icon d-flex align-items-center">
                      <div>
                        <BiShareAlt
                          style={{ color: "grey", fontSize: "20px" }}
                        />{" "}
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
              ) : (
                <div>
                  <div>
                    <div
                      className="text-right d-flex justify-content-end mb-3"
                      onClick={() => {
                        setActiveSection("toght");
                      }}
                    >
                      <img src={comment} />
                    </div>
                    <div className="mx-5">
                      <p className="comment-header mb-0">
                        <span style={{ fontWeight: "700" }}>1000 </span>Comments
                      </p>
                    </div>
                  </div>
                  <div className="comments-container">
                    <div className="mt-1 d-flex  ">
                      <div>
                        <img src={com} alt="..." />
                      </div>
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
                            Great read, i was enlightened, as someone who has
                            had a family member go through this, i understand
                            what it’s all about.
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
                              <img
                                src={p4}
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
                              20
                            </p>
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
                              20
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comments-container">
                    <div className="mt-1 d-flex  ">
                      <div>
                        <img src={com} alt="..." />
                      </div>
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
                            Great read, i was enlightened, as someone who has
                            had a family member go through this, i understand
                            what it’s all about.
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
                              <img
                                src={p4}
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
                              20
                            </p>
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
                              20
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="comments-container">
                    <div className="mt-1 d-flex  ">
                      <div>
                        <img src={com} alt="..." />
                      </div>
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
                            Great read, i was enlightened, as someone who has
                            had a family member go through this, i understand
                            what it’s all about.
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
                              <img
                                src={p4}
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
                              20
                            </p>
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
                              20
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <p
                className="comment-toght-counter mb-0 align-items-center"
                onClick={() => {
                  setActiveSection("");
                }}
              >
                <span className="fw-bold text-black">1000</span> Comments
              </p>

              <Input />
              {/* <div className="d-flex  my-4">
                <div className="mt-3">
                  <img src={pfp} width="45px" />
                </div>
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
                    <span className="fw-bold text-black">1000</span> Comments
                  </p>
                  <div>
                    <div className="comment-toght-input-wrapper d-flex  align-items-center">
                      <img src={em} width="15px" height="15px" />

                      <input className="comment-toght-input form-control px-1 py-0 " />
                      <div>
                        <img src={gal_min} width="15px" height="15px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    marginTop: "17px",
                  }}
                >
                  <img src={send} width="40px" />
                </div>
              </div> */}
            </div>
          </Col>
          {/* <Col sm='12' md='5'>
            <div className=' py-1 px-1 pb-2 '>
              <div className=' px-3 pt-1 pb-2'>
                <div className='d-flex align-items-center'>
                  <h3
                    className='mb-0'
                    style={{
                      fontWeight: '600',
                      fontSize: '20px'
                    }}
                  >
                    Comments{' '}
                  </h3>
                </div>
              </div>
              <div className='toght-wrapper px-3'>
                <div className='comments-container'>
                  <div className='mt-1 d-flex  '>
                    <div>
                      <img src={com} alt='...' />
                    </div>
                    <div>
                      <div className='comment-wrapper '>
                        <p className='comments-poster mb-0'>
                          Cee-man{' '}
                          <span
                            className='fw-bold'
                            style={{
                              fontSize: '12px',
                              color: '#B7B7B7'
                            }}
                          >
                            @Xmen_don
                          </span>
                        </p>
                        <p className='comment-text m-0'>
                          Great read, i was enlightened, as someone who has had
                          a family member go through this, i understand what
                          it’s all about.
                        </p>
                      </div>
                      <div className='d-flex justify-content-start align-items-center mb-3 mt-1'>
                        <div className='post-icon d-flex align-items-center'>
                          <div>
                            <img src={p2} alt='...' />
                          </div>
                          <p
                            className='mb-0'
                            style={{
                              fontSize: '15.0392px',
                              color: '#878282',
                              marginLeft: '6px'
                            }}
                          >
                            245
                          </p>
                        </div>
                        <div className='post-icon d-flex align-items-center'>
                          <div>
                            <img src={p3} alt='...' />
                          </div>
                          <p
                            className='mb-0'
                            style={{
                              fontSize: '15.0392px',
                              color: '#878282',
                              marginLeft: '6px'
                            }}
                          >
                            245
                          </p>
                        </div>
                        <div className='post-icon d-flex align-items-center'>
                          <div>
                            <img src={p4} alt='...' />
                          </div>
                          <p
                            className='mb-0'
                            style={{
                              fontSize: '15.0392px',
                              color: '#878282',
                              marginLeft: '6px'
                            }}
                          >
                            20
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Modal>

      <Modal
        isOpen={showUserDetails}
        toggle={toggleUserDetails}
        className="modal-dialog-centered"
        size="sm"
      >
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
                src={pfp}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid rgba(58, 58, 58, 0.2)",
                }}
              />
            </div>
            <div className="mobile-user-details-container">
              <h3 className="user-modal-name mb-0">Daniel Utong</h3>
              <p className="user-modal-username mb-0">@Killerdemswag</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center my-2">
            <button className="mobile-subscribe-btn btn px-4">Subscribe</button>
            <p className="mobile-subscriber-counter mb-0">50K Subscribers</p>
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
              <img src={like} alt="icon" />
            </div>
            <div>
              <p className="info-details mb-0">3400</p>
            </div>
          </div>
        </div>
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
      </Modal>
    </div>
  );
};

export default Home;
