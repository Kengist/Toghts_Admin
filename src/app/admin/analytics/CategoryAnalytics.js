import React from "react";
import SubPageHeader from "../../../components/pageheading/SubPageHeader";

const CategoryAnalytics = () => {
  return (
    <div>
      <SubPageHeader
        title={"Category Analytics (Most Active)"}
        id={" Most Active Number"}
        href={"/app/admin/analytics"}
        style={{ border: "1px solid grey", background: "red" }}
      />
      <div>
        <ul style={{ listStyle: "none" }}>
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category For Today:</h5>
          </li>
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category For Yesterday:</h5>
          </li>
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category For The Past Week:</h5>
          </li>
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category For The Past 2 Weeks:</h5>
          </li>
          <hr />
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category For The Past Month:</h5>
          </li>
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category For The Past Year:</h5>
          </li>
          <li className="p-2 border mb-2">
            {" "}
            <h5>Most Active Category Of All Time:</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryAnalytics;
