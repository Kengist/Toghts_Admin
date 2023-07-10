import React, { useState } from "react";
import pfp from "../../asset/img/pfp.png";
import filter from "../../asset/img/filter.svg";
import PublicCard from "../../components/publicmessagecard/PublicCard";
import DetachedCard from "../../components/detachedmessagecard/DetachedCard";
// import { useWidth } from "../../hooks/UseWidth";
// import SmallPublicCard from "../../components/publicmessagecard/SmallPublicCard";

const Message = () => {
  const [activeTab, setActiveTab] = useState("public");

  // const { width } = useWidth();

  return (
    <div>
      <div className="profile-card-message ">
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
              className="form-control w-100 mobile-search-inpu search-message py-3 px-4"
              placeholder="Search message "
            />
          </div>

          <div style={{ flexGrow: "", margin: "0 0 0 15px" }}>
            <img src={filter} alt=".." width="25px" height="25px" />
          </div>
        </div>

        <div className="row p-0 m-0">
          <div
            className=" col-12 col-md-12 tab-navbar-message py-2
           d-flex jusify-content-around border-bottom"
          >
            <h3
              role="button"
              onClick={() => {
                setActiveTab("public");
              }}
              className={`message-nav-item font-10 pb-1 ${
                activeTab === "public" ? "active" : ""
              }`}
            >
              Public
            </h3>
            <h3
              role="button"
              onClick={() => {
                setActiveTab("detached");
              }}
              className={`message-nav-item font-10 pb-1 detach-notification  ${
                activeTab === "detached" ? "active" : ""
              }`}
            >
              Anonymous
              <div className="detach-notification-icon">3</div>
            </h3>
          </div>
          {activeTab === "public" && <PublicCard />}{" "}
          {activeTab === "detached" && <DetachedCard />}
        </div>
      </div>
    </div>
  );
};

export default Message;
