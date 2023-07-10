import React from "react";
// import ProfilesPics from "../../../components/profilepics/ProfilesPics";
import profile from "../../../asset/img/profile.jpg";
import ActionButton from "../../../components/buttons/ActionButton";
// import SubPageHeader from "../../../components/pageheading/SubPageHeader";

const CommentReview = () => {
  return (
    <div>
      {/* <div className="row">
        <div className="col-md-12">
          -
          <SubPageHeader
            title={"Comment Review"}
            href={"/app/admin/comment-report"}
            id={"#152601"}
          />
        </div>
      </div> */}
      <div className="row mt-4">
        <div
          className="col-md-4 "
          style={{ position: "relative ", height: "500px" }}
        >
          <h5 className="text-center">#15,261</h5>
          <div
            className=" "
            style={{
              borderRadius: "8px 8px 0px 0px",
              width: "400px",
              height: "400px",
              border: "1px solid grey",
              padding: "0px",
              //   border:"none",
              //   position: "fixed",
              //   left: "400px",
              //   top: "220px",
            }}
          >
            <div
              style={{
                borderRadius: "8px 8px 0px 0px",
                height: "50px",
                background: "purple",
                color: "white",
              }}
            >
              <h5 className="text-center pt-2">Topic Name</h5>
            </div>
            <div>
              <p className="text-center  text-secondary font-bold p-2 text-justify ">
                Nigeria, PortHarcourt Trent University is a public liberal arts
                university in Peterborough, Ontario, with a satellite campus in
                Oshawa, which serves the Regional Municipality of Durham. Trent
                is known for its Oxbridge college system and small class sizes.
                As a collegiate university, Trent is made up of six colleges
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h4>Profile Details</h4>
          <hr />
          <div className=" bg-light text-secondary d-flex justify-content-around">
            <div>
              <div className="d-flex  align-items-center ">
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
                  <h6 className="py-2 px-2 font-bold">Public Comment</h6>
                </div>
                <div className="mx-3">
                  <div>
                    <h6 className="d-inline">User Id:</h6>
                    <h6 className="d-inline">#152601</h6>
                    <br />
                    <h6 className="d-inline">
                      Display Name: <span>JoshuaOkoli</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className=" bg-light text-secondary d-flex align-items-center">
                <div
                  className="border bordered p-4 "
                  style={{ borderRadius: "8px" }}
                >
                  <h4>The Reported Comment</h4>
                  <hr />
                  <h6>Text,Picture,Video,Vn</h6>
                </div>
              </div>
            </div>
            <div className=" mt-3">
              <div className=" ">
                <ActionButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentReview;
