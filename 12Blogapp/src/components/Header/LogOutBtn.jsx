import React from "react";
import { useDispatch } from "react-redux";
import authService from "@/appwrite/auth.js";
import { Button } from "../ui/button";
import { logout } from "@/store/authSlice.js";

const LogOutBtn = () => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <Button onClick={logoutHandler}>logout</Button>
    </div>
  );
};

export default LogOutBtn;
