import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <li className="card">
      <a className="card-image">
        <img src={user.avatar} />
      </a>
      <a className="card-description">
        <p>
          {user.first_name} {user.last_name}
        </p>
      </a>
    </li>
  );
};

export default UserCard;
