import React from "react";
import LinkButton from "../../../components/buttons/LinkButton";
import DateTime from "../../../components/time/DateTime";

const AdminSettings = () => {
  return (
    <div className="">
      <div className=" border w-50 mx-auto pb-5">
        <div className="border-bottom my-3 ">
          <span className="d-flex justify-content-center">
            <DateTime />
          </span>
          <h3 className="text-center">Settings</h3>
        </div>
        <div>
          <div className="categoryBox bg-light mb-3">
            Change Profile Picture
          </div>
          <div className="categoryBox bg-light mb-3">Change Password</div>
          <div className="categoryBox bg-light mb-3">Change Theme</div>
          <hr className="w-50 mx-auto" />

          <div className="categoryBox bg-light mb-3">
            <span className="mx-2">View Assigned Designation</span>
            <LinkButton href={"/"} name={"View"} />
          </div>
          <div className="categoryBox bg-light mb-3">
            <span className="mx-2">View Assigned Title</span>
            <LinkButton href={"/"} name={"View"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
