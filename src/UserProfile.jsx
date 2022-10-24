import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <div className="box">
        <img
          className="avatar"
          src={user.avatar}
          width={170}
          height={170}
          alt={user.username}
        ></img>
        <div className="name">{user.username}</div>
      </div>
    </div>
  );
};

export default UserProfile;
{
  /* {user.email}
      {user.username} */
}
