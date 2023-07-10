import React from "react";

const TitleButton = ({ name, icon }) => {
  return (
    <>
      <button className="px-4 py-2 text-grey  title-button" style={{}}>
        {icon}
        {name}
      </button>
    </>
  );
};

export default TitleButton;
