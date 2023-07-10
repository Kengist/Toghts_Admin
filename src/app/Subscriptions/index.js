import React from "react";
import pfp from "../../asset/img/pfp.png";
import filter from "../../asset/img/filter.svg";
import high from "../../asset/img/Vector-edit.png";

const Subscriptions = () => {
  return (
    <div>
      <div
        className="d-flex d-md-none align-items-center px-3 pb-3 pt-4 justify-content-between fixed-top bg-white"
        style={{
          paddingBottom: "20px",
          borderBottom: "0.5px solid #B7B7B7",
        }}
      >
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
          role="button"
          //   onClick={toggleToght}
        >
          <h3
            className="mb-0"
            style={{
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Subscriptions{" "}
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

        <div>
          <img src={filter} alt=".." width="25px" height="25px" />
        </div>
      </div>
      <div className="toghts-container pt-2 pb-0 app-section user-notification-mobile subscriptions-wrapper">
        <div
          className="d-flex align-items-center pb-2 px-3 d-none d-md-block bg-white "
          style={{
            position: "sticky",
            top: "-9px",
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
            Subscriptions{" "}
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
        <div className="toght-wrapper my-4 px-2 px-md-0 d-none d-lg-block">
          {Array.from(Array(12)).map((item, i) => (
            <div
              key={i}
              className="toght d-flex justify-content-between align-items-center"
            >
              <div className="d-flex">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
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
                  <p className="toght-header mb-1">
                    Nigeria in dark times
                    <span className="toght-author"> By Daniel Oba</span>
                  </p>
                  <p className="toght-location mb-0 text-left">50km away</p>
                </div>
              </div>
              <div>
                <img src={high} alt="..." />
              </div>
            </div>
          ))}
        </div>

        <div className="toght-wrapper my-4 mt-5 px-2 px-md-0 d-block d-lg-none">
          {Array.from(Array(12)).map((item, i) => (
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
                  <p className="toght-header mb-1">Nigeria in dark times</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="toght-author">
                      {" "}
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        By
                      </span>{" "}
                      Daniel Oba
                    </span>
                    <p className="toght-location mb-0 text-left">50km away</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={high} alt="..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
