import React from "react";
import pfp from "../../asset/img/pfp.png";

const People = () => {
  return (
    <div className="toght-search-container py-0 topic px-3">
      {Array.from(Array(6)).map((item, i) => (
        <>
          <div
            role="button"
            className=" d-flex justify-content-between align-items-center topic-people-wrapper"
          >
            <div className="d-flex">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  zIndex: "999",
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
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="topic-people-user mb-0">Caleb Peterson</p>
                    <p className="topic-people-username mb-0">@Real_sweetone</p>
                  </div>
                  <div>
                    <button className="topic-people-button px-3 py-2 subscribed">
                      Subscribed
                    </button>
                  </div>
                </div>

                <div>
                  <p className="topic-people-description mb-0">
                    {
                      "Product designer, Father, Content & Comms, Social media ex Dm for business inquiries"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            role="button"
            className=" d-flex justify-content-between align-items-center topic-people-wrapper"
          >
            <div className="d-flex">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  zIndex: "999",
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
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="topic-people-user mb-0">Dianne Russell</p>
                    <p className="topic-people-username mb-0">@Real_sweetone</p>
                  </div>
                  <div>
                    <button className="topic-people-button px-4 py-2 ">
                      Subscribe
                    </button>
                  </div>
                </div>

                <div>
                  <p className="topic-people-description mb-0">
                    {
                      "Product designer, Father, Content & Comms, Social media ex Dm for business inquiries"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default People;
