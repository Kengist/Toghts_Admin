import React, { useState, useEffect, useRef } from "react";
import pfp from "../../asset/img/pfp.png";
import filter from "../../asset/img/filter.svg";
import plus from "../../asset/img/plus-circle.svg";
import { Modal, Row, Col } from "reactstrap";
import Topic from "./Topic";
import People from "./People";
// import p1 from '../../asset/img/1.png'
import sms from "../../asset/img/smss.png";
import p2 from "../../asset/img/2.png";
import p3 from "../../asset/img/3.png";
// import p4 from "../../asset/img/4.png";
import com from "../../asset/img/com.png";
import close from "../../asset/img/close.svg";
import comment from "../../asset/img/comment.svg";
import gallery from "../../asset/img/gallery.png";
import microphone from "../../asset/img/microphone-2.png";
import poll from "../../asset/img/poll.png";
import settings from "../../asset/img/settings.svg";
import { Link } from "react-router-dom";
// import toght from "../../asset/img/liposuction 1.png";
import { BiCurrentLocation } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { VscClose } from "react-icons/vsc";
import Input from "../../components/input/Input";

const Search = ({ searchValue, handleSearch }) => {
  const [postComment, showPostComment] = useState(false);

  const [createTopic, setCreateTopic] = useState(false);
  const [activePage, setActivePage] = useState("topics");
  const [activeTab, setActiveTab] = useState("toghts");
  const [showMobileToght, setShowMobileToght] = useState(false);
  const [activeSection, setActiveSection] = useState("toght");
  const [locationType, setLocationType] = useState("far");

  const handleInputChange = (e) => {
    if (e.target.value.length > 0) {
      // console.log(e.target.value);
      console.log("object");
      setActivePage("topic");
    }
    // } else {
    //   setActivePage("topics");
    // }
  };
  const togglePostComment = () => {
    showPostComment(!postComment);
  };

  useEffect(() => {
    // console.log(searchValue);
    if (searchValue) {
      console.log(searchValue);
      if (searchValue.length > 0) {
        console.log("yes");
        setActivePage("topic");
      }
    } else {
      setActivePage("topics");
    }
  }, [searchValue]);
  const toggleMobileToghtPost = () => {
    setShowMobileToght(!showMobileToght);
  };

  const toggleTopic = () => {
    setCreateTopic(!createTopic);
  };
  return (
    <div>
      {/* || SMALL SCREEN SEARCH */}

      <div className="fixed-top bg-white d-block d-lg-none">
        <div
          className="d-flex fix bg-light align-items-center px-3 pb-3 pt-4 justify-content-between "
          style={{
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              margin: "0 15px  0 0px",
            }}
          >
            <img
              src={pfp}
              alt=".."
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div style={{ flexGrow: "1" }}>
            <input
              onChange={
                handleInputChange
                // handleSearch(e.target.value);
              }
              className="form-control w-100 mobile-search-inpu search-message py-3 px-4"
              placeholder="Search toghts in your city"
            />
          </div>

          <div style={{ flexGrow: "", margin: "0 0 0 15px" }}>
            <img src={filter} alt=".." width="25px" height="25px" />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-3">
          <div
            className="toght-category  border py-1"
            style={{
              // marginLeft: '25px',
              marginRight: "12px",
            }}
          >
            <select
              onClick={() => {
                setLocationType("far");
              }}
              className="header-select d-block d-lg-none search "
              style={{
                paddingLeft: 0,
              }}
            >
              <option>Portharcourt</option>
            </select>
          </div>
          <div
            className="proximity-wrapper px-2 py-1"
            onClick={() => {
              setLocationType("near");
            }}
          >
            <span> Proximity</span> <BiCurrentLocation size="20" />
          </div>
        </div>
        <div className="d-flex w-100 overflow-scroll align-items-center my-2 py-0 justify-content-center">
          <p className="toght-category search high  mb-0">All</p>
          <p className="toght-category search medium  mb-0">High</p>
          <p className="toght-category search low  mb-0">Low</p>
          <p className="toght-category search new  mb-0 mr-0">New</p>
        </div>

        <div
          className="px-3 pb-1 align-items-center search-section-header w-100"
          style={{
            borderBottom: "0.473462px solid #B7B7B7",
          }}
        >
          {activePage === "topics" && (
            <>
              {locationType === "near" ? (
                <div className="d-flex justify-content-between">
                  <h3 className="trending-topics-text mb-0 mx-auto">
                    Avaliable Topics
                  </h3>
                  <div
                    role="button"
                    className="d-flex justify-content-end text-right "
                    onClick={toggleTopic}
                  >
                    <img src={plus} alt="icon" width="24px" height="24px" />
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-between">
                  <h3 className="trending-topics-text mb-0 mx-auto">
                    Trending Topics
                  </h3>
                </div>
              )}
            </>
          )}
          {activePage === "topic" && (
            <div className="d-flex justify-content-center mb-1  ">
              <p
                onClick={(e) => {
                  setActiveTab("toghts");
                }}
                className={`topic-tab px-5 py-2 mb-0 ${
                  activeTab === "toghts" ? "active" : ""
                }`}
              >
                Toghts
              </p>
              <p
                onClick={(e) => {
                  setActiveTab("people");
                }}
                className={`topic-tab px-5 py-2 mb-0 ${
                  activeTab !== "toghts" ? "active" : ""
                }`}
              >
                People
              </p>
            </div>
          )}
        </div>
      </div>

      {/* big */}
      {activePage === "topics" && (
        <div className="toght-search-container px-2 py-3">
          {/* || BIG SCREEN SEARCH */}
          <div className=" bg-white d-lg-block d-none">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div
                className="toght-category  border py-1"
                style={{
                  // marginLeft: '25px',
                  marginRight: "12px",
                }}
              >
                <select
                  onClick={() => {
                    setLocationType("far");
                  }}
                  className="header-select d-block  search "
                  style={{
                    paddingLeft: 0,
                  }}
                >
                  <option>Portharcourt</option>
                </select>
              </div>
              <div
                className="proximity-wrapper px-2 py-1"
                onClick={() => {
                  setLocationType("near");
                }}
              >
                <span> Proximity</span> <BiCurrentLocation size="20" />
              </div>
            </div>
            <div className="d-flex w-100 overflow-scroll align-items-center my-2 py-0 justify-content-center">
              <p className="toght-category search high  mb-0">All</p>
              <p className="toght-category search medium  mb-0">High</p>
              <p className="toght-category search low  mb-0">Low</p>
              <p
                className="toght-category search new no-margin-right mb-0"
                style={{
                  marginRight: "0 !important",
                }}
              >
                New
              </p>
            </div>

            <div
              className="px-3 pb-1 align-items-center search-section-header w-100"
              style={{
                borderBottom: "0.473462px solid #B7B7B7",
              }}
            >
              {activePage === "topics" ? (
                <>
                  {locationType === "near" ? (
                    <div className="d-flex justify-content-between">
                      <h3 className="trending-topics-text mb-0 mx-auto">
                        Avaliable Topics
                      </h3>
                      <div
                        className="d-flex justify-content-end text-right "
                        onClick={toggleTopic}
                      >
                        <img src={plus} alt="icon" width="24px" height="24px" />
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-between">
                      <h3 className="trending-topics-text mb-0 mx-auto">
                        Trending Topics
                      </h3>
                    </div>
                  )}
                </>
              ) : (
                // <div className="d-flex justify-content-center mb-1">
                //   <p
                //     onClick={(e) => {
                //       setActiveTab("toghts");
                //     }}
                //     className={`topic-tab px-5 py-2 mb-0 ${
                //       activeTab === "toghts" ? "active" : ""
                //     }`}
                //   >
                //     Toghts
                //   </p>
                //   <p
                //     onClick={(e) => {
                //       setActiveTab("people");
                //     }}
                //     className={`topic-tab px-5 py-2 mb-0 ${
                //       activeTab !== "toghts" ? "active" : ""
                //     }`}
                //   >
                //     People
                //   </p>
                // </div>
                ""
              )}
            </div>
          </div>
          <ol>
            <li
              role="button"
              className="cursor-pointer trending-topic mb-0"
              onClick={() => {
                toggleMobileToghtPost();
              }}
            >
              #Ikwere road renovation
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>
            <li
              role="button"
              onClick={() => {
                toggleMobileToghtPost();
              }}
              className="cursor-pointer trending-topic mb-0"
            >
              #Local government election
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>

            <li
              role="button"
              onClick={() => {
                toggleMobileToghtPost();
              }}
              className="cursor-pointer trending-topic mb-0"
            >
              #Sooth
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>

            <li
              role="button"
              onClick={() => {
                toggleMobileToghtPost();
              }}
              className="cursor-pointer trending-topic mb-0"
            >
              #Power outage
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>

            <li
              role="button"
              onClick={() => {
                toggleMobileToghtPost();
              }}
              className="cursor-pointer trending-topic mb-0"
            >
              #Election 2023
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>

            <li
              role="button"
              onClick={() => {
                toggleMobileToghtPost();
              }}
              className="cursor-pointer trending-topic mb-0"
            >
              #Southeast
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>

            <li
              role="button"
              onClick={() => {
                toggleMobileToghtPost();
              }}
              className="cursor-pointer trending-topic mb-0"
            >
              #Inflation
            </li>
            <p className="mb-4 topic-comments">6,7589 Comments</p>
          </ol>
        </div>
      )}
      {activePage === "topic" && (
        <>
          <div className="d-flex justify-content-center  mt-2  ">
            <p
              onClick={(e) => {
                setActiveTab("toghts");
              }}
              className={`topic-tab px-5 py-2 mb-0 cursor-pointer ${
                activeTab === "toghts" ? "active" : ""
              }`}
            >
              Toghts
            </p>
            <p
              onClick={(e) => {
                setActiveTab("people");
              }}
              className={`topic-tab px-5 py-2 mb-0 cursor-pointer ${
                activeTab !== "toghts" ? "active" : ""
              }`}
            >
              People
            </p>
          </div>
          <hr />
        </>
      )}
      {/* MESSAGE ICON */}
      {activePage === "topic" ? (
        ""
      ) : (
        <div className="d-non d-md-non floating-btn">
          <Link to="/app/message">
            <div className=" ">
              <img src={sms} alt=".... not found" />
            </div>
          </Link>
        </div>
      )}
      {activePage === "topic" && activeTab === "toghts" && <Topic />}
      {activePage === "topic" && activeTab === "people" && <People />}

      <Modal
        isOpen={createTopic}
        toggle={toggleTopic}
        className="create-topic-modal modal-dialog-centered"
        // size='sm'
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="create-topic-card-header">
          <h2 className="create-topic-text py-2">Create Topic</h2>
        </div>
        <div>
          <div className="create-topic-form-wrapper">
            <form className="create-topic-card">
              <div>
                <label className="create-topic-label">Heading</label>
                <input className="create-topic-input w-100 py-3 form-control" />
              </div>
              <div>
                <label className="create-topic-label">Radius</label>
                <input className="create-topic-input w-100 py-3 form-control" />
                <div className="topic-radius-measurement">
                  10 meters - 200 meters i.e 10m = 35 feets 200m= 700 feets
                </div>
              </div>
              <div>
                <button className="create-topic-btn p-2 w-100  m">
                  Create Topic
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showMobileToght}
        toggle={toggleMobileToghtPost}
        className="modal-dialog-centered"
        // size='sm'
      >
        <Row className="gx-0">
          <Col sm="12" md="12" className="toght-full-details">
            <div
              className="post-toght-header pt-2 pb-2 px-2 "
              style={{
                borderRadius: "none",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <div className="">
                  <img
                    src={settings}
                    alt="..."
                    // style={{ width: "30px" }}
                    className="topic-filter-image"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center w-100">
                  <div>
                    <h3 className="post-details-header mb-0 text-center">
                      Power Outage
                    </h3>
                    <p
                      className="mb-0 text-center"
                      style={{
                        fontSize: "11px",
                        lineHeight: "15px",
                        color: "#B7B7B7",
                      }}
                    >
                      64k engagements
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-end"
                  onClick={toggleMobileToghtPost}
                >
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
            <div className="px-4 mt-3">
              <div>
                <div></div>
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
                            <MdReport size="18" color="#8a8484" />
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
                          Great read, i was enlightened, as someone who has had
                          a family member go through this, i understand what
                          it’s all about.
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
                            <MdReport size="18" color="#8a8484" />
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
                          Great read, i was enlightened, as someone who has had
                          a family member go through this, i understand what
                          it’s all about.
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
                            <MdReport size="18" color="#8a8484" />
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
                            20
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Input />
              {/* <div className="d-flex align-items-center my-4">
                <div className="">
                  <img src={pfp} width="45px" />
                </div>
                <div
                  className="w-100"
                  style={{
                    margin: "0 11px",
                  }}
                >
                  <div
                    className="post-comment-btn"
                    onClick={() => {
                      togglePostComment();
                      toggleMobileToghtPost();
                    }}
                  >
                    Post Comments
                  </div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Modal>
      {/* <Modal
        isOpen={postComment}
        toggle={togglePostComment}
        className=" modal-dialog-centered"
        // backdrop={false}
        backdropClassName="modal-backdrop"
        ref={refOne}
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
              className="  rounded px-3 w-100 text-center py-1 "
              style={{
                marginRight: "12px",
                border: "0.5px solid #B7B7B7",
                borderRadius: "10px",
              }}
            >
              Public
            </div>
            <div
              className="d-flex border  rounded px-3 w-100 text-center py-1 align-items-center w-100"
              style={{
                border: "0.5px solid #B7B7B7 !important",
                borderRadius: "10px !important",
              }}
            >
              Detached
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
      </Modal> */}
    </div>
  );
};

export default Search;
