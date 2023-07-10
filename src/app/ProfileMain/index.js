import React, { useState } from "react";
import CommentsCard from "../../components/commentscard/CommentsCard";
import LikesCard from "../../components/likescard/LikesCard";
import ToghtsCard from "../../components/toghtcard/ToghtsCard";
import dp from "../../asset/img/dp.png";
import info from "../../asset/img/info.png";
import toght from "../../asset/img/cloud-plus.png";
import like from "../../asset/img/2.png";
import comment from "../../asset/img/comment-g.png";
import editDp from "../../asset/img/dp.png";
import { Modal, Row, Col } from "reactstrap";
import camera from "../../asset/img/camera.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const Profile2 = () => {
  const [activeTab, setActiveTab] = useState("toghts");
  const [editprofile, setEditProfile] = useState(false);

  const toggleEditProfile = () => {
    setEditProfile(!editprofile);
  };
  const [bio, setBio] = useState(false);

  const toggleBio = () => {
    setBio(!bio);
  };
  return (
    <div>
      <div className="profile-card ">
        <div
          className="username-profile "
          style={{ borderBottom: " 0.5px solid #B7B7B7" }}
        >
          <Link
            to="/app"
            style={{
              textDecoration: "none",
              color: "black",

              paddingRight: "23px",
            }}
          >
            <HiArrowLeft className="cursor-pointer" size="25" />
          </Link>

          <span className="big-text">Amanda Anyanwu </span>
          <span className="small-text">@Thatphgirl </span>
        </div>
        <div className="cover-photo mt-1">
          <div className="profile-container col-12 col-md-12">
            <img src={dp} className="img-fluid" alt="no dp" />
          </div>
        </div>
        <div className="row mx-0 py-4 ">
          <div className="col-12 col-md-12">
            <button className="btn-public ">Public</button>
          </div>
          <div className="col-12 col-md-12  ">
            <div className=" mt-4 pt-3">
              <h4 className="profile-text-name  text-center">
                Amanda Anyanwu{" "}
                <span>
                  {" "}
                  <img
                    src={info}
                    alt="..."
                    onClick={toggleBio}
                    className="cursor-pointer"
                    style={{}}
                  />{" "}
                </span>
              </h4>
              <p className="profile-text-username  text-center">@Thatphgirl </p>
            </div>
          </div>

          <div className="row  mx-0">
            <div className="col-8 col-md-6  justify-content-center mx-auto ">
              <div className="d-flex justify-content-between ">
                <div className="text-center">
                  <h4 className="fw-bold mb-0">50</h4>
                  <p
                    className="profile-text"
                    style={{
                      // color: "#B7B7B7",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Toghts
                  </p>
                </div>
                <div className="border-line px-1 mx-3"></div>

                <div className="text-center ">
                  <h4 className="fw-bold mb-0">5k</h4>
                  <p
                    className="profile-text"
                    style={{
                      // color: "#B7B7B7",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Subscribers
                  </p>
                </div>
                <div className="border-line  px-1 mx-3"></div>
                <div className="text-center">
                  <h4 className="fw-bold mb-0">2K</h4>
                  <p
                    className="profile-text"
                    style={{
                      // color: "#B7B7B7",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Subscription
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 d-flex justify-content-center p-2">
            {" "}
            <button
              type="button"
              onClick={toggleEditProfile}
              className="btn-edit-profile"
            >
              Edit profile
            </button>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="tab-navbar d-flex jusify-content-around border-bottom">
            <div className="col-4 col-md-4">
              <h3
                onClick={() => {
                  setActiveTab("toghts");
                }}
                className={` profile-items mx-auto align  ${
                  activeTab === "toghts" ? "active" : ""
                }`}
              >
                <img
                  src={toght}
                  className="profile-icon"
                  alt="..."
                  style={{}}
                />
                {/* <span className="p-3">Toghts</span> */}
              </h3>
            </div>
            <div className="col-4 col-md-4">
              <h3
                onClick={() => {
                  setActiveTab("likes");
                }}
                className={`profile-items align ${
                  activeTab === "likes" ? "active " : ""
                }`}
              >
                <img src={like} alt="..." className="profile-icon" />
                {/* <span className="p-3">Likes</span> */}
              </h3>
            </div>
            <div className="col-4 col-md-4">
              <h3
                onClick={() => {
                  setActiveTab("comments");
                }}
                className={` profile-items align ${
                  activeTab === "comments" ? "active" : ""
                }`}
              >
                <img src={comment} alt="..." className="profile-icon" />
                {/* Comments */}
              </h3>
            </div>
          </div>
          {activeTab === "toghts" && <ToghtsCard />}
          {activeTab === "likes" && <LikesCard />}
          {activeTab === "comments" && <CommentsCard />}
        </div>
      </div>
      <Modal isOpen={editprofile} toggle={toggleEditProfile} size="l">
        <Row className="gx-0">
          <Col sm="12" md="12" className="pb-5">
            <div
              className="post-toght-header pt-2 pb-3 px-2 "
              style={{
                borderRadius: "none",
              }}
            >
              <div className="d-flex close-icon-con flex-column align-items-center py-3">
                <h3 className="cursor-pointer text-heading-1 mb-0">
                  Edit Profile
                </h3>
                <AiOutlineClose
                  onClick={() => {
                    setEditProfile(!editprofile);
                  }}
                  className="close-icon cursor-pointer"
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="edit-profile-card  ">
                  <div className="edit-cover-photo ">
                    <img
                      src={camera}
                      className="img-fluid cover-upload"
                      alt="no dp"
                    />
                    <div className="edit-profile-container col-12 col-md-12">
                      <img src={editDp} className="img-fluid" alt="no dp" />
                      <img
                        src={camera}
                        className="img-fluid profile-upload"
                        alt="no dp"
                      />
                    </div>
                  </div>
                  <div className=" row mx-0 py-4">
                    <div className="col-12 col-md-12  mt-5 ">
                      <form>
                        <div class="form-group px-4 py-2">
                          <label for="dname">Display Name:</label>
                          <input
                            type="text"
                            name="dname"
                            class="form-control py-3"
                            placeholder="Amanda Anyanu"
                          />
                        </div>
                        <div class="form-group px-4 py-2">
                          <label for="usr">UserName:</label>
                          <input
                            type="text"
                            name="usr"
                            class="form-control py-3"
                            placeholder="thatphgirl"
                          />
                        </div>
                        <div class="form-group px-4 py-2">
                          <label for="bio">Bio data</label>
                          <input
                            type="text"
                            name="bio"
                            class="form-control py-3"
                            placeholder="Mother, Content Creator, Content marketer"
                          />
                        </div>

                        <div class="form-group my-2 px-3">
                          <button
                            type="submit"
                            className="btn-save btn-block btn mx-auto "
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-12 col-md-12 w-50 mx-auto">
                      <div className="d-flex justify-content-between"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
      {/* Modal for bio */}

      <Modal
        isOpen={bio}
        toggle={toggleBio}
        size="l"
        style={{ marginTop: "15%" }}
      >
        <Row className="gx-0">
          <Col sm="12" md="12" className="pb-5">
            <div
              className="post-toght-header pt-2 pb-3 px-2 "
              style={{
                borderRadius: "none",
              }}
            >
              <div className="d-flex close-icon-con flex-column align-items-center">
                <h2 className=" text-heading-1 mb-0">Bio Info</h2>
                <h5 className="text-heading-2 p-0 m-0">Amanda Anyanwu</h5>
                <AiOutlineClose
                  onClick={() => {
                    setBio(!bio);
                  }}
                  className="close-icon cursor-pointer"
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="  ">
                  <div className=" row mx-0 px-2 pt-4">
                    <div className="col-12 col-md-12  mx-auto">
                      <div className="d-flex justify-content-between">
                        Jamie Birt is a career coach with 4+ years of experience
                        helping job seekers navigate the job search through
                        one-to-one coaching, webinars and events.
                      </div>
                    </div>
                    <div className="col-12 col-md-12 pt-3 ">
                      <h6>Favourite Quote:</h6>
                      <p>
                        She’s motivated by the mission to help people find
                        fulfillment and belonging in their careers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
      {/* Modal for bio */}
    </div>
  );
};

export default Profile2;
