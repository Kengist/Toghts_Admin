import React from "react";
import pfp from "../../asset/img/pfp.png";
import high from "../../asset/img/toghtHigh.png";
import medium from "../../asset/img/toghtmedium.png";
import low from "../../asset/img/toghtlow.png";
import { Link } from "react-router-dom";

const ToghtsCard = () => {
  return (
    <div>
      <div className="toght-wrapper mx-3 my-4">
        <div className="toght d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            >
              <Link to="/profile-v">
                <img
                  src={pfp}
                  alt=".."
                  style={{
                    width: "60px",
                    height: "60px",
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
        <div className="toght d-flex justify-content-between align-items-center">
          <div className="d-flex">
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
      </div>
    </div>
  );
};

export default ToghtsCard;
