import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ href, name, icon }) => {
  return (
    <>
      <Link
        to={href}
        className="px-4 py-2 text-light text-decoration-none"
        style={{ borderRadius: "5px", border: "none", background: "purple" }}
      >
        {icon}
        {name}
      </Link>
    </>
  );
};

export default LinkButton;
