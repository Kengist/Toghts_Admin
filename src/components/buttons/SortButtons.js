import React from "react";
import TitleButton from "./TitleButton";

const SortButtons = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-around mx-auto my-3"
        style={{ width: "60%" }}
      >
        <TitleButton name={"NSW"} />
        <TitleButton name={"AC"} /> <TitleButton name={"SP"} />{" "}
        <TitleButton name={"DSW"} /> <TitleButton name={"NTH"} />
      </div>
    </div>
  );
};

export default SortButtons;
