import React, { useState } from "react";
// import { GrImage } from "react-icons/gr";
import pfp from "../../asset/img/pfp.png";
// import sms from "../../asset/img/smss.png";
// import p2 from "../../asset/img/2.png";
// import p3 from "../../asset/img/3.png";
// import p4 from "../../asset/img/4.png";
// import com from "../../asset/img/com.png";
// import close from "../../asset/img/close.svg";
// import comment from "../../asset/img/comment.svg";
import em from "../../asset/img/em.svg";
import gal_min from "../../asset/img/gallery.svg";
import send from "../../asset/img/send.svg";
const Input = () => {
  const [display, setDisplay] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  //  console.log(toggleShow);
  // const toggleUserDisplay = () => {
  //   setDisplay("d-block");
  // };
  return (
    <div>
      <div className="d-flex  my-4">
        <div className="mt-">
          <img src={pfp} width="45px" alt="..." />
        </div>
        <div
          className="w-100"
          style={{
            margin: "0 11px",
          }}
        >
          <div>
            <div>
              {display && (
                <div
                  className={`modal-dialog-center comment-popup`}
                  style={{}}
                  // size="md"
                >
                  <div className="pt-2 d-flex align-items-center justify-content-center mx-auto w-50 mt-1 mb-3 ">
                    <div
                      onClick={() => {
                        setActiveTab("public");
                      }}
                      className={`  rounded px-3 w-100 text-center cursor-pointer py-1 ${
                        activeTab === "public" ? "active-tab" : ""
                      }`}
                      style={{
                        marginRight: "12px",
                        border: "0.5px solid #B7B7B7",
                        color: " #fff",
                        borderRadius: "10px",
                      }}
                    >
                      Public
                    </div>
                    <div
                      onClick={() => {
                        setActiveTab("anonymous");
                      }}
                      className={`d-flex border  cursor-pointer rounded px-3 w-100 text-center py-1 align-items-center w-100 ${
                        activeTab === "anonymous" ? "active-tab" : ""
                      }`}
                      style={{
                        color: " #fff",

                        //   border: "0.5px solid #B7B7B7 !important",
                        borderRadius: "10px !important",
                      }}
                    >
                      Anonymous
                    </div>
                  </div>
                </div>
              )}
              <div className="comment-toght-input-wrapper d-flex  align-items-center">
                <img src={em} width="15px" height="15px" alt="..." />

                <input
                  className="comment-toght-input form-control px-1 py-0 "
                  onClick={() => {
                    setDisplay(!display);
                  }}
                  placeholder="Comments"
                />
                <div>
                  <img src={gal_min} width="15px" height="15px" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-1"
          style={
            {
              // marginTop: '17px'
            }
          }
        >
          <img src={send} width="40px" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Input;
