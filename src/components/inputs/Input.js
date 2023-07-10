import React from "react";
import { GrImage } from "react-icons/gr";

const Input = () => {
  return (
    <div>
      <div className="input-contain">
        <div className="  postision-relative">
          <div className=" ">
            <span className="emoji-icon">
              {/* <img src={emoji} alt="emoji" /> */}
            </span>
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="input"
              // onChange={handle}
              // onKeyDown={sending}
              // value={form.text}
            />
            <span className="image-icon">
              <GrImage fontSize={20} />
            </span>
          </div>
          <div className=" mx-2">
            <div className="play-btn align">
              {/* {send ? ("" */}
              {/* // <img src={play} alt="play" /> */}
              {/* ) : ("" */}
              {/* // <img src={mic} alt="mic" />"" */}
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
