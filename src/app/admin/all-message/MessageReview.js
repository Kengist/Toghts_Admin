import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import ActionButton from "../../../components/buttons/ActionButton";
import LinkButton from "../../../components/buttons/LinkButton";
// import SubPageHeader from "../../../components/pageheading/SubPageHeader";

const MessageReview = () => {
  return (
    // <div>
    //   <SubPageHeader
    //     title={"  Message Review"}
    //     id={"  @Joshdboss"}
    //     href={"/app/admin/all-messages"}
    //   />

    // </div>
    <div>
      <div
        className=" d-flex align-items-center justify-content-between bg-ligh  px-3 py-2"
        style={{ borderBottom: "1px solid grey" }}
      >
        <Link to={"/app/admin/flagged-profile"} className="">
          <BsArrowLeft />
        </Link>
        <h5 className=" pt-4  text-center  ">Message Review </h5>
        <div className=" d-flex align-items-center justify-content-center flex-column">
          <span className="py-2 cursor-pointer">
            {/* <GrSearch /> */}
            <h5>@joshfunny</h5>
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="text-center py-2">@Joshdboss</h4>
          <div>
            <div>
              <div
                className="profile-box"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                }}
              >
                {/* <img
                  src={profile}
                  alt=".."
                  width="300"
                  height="300"
                  style={{ borderRadius: "50%" }}
                /> */}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="text-center d-inlin">Nigeria,PortHarcourt</span>
            <div className="online-indicator bg-success  mx-2"></div>
          </div>
          <h4 className="text-center">Anonymous Profile</h4>
        </div>
        <div className="flex-1">
          <div className="bio-info">
            <div className="bio-info-heading">
              <h3 className="text-center" style={{ lineHeight: "80px" }}>
                Bio Info
              </h3>
            </div>
            <div className="bio-info-body">
              <p className="p-3 " style={{ overflow: "hidden" }}>
                “Master's study is a real investment in yourself and your
                future, but choosing to pursue further education was a difficult
                decision for me financially. In my time at university there have
                been times I considered ....
              </p>
              <p className="text-info px-3" style={{ textAlign: "right" }}>
                Read More
              </p>
              <ActionButton />
            </div>
          </div>
        </div>
        <div className="flex-1">
          {" "}
          <div className="pt-4">
            <ul>
              <li className="user-detail-info">
                <span className="font-bold">User ID:</span>
                <span className="px-2">#15,261</span>
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Username:</span>
                <span className="px-2">@Joshdboss</span>
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Previously Suspended:</span>
                <span className="px-2">No</span>
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Total Number Of Strikes:</span>
                <span className="px-2">1</span>
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Reporter ID:</span>
                <span className="px-2">#10,001</span>
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Report Info:</span>
                <span className="px-2">
                  <LinkButton
                    name={"View"}
                    href={"/app/admin/users-profile "}
                  />
                </span>
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Similar Reports:</span>
                <span className="px-2">30</span>
                <LinkButton
                  name={"View All"}
                  href={"/app/admin/users-profile "}
                />
              </li>
              <li className="user-detail-info">
                <span className="font-bold">Other Assigned Reports:</span>
                <span className="px-2">5 </span>
                <span className="px-2">
                  <LinkButton
                    name={"View All"}
                    href={"/app/admin/users-profile "}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageReview;
