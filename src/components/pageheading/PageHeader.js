import React from "react";
import { GrSearch } from "react-icons/gr";
import { VscListFilter } from "react-icons/vsc";
import TitleButton from "../buttons/TitleButton";
import DateTime from "../time/DateTime";

const PageHeader = ({ title }) => {
  return (
    <div>
      <div
        className=" d-flex align-items-center justify-content-between bg-ligh  px-3 py-2"
        style={{ borderBottom: "1px solid grey" }}
      >
        <TitleButton icon={<VscListFilter />} name={"Filter"} />
        <span>
          <DateTime />
          <h5 className=" pt-4  text-center  ">{title}</h5>
        </span>
        <div className=" d-flex align-items-center justify-content-center flex-column">
          {/* <input
            alt="..."
            placeholder="Search...."
            style={{ borderRadius: "3px" }}
          /> */}
          <span className="py-2 cursor-pointer">
            <GrSearch />
          </span>
          <TitleButton name={"Archieve"} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
