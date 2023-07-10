import React from "react";
import profile from "../../asset/img/profile.jpg";

const ProfilesPics = () => {
  return (
    <div>
      <div className="profile-box">
        <img
          src={profile}
          alt=".."
          width="35"
          height="35"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default ProfilesPics;
