import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";

const Login = () => {

  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>LOGIN PAGE</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        style={{
          marginRight: "10px",
        }}
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        style={{
          marginRight: "10px",
        }}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Login;
