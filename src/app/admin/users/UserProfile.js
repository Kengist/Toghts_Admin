import React from "react";

import profile from "../../../asset/img/profile-icon.png";
import SubPageHeader from "../../../components/pageheading/SubPageHeader";

const UserProfile = () => {
  const PROFILEDETAILS = {
    // id:
    userId: "#15261",
    displayName: "Joshua Okoli",
    publicName: "JoshuaOkoli",
    anonymousName: "Joshdboss",
    gender: "Male",
    timesOnline: "3+ Yimes Per Week",
    TimeSpent: "1hr, 30 mins+",
    dateTimeJoined: "20/04/2022, @14:50",
    EmailAddressHistory: "[View]",

    PasswordHistory: "[View]",

    LocationHistory: "[View]",

    LoginHistory: "[View]",
  };

  return (
    <div>
      <SubPageHeader
        title={"New Registered Users"}
        id={"@Joshdboss"}
        href={"/app/admin/registered-users"}
      />
      {/* <hr /> */}
      <div className="row ">
        <div
          className="col-md-6 "
          style={{ position: "relative ", height: "500px" }}
        >
          <h5 className="text-center pb-4">#15,261</h5>
          <div
            className="nav-profile-bo "
            style={{
              borderRadius: "50%",
              width: "350px",
              height: "350px",
              border: "2px solid grey",
              position: "fixed",
              left: "350px",
              top: "250px",
            }}
          >
            <img
              src={profile}
              alt=".."
              width="350"
              height="350"
              style={{
                borderRadius: "50%",
                border: "2px solid grey",
              }}
            />
            <p className="text-center font-bold py-2">Nigeria, PortHarcourt</p>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Profile Details</h4>
          <hr />
          <div>
            {/* {PROFILEDETAILS.userId} */}

            <ul>
              <li className="p-2 border border-b">
                User ID:{" "}
                <span className="font-bold"> {PROFILEDETAILS.userId}</span>
              </li>
              <li className="p-2 border border-b">
                Display Name:{" "}
                <span className="font-bold">{PROFILEDETAILS.displayName}</span>
              </li>
              <li className="p-2 border border-b">
                Public Username: @{" "}
                <span className="font-bold">{PROFILEDETAILS.publicName}</span>
              </li>
              <li className="p-2 border border-b">
                Anonymous Username: @{" "}
                <span className="font-bold">
                  {PROFILEDETAILS.anonymousName}
                </span>
              </li>
              <li className="p-2 border border-b">
                Gender:{" "}
                <span className="font-bold">{PROFILEDETAILS.gender}</span>
              </li>
              <li className="p-2 border border-b">
                Number of Times Online:{" "}
                <span className="font-bold">{PROFILEDETAILS.timesOnline}</span>
              </li>
              <li className="p-2 border border-b">
                Time Spent On The Platform Per Day:{" "}
                <span className="font-bold">{PROFILEDETAILS.TimeSpent}</span>
              </li>
              <li className="p-2 border border-b">
                Date and Time Joined:{" "}
                <span className="font-bold">
                  {PROFILEDETAILS.dateTimeJoined}
                </span>
              </li>
              <li className="p-2 border border-b">
                Email Address History:{" "}
                <span className="font-bold">
                  {PROFILEDETAILS.EmailAddressHistory}
                </span>
              </li>
              <li className="p-2 border border-b">
                Password History:{" "}
                <span className="font-bold">
                  {PROFILEDETAILS.PasswordHistory}
                </span>
              </li>
              <li className="p-2 border border-b">
                Location History:{" "}
                <span className="font-bold">
                  {PROFILEDETAILS.LocationHistory}
                </span>
              </li>
              <li className="p-2 border border-b">
                Login History:{" "}
                <span className="font-bold">{PROFILEDETAILS.LoginHistory}</span>
              </li>
              <li className="">
                Display Name:{" "}
                <span className="font-bold">{PROFILEDETAILS.displayName}</span>
              </li>
              <li className="">
                Display Name:{" "}
                <span className="font-bold">{PROFILEDETAILS.displayName}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
