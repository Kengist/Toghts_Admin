import React, { useState } from "react";
import like from "../../asset/img/like.png";
import com from "../../asset/img/com.png";
import comment from "../../asset/img/comment.png";
import pfp from "../../asset/img/pfp.png";
import filter from "../../asset/img/filter.svg";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div>
      <div
        className="d-flex d-md-none align-items-center px-3 pb-3 pt-4 justify-content-between fixed-top bg-white "
        style={{
          paddingBottom: "20px",
        }}
      >
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
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

          <div
            className=""

            //   onClick={toggleToght}
          >
            <h3
              className="mb-0"
              style={{
                fontWeight: "700",
                fontSize: "24px",
                marginLeft: "13px",
              }}
            >
              Notifications{" "}
            </h3>
          </div>
        </div>

        <div>
          <img src={filter} alt=".." width="25px" height="25px" />
        </div>
      </div>
      <div className="toghts-container pt-0 pt-md-3 px-0 pb-0 app-section user-notification-mobile">
        <div
          className=" px-3 pt-2 d-none d-md-block bg-white"
          style={{ position: "sticky", top: "-16px" }}
        >
          <div
            className="d-flex align-items-center pb-2 mb-3 "
            style={{
              borderBottom: "0.5px solid #B7B7B7",
            }}
          >
            <h3
              className="mb-0"
              style={{
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Notifications{" "}
            </h3>
            <p
              className="mb-0 mt-1"
              style={{
                fontWeight: "600",
                fontSize: "14px",
                color: "#3a3a3a",
                marginLeft: "10px",
              }}
            >
              @Thatphgirl
            </p>
          </div>
        </div>
        <div className="toght-wrapper ">
          <div
            className="notifications-navbar d-flex bg-white jusify-content-around border-bottom position-sticky"
            style={{ top: "26px" }}
          >
            <h3
              role="button"
              onClick={() => {
                setActiveTab("all");
              }}
              className={`notification-nav-item ${
                activeTab === "all" ? "active" : ""
              }`}
            >
              All
            </h3>
            <h3
              role="button"
              onClick={() => {
                setActiveTab("tags");
              }}
              className={`notification-nav-item ${
                activeTab === "tags" ? "active" : ""
              }`}
            >
              Tags
            </h3>
          </div>

          <div className="notifications-container">
            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  src={like}
                  className="notifications-icon-mobile"
                  alt="..."
                />
              </div>
              <p className="notification-text m-0">
                <span className="notification-username fw-bold">
                  @Real_man{" "}
                </span>
                and
                <span className="notification-username fw-bold">
                  {" "}
                  @Danielzee{" "}
                </span>
                Subscribed to you toghts
              </p>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  src={like}
                  className="notifications-icon-mobile"
                  alt="..."
                />
              </div>
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @June_121{" "}
                  </span>
                  likes your reply
                </p>
                <p className="notification-text m-0">
                  Your’re the love of my life
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
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
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @Real_man{" "}
                  </span>{" "}
                  replied to your toghts
                </p>
                <p className="notification-text m-0">
                  This is Lovely, can’t wait to explore
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  className="notifications-icon-mobile"
                  src={comment}
                  alt="..."
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
              <div>
                <span className="notification-text m-0">
                  <div className="d-flex">
                    <div
                      className="commenter"
                      style={{
                        marginRight: "8px",
                      }}
                    >
                      <img
                        src={com}
                        alt="..."
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </div>
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
                  </div>
                  <span className="notification-username fw-bold">
                    @Real_man{" "}
                  </span>
                  replied to your toghts
                </span>
                <p className="notification-text m-0">
                  This is Lovely, can’t wait to explore
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div className="commenter">
                <img src={com} alt="..." />
              </div>
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @Real_man{" "}
                  </span>
                  and
                  <span className="notification-username fw-bold">
                    {" "}
                    @Danielzee{" "}
                  </span>
                  like your reply
                </p>
                <p className="notification-text m-0">
                  Your’re the love of my life
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  src={like}
                  className="notifications-icon-mobile"
                  alt="..."
                />
              </div>
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @June_121{" "}
                  </span>
                  likes your reply
                </p>
                <p className="notification-text m-0">
                  Your’re the love of my life
                </p>
              </div>
            </div>
            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  src={like}
                  className="notifications-icon-mobile"
                  alt="..."
                />
              </div>
              <p className="notification-text m-0">
                <span className="notification-username fw-bold">
                  @Real_man{" "}
                </span>
                and
                <span className="notification-username fw-bold">
                  {" "}
                  @Danielzee{" "}
                </span>
                Subscribed to you toghts
              </p>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  src={like}
                  className="notifications-icon-mobile"
                  alt="..."
                />
              </div>
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @June_121{" "}
                  </span>
                  likes your reply
                </p>
                <p className="notification-text m-0">
                  Your’re the love of my life
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
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
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @Real_man{" "}
                  </span>{" "}
                  replied to your toghts
                </p>
                <p className="notification-text m-0">
                  This is Lovely, can’t wait to explore
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  className="notifications-icon-mobile"
                  src={comment}
                  alt="..."
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
              <div>
                <span className="notification-text m-0">
                  <div className="d-flex">
                    <div
                      className="commenter"
                      style={{
                        marginRight: "8px",
                      }}
                    >
                      <img
                        src={com}
                        alt="..."
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </div>
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
                  </div>
                  <span className="notification-username fw-bold">
                    @Real_man{" "}
                  </span>
                  replied to your toghts
                </span>
                <p className="notification-text m-0">
                  This is Lovely, can’t wait to explore
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div className="commenter">
                <img src={com} alt="..." />
              </div>
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @Real_man{" "}
                  </span>
                  and
                  <span className="notification-username fw-bold">
                    {" "}
                    @Danielzee{" "}
                  </span>
                  like your reply
                </p>
                <p className="notification-text m-0">
                  Your’re the love of my life
                </p>
              </div>
            </div>

            <div className="notification-wrapper d-flex align-items-center">
              <div>
                <img
                  src={like}
                  className="notifications-icon-mobile"
                  alt="..."
                />
              </div>
              <div>
                <p className="notification-text m-0">
                  <span className="notification-username fw-bold">
                    @June_121{" "}
                  </span>
                  likes your reply
                </p>
                <p className="notification-text m-0">
                  Your’re the love of my life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
