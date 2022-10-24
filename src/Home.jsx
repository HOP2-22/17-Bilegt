import "./Home.css";
import react, { useState } from "react";
import users from "./users.json";
import { Link } from "react-router-dom";
const UserCard = ({ userData }) => {
  return (
    <div className="data">
      <div className="border">
        <img
          src={userData.avatar}
          width={170}
          height={170}
          alt={userData.username}
        ></img>
      </div>
      <div className="linee">
        <Link to={userData.username}>{userData.first_name + " " + userData.last_name}</Link>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        <p>{userData.gender}</p>
      </div>
    </div>
  );
};
const Apex = () => {
  console.log(users);
  const [output, setOutput] = useState(users);
  const search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username
          .toLocaleLowerCase()
          .includes(val.toLocaleLowerCase());
      });
    });
  };
  return (
    <div className="daataa">
      {users.map((userData, index) => {
        return <UserCard userData={userData} key={index} />;
      })}
    </div>
  );
};

export default Apex;