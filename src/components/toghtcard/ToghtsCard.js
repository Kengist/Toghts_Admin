import React from "react";
import pfp from "../../asset/img/pfp.png";
import high from "../../asset/img/Vector-edit.png";
import medium from "../../asset/img/Vector-edit.png";
import low from "../../asset/img/Vector-edit.png";
import { Link } from "react-router-dom";

const ToghtsCard = () => {
  return (
    <div>
      <div className="toght-wrapper mx-3 my-4 d-none d-md-block">
        {Array.from(Array(3)).map((item, i) => (
          <div>
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
                  <Link to="/app/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
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
            <div className="toght d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <Link to="/app/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </div>
                <div className="toght-details">
                  <p className="toght-header mb-1">
                    Life don taya me
                    <span className="toght-author"> By Daniel Oba</span>
                  </p>
                  <p className="toght-location mb-0 text-left">50km away</p>
                </div>
              </div>
              <div>
                <img src={low} alt="..." />
              </div>
            </div>{" "}
            <div className="toght d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <Link to="/app/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
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
                <img src={medium} alt="..." />
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
      <div className="toght-wrapper mx-3 my-4 d-block d-md-none ">
        {Array.from(Array(3)).map((item, i) => (
          <div>
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
                  }}
                >
                  <Link to="/app/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </div>
                <div className="toght-details">
                  <p className="toght-header mb-1">Nigeria in dark times</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="toght-author">
                      {" "}
                      <span
                        style={{
                          fontSize: "15px",
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
                <img src={medium} alt="..." />
              </div>
            </div>
            <div
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
                >
                  <Link to="/app/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </div>
                <div className="toght-details">
                  <p className="toght-header mb-1">Nigeria in dark times</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="toght-author">
                      {" "}
                      <span
                        style={{
                          fontSize: "15px",
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
                <img src={low} alt="..." />
              </div>
            </div>
            <div
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
                >
                  <Link to="/app/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </div>
                <div className="toght-details">
                  <p className="toght-header mb-1">Nigeria in dark times</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="toght-author">
                      {" "}
                      <span
                        style={{
                          fontSize: "15px",
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToghtsCard;
