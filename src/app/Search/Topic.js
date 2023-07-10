import React from "react";
import pfp from "../../asset/img/pfp.png";
import video from "../../asset/img/video.png";
import attach from "../../asset/img/attach.png";
import high from "../../asset/img/Vector-edit.png";

import { DATA } from "../../utils/data/DATA";

const Topic = () => {
  return (
    <div className="toght-search-container py-2 topic px-2">
      <div
        className="toght-wrapper my-  px-md-0 d-block d-md-none  mb-5"
        style={{
          marginleft: 0,
          marginRight: 0,
        }}
      >
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  // onClick={() => {
                  //   setModalDetails(item);
                  //   toggleUserDetails();
                  // }}
                >
                  <img
                    src={item.profileimage}
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
                    className="toght-header mb-1 cursor-pointer"
                    style={{ fontSize: "14px" }}
                    // onClick={() => {
                    //   setModalDetails(item);
                    //   toggleToghtPost();
                    // }}
                  >
                    {item.topic}
                    <span className="toght-author" style={{ fontSize: "12px" }}>
                      {" "}
                      By {item.author}
                    </span>
                  </p>
                  <p
                    className="toght-location mb-0 text-left"
                    style={{ fontSize: "10px" }}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
              <div>
                <img src={high} alt="..." width={20} />
              </div>
            </div>
          );
        })}
      </div>
      {/* Big screen */}
      <div
        className="toght-wrapper   px-md-0 d-none d-md-block  mb-5"
        style={{
          marginleft: 0,
          marginRight: 0,
        }}
      >
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  // onClick={() => {
                  //   setModalDetails(item);
                  //   toggleUserDetails();
                  // }}
                >
                  <img
                    src={item.profileimage}
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
                    className="toght-header mb-1 cursor-pointer"
                    style={{ fontSize: "14px" }}
                    // onClick={() => {
                    //   setModalDetails(item);
                    //   toggleToghtPost();
                    // }}
                  >
                    {item.topic}
                    <span className="toght-author" style={{ fontSize: "12px" }}>
                      {" "}
                      By {item.author}
                    </span>
                  </p>
                  <p
                    className="toght-location mb-0 text-left"
                    style={{ fontSize: "10px" }}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
              <div>
                <img src={high} alt="..." width={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topic;
