import React, { useContext } from "react";

import UserContext from "./UserContext";
function UserProfile(props) {
  const userData = UserContext;
  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
