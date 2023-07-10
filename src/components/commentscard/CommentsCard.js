import React from "react";
import com from "../../asset/img/com.png";
import p2 from "../../asset/img/2.png";
import p3 from "../../asset/img/3.png";
import p4 from "../../asset/img/4.png";
import { Link } from "react-router-dom";
const CommentsCard = () => {
  return (
    <div>
      <div className=" mx-3 my-4">
        <div className=" d-flex justify-content-center align-items-center">
          <div className=" px-3">
            {Array.from(Array(6)).map((item, i) => (
              <div key={i} className="comments-container ">
                <div className="mt-1 d-flex  ">
                  <Link to="/app/profile-v">
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        background: "RED",
                        borderRadius: "50%",
                      }}
                      className="align"
                    >
                      <img src={com} alt="..." />
                    </div>
                  </Link>
                  <div>
                    <div className="comment-wrapper ">
                      <p className="comments-poster mb-0">
                        Cee-man{" "}
                        <span
                          className="fw-bold"
                          style={{
                            fontSize: "12px",
                            color: "#B7B7B7",
                          }}
                        >
                          @Xmen_don
                        </span>
                      </p>
                      <p className="comment-text m-0">
                        Great read, i was enlightened, as someone who has had a
                        family member go through this, i understand what it’s
                        all about.
                      </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-3 mt-1">
                      <div className="post-icon d-flex align-items-center">
                        <div>
                          <img src={p2} alt="..." />
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "15.0392px",
                            color: "#878282",
                            marginLeft: "6px",
                          }}
                        >
                          245
                        </p>
                      </div>
                      <div className="post-icon d-flex align-items-center">
                        <div>
                          <img src={p3} alt="..." />
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "15.0392px",
                            color: "#878282",
                            marginLeft: "6px",
                          }}
                        >
                          245
                        </p>
                      </div>
                      <div className="post-icon d-flex align-items-center">
                        <div>
                          <img src={p4} alt="..." />
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "15.0392px",
                            color: "#878282",
                            marginLeft: "6px",
                          }}
                        >
                          20
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
