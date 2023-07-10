import React from "react";

const LikesCard = () => {
  return (
    <div>
      <div className="like-wrapper mx-3 my-4">
        <div className="border py-5 d-flex justify-content-center align-items-center">
          <h2 className="text-center " style={{ fontSize: "16px" }}>
            No Likes Yet
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LikesCard;
