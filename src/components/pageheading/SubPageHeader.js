import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import PageDate from "../time/PageDate";

const SubPageHeader = ({ title, id, href }) => {
  return (
    <div className="mb-4">
      <div
        className=" d-flex align-items-center mt-3 border-bottom text-secondary justify-content-between bg-ligh  px-3 py-2 "
        style={{ borderBottom: "1px solid info" }}
      >
        <Link to={href} className="text-decoration-none">
          <BsArrowLeft />
        </Link>
        <span className=" d-flex flex-column align-items-center justify-content-center">
          <PageDate />
          <h5 className=" pt-2  text-center  ">{title}</h5>
        </span>
        <div className=" d-flex align-items-center justify-content-center flex-column">
          <span className="py-2 cursor-pointer">
            {/* <GrSearch /> */}
            <h5>{id}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubPageHeader;
