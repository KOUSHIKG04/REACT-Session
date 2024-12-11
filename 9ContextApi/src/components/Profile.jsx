import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h4>ENTER YOUR CREDENTIALS</h4>
      </div>
    );
  }
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <h4>Welcome {user.username} </h4>
    </div>
  );
}

export default Profile;
