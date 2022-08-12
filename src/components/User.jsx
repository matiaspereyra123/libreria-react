import React from "react";

const User = (props) => {
  return (
    <div className="random-user">
      <div className="user-image">
        {/* <img src={picture.medium} alt={name.first} /> */}
      </div>
      <div className="user-details">
        <div>
          <strong>Name:</strong> {props.first_name} {props.last_name}
        </div>
        <div>
          <strong>Email:</strong> {props.email}
        </div>
        <div>
          <strong>Id:</strong> {props.id}
        </div>
      </div>
    </div>
  );
};

export default User;