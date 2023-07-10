import React, { useState } from "react";
import pfp from "../../asset/img/pfp.png";

import play from "../../asset/img/play.png";
import mic from "../../asset/img/microphone.png";
import emoji from "../../asset/img/emoji.png";
import { Link } from "react-router-dom";
import { IoCheckmarkDone } from "react-icons/io5";
import { GrImage } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const PublicCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [send, setSend] = useState(false);
  const sending = () => {
    setSend(true);
  };

  return isOpen ? (
    <div>
      <div className=" mx-3 my-4 ">
        {Array.from(Array(6)).map((item, i) => (
          <div
            key={i}
            className="chat  d-flex justify-content-between align-items-center"
          >
            <div className="d-flex">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              >
                <Link to="/app/profile-v">
                  <img
                    src={pfp}
                    alt=".."
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </div>
              <div
                onClick={() => setIsOpen(true)}
                className="text-decoration-none"
              >
                <div className="chat-details pt-2">
                  <p className="chat-header mb-1">
                    Robert Fox
                    <span className="chat-author"> @ Baby-Flake</span>
                  </p>
                  <p className="chat-text mb-0 text-left d-none d-md-block">
                    I will like you to consider the posibility of going home and
                    doing all you should do.{" "}
                  </p>
                  <p className="chat-text mb-0 text-left d-block d-md-none">
                    I will like you to consider the posibility of going home and
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="chat-time">6h</span>
            </div>
          </div>
        ))}
      </div>
      <div className="desktop-chat">
        {/* <ChatCard /> */}

        <div className="chat-wrapper  my-4 ">
          <div className="message-header  d-flex  justify">
            <div className="d-flex d-md-none">
              <div className="back">
                <FaArrowLeft
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <div className="">
                <p className="chat-header mb-1">
                  Robert Fox
                  <span className="chat-author"> @ Baby-Flake</span>
                </p>
              </div>
            </div>

            <div className=" d-none d-md-block  ">
              <div className="d-flex ">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                >
                  <Link to="/profile-v">
                    <img
                      src={pfp}
                      alt=".."
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </div>
                <div className="chat-details pt-2">
                  <p className="chat-header mb-1 ">
                    Robert Fox
                    <span className="chat-author"> @ Baby-Flake</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block ">
              <AiOutlineCloseCircle
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          <div className="message d-flex p-3 justify-content-between align-items-center">
            <div className="d-flex">
              <div
                style={{
                  width: "40px",
                  height: "68px",
                  borderRadius: "50%",
                }}
                className="bo mx-1"
              >
                <Link to="/app/profile-v">
                  <img
                    src={pfp}
                    alt=".."
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </div>
              <div>
                <div className="message-box">
                  <p className="message-text">
                    This election is so serious i can bet the opposition will
                    take the bull by the horn
                  </p>
                </div>
                <span className=" ">
                  <span className="message-time">16:44am, Monday </span>
                  <span>
                    <IoCheckmarkDone style={{ color: "#5B3896" }} />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end  ">
            <div className="message p-3 ">
              <div className="d-flex justify-content-end">
                <div>
                  <div className="second-message-box">
                    <p className="message-text">
                      This is a wake up call for all of us, we need to get our
                      pvcs and turn out in mass to vote
                    </p>
                  </div>
                  <span className="d-flex  justify-content-end ">
                    <span>
                      <span className="message-time">16:44am, Monday </span>
                      <span clas>
                        <IoCheckmarkDone style={{ color: "#5B3896" }} />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="message d-flex p-3 justify-content-between align-items-center">
            <div className="d-flex">
              <div
                style={{
                  width: "40px",
                  height: "68px",
                  borderRadius: "50%",
                }}
                className="bo mx-1"
              >
                <Link to="/app/profile-v">
                  <img
                    src={pfp}
                    alt=".."
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </div>
              <div>
                <div className="message-box">
                  <p className="message-text">
                    This will be a turning point in the coming elections.
                  </p>
                </div>
                <span className=" ">
                  <span className="message-time">16:44am, Monday </span>
                  <span>
                    <IoCheckmarkDone style={{ color: "#5B3896" }} />
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end  ">
            <div className="message p-3 ">
              <div className="d-flex justify-content-end">
                <div>
                  <div className="second-message-box">
                    <p className="message-text">Definetly Yes.</p>
                  </div>
                  <span className="d-flex  justify-content-end ">
                    <span>
                      <span className="message-time">16:44am, Monday </span>
                      <span clas>
                        <IoCheckmarkDone style={{ color: "#5B3896" }} />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="message  d-flex p-3 justify-content-between align-items-center">
            <div className="d-flex">
              <div
                style={{
                  width: "40px",
                  height: "68px",
                  borderRadius: "50%",
                }}
                className="bo mx-1"
              >
                <Link to="/app/profile-v">
                  <img
                    src={pfp}
                    alt=".."
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </div>
              <div>
                <div className="message-box">
                  <p className="message-text">
                    I went through this toght and i realised there is a
                    liposuction problem in Nigeria right now with emphasis on
                    the south{" "}
                  </p>
                </div>
                <span className=" ">
                  <span className="message-time">16:44am, Monday </span>
                  <span>
                    <IoCheckmarkDone style={{ color: "#5B3896" }} />
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end ">
            <div className="message p-3 ">
              <div className="d-flex justify-content-end">
                <div>
                  <div className="second-message-box">
                    <p className="message-text">
                      A trip down south opened my eyes to the liposuction
                      problem we have amongst our eveer growing number of our
                      young ladies.
                    </p>
                  </div>
                  <span className="d-flex  justify-content-end ">
                    <span>
                      <span className="message-time">16:44am, Monday </span>
                      <span clas>
                        <IoCheckmarkDone style={{ color: "#5B3896" }} />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="message   d-flex p-3 justify-content-between align-items-center">
            <div className="d-flex ">
              <div
                style={{
                  width: "40px",
                  height: "68px",
                  borderRadius: "50%",
                }}
                className="bo mx-1"
              >
                <Link to="/app/profile-v">
                  <img
                    src={pfp}
                    alt=".."
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </div>
              <div className="">
                <div className="message-box">
                  <p className="message-text">
                    This will be a turning point in the coming elections.
                  </p>
                </div>
                <span className=" ">
                  <span className="message-time">16:44am, Monday </span>
                  <span>
                    <IoCheckmarkDone style={{ color: "#5B3896" }} />
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* <div className="fixed-input"> */}
          <div className="input-contain">
            <div className="  postision-relative">
              <div className=" ">
                <span className="emoji-icon">
                  <img src={emoji} alt="emoji" />
                </span>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="input"
                  // onChange={handle}
                  onKeyDown={sending}
                  // value={form.text}
                />
                <span className="image-icon">
                  <GrImage fontSize={20} />
                </span>
              </div>
              <div className=" mx-2">
                <div className="play-btn align">
                  {send ? (
                    <img src={play} alt="play" />
                  ) : (
                    <img src={mic} alt="mic" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className=" mx-3 my-4 ">
        {Array.from(Array(6)).map((item, i) => (
          <div
            key={i}
            className="chat  d-flex justify-content-between align-items-center"
          >
            <div className="d-flex">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              >
                <Link to="/app/profile-v">
                  <img
                    src={pfp}
                    alt=".."
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </div>
              <div
                onClick={() => setIsOpen(true)}
                className="text-decoration-none"
              >
                <div className="chat-details pt-2">
                  <p className="chat-header mb-1">
                    Robert Fox
                    <span className="chat-author"> @ Baby-Flake</span>
                  </p>
                  <p className="chat-text mb-0 text-left d-none d-md-block">
                    I will like you to consider the posibility of going home and
                    doing all you should do.{" "}
                  </p>
                  <p className="chat-text mb-0 text-left d-block d-md-none">
                    I will like you to consider the posibility of going home and
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="chat-time">6h</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicCard;
