import React from "react";
import { useParams } from "react-router-dom";
import users from "./users.json";
import UserProfile from "./UserProfile";
const Userdetail = () => {
  const { username } = useParams();
  return (
    <div>
      {users.map((user) => {
        return user.username === username && <UserProfile user={user} />;
      })}
    </div>
  );
};

export default Userdetail;
