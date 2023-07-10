import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import profile from "../../../asset/img/profile.jpg";
import LinkButton from "../../../components/buttons/LinkButton";

const ContactMessage = () => {
  return (
    <div className="bg-light">
      <div
        className=" d-flex align-items-center justify-content-between bg-ligh  px-3 py-2"
        style={{ borderBottom: "1px solid grey" }}
      >
        <Link
          to={"/app/admin/contact-us-messages"}
          className="text-decoration-none"
        >
          <BsArrowLeft />
        </Link>
        <span>
          <h6
            className=" py-2  text-center border bg-light px-2 "
            style={{ height: "40px", width: "120px", borderRadius: "5px" }}
          >
            23-11-2022
          </h6>
          <h5 className=" pt-2  text-center  ">Contact Us Message</h5>
        </span>
        <div className=" d-flex align-items-center justify-content-center flex-column">
          <span className="py-2 cursor-pointer">
            {/* <GrSearch /> */}
            <h5>#15201</h5>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mx-auto">
            <div
              className="bio-info-head"
              style={{
                width: "80%",
                borderRadius: "5px 5px 0 0",
                border: "1px solid grey",
                margin: "4px 4px 0",
              }}
            >
              <h3 className="text-center" style={{ lineHeight: "80px" }}>
                Heading
              </h3>
            </div>
            <div
              className=""
              style={{
                width: "80%",
                height: "400px",
                border: "1px solid grey",
                margin: "0px 4px 0",
              }}
            >
              <p className="p-3 " style={{ overflow: "hidden" }}>
                “Master's study is a real investment in yourself and your
                future, but choosing to pursue further education was a difficult
                decision for me financially. In my time at university there have
                been times I considered decision for me financially. In my time
                decision for me financially. In my time at university there have
                been times I considered decision for me financially. In my time
                decision for me financially. In my time at university there have
                been times I considered decision for me financially. In my time
                at university there have been times I considered ....
              </p>
              {/* <ActionButton /> */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {" "}
          <div className="d-flex  align-items-center py-3">
            <div className="">
              {/* <ProfilesPics /> */}
              <div
                className="nav-profile-bo "
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  border: "2px solid grey",
                  //   position: "fixed",
                  //   left: "150px",
                  //   top: "220px",
                }}
              >
                <img
                  src={profile}
                  alt=".."
                  width="150"
                  height="150"
                  style={{
                    borderRadius: "50%",
                    border: "2px solid grey",
                  }}
                />
              </div>
              {/* <h6 className="py-2 px-2 font-bold">Public Comment</h6> */}
            </div>
            <div className="mx-3 text-secondary">
              <div>
                <h6 className="d-inline">User Id:</h6>
                <h6 className="d-inline">#152601</h6>
                <br />
                <h6 className="d-inline">
                  Display Name: <span>JoshuaOkoli</span>
                </h6>
                <hr />
                <LinkButton href={"/app/admin/users-profile "} name={"View"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
