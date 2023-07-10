import React from "react";
import TitleButton from "../../../components/buttons/TitleButton";
import DateTime from "../../../components/time/DateTime";

const SpecialMessage = () => {
  return (
    <div>
      <div className="border-bottom justify-content-center d-flex mt-3">
        <span className="mx-auto flex-column align-items-center justify-content-center d-flex ">
          <DateTime />
          <h4 className="py-2">Special Messages </h4>
        </span>
      </div>
      <div className="my-5 border py-5 bg-light w-50 mx-auto rounded">
        <div className="categoryBox mb-3">
          <span>Birthday Messages </span>
        </div>
        <div className="categoryBox mb-3">
          <span>Joining Date Anniversary Messages</span>
        </div>
        <div className="categoryBox mb-3">
          <span>Easter Celebration Messages</span>
        </div>
        <div className="categoryBox mb-3">
          <span>EID Celebration Messages</span>
        </div>
        <div className="categoryBox mb-3">
          <span>Christmas CelebrationMessages</span>
        </div>
        <div className="justify-content-center d-flex">
          <TitleButton name="And More" />
        </div>
      </div>
    </div>
  );
};

export default SpecialMessage;
