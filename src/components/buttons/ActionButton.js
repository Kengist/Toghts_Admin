import React from "react";
import TitleButton from "./TitleButton";

const ActionButton = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center bg-light py-3">
        <div className="my-1">
          <TitleButton name={"Done"} />
        </div>
        <div className="my-2">
          <span className="mx-1">
            <TitleButton name={"Delete"} />
          </span>
          <TitleButton name={"Suspend"} />
        </div>
        <div>
          <span className="mx-1">
            <TitleButton name={"Strike"} />
          </span>
          <TitleButton name={"Block"} />
        </div>
        <div>
          <p className="text-center">or</p>
          <TitleButton name={"Addressed & Approved"} />
        </div>
      </div>
    </div>
  );
};

export default ActionButton;
