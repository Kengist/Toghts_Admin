import React from "react";
import DateTime from "../../../components/time/DateTime";

const AutomatedModeration = () => {
  return (
    <div>
      <div className="border-bottom justify-content-center d-flex mt-3">
        <span className="mx-auto flex-column align-items-center justify-content-center d-flex ">
          <DateTime />
          <h4>Automated Moderation Controll Settings</h4>
        </span>
      </div>
      <div className="my-5 border py-5 bg-light w-50 mx-auto rounded">
        <div className="categoryBox mb-3">
          <span>Restricted Keywords</span>
        </div>
        <div className="categoryBox mb-3">
          <span>Explicit Pictures</span>
        </div>
        <div className="categoryBox mb-3">
          <span>Explicit Videos</span>
        </div>
        <div className="categoryBox">
          <span>Restricted Keywords</span>
        </div>
      </div>
    </div>
  );
};

export default AutomatedModeration;
