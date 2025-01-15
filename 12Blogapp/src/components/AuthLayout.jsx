import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    
    /** 
    console.log("AuthLayout useEffect triggered:", {
      authentication,
      authStatus,
    });*/

    if (loader) {
      return;
    }

    if (authentication && !authStatus) {
      console.log("Redirecting to /login");
      navigate("/login");
    } else if (!authentication && authStatus) {
      console.log("Redirecting to /");
      navigate("/");
    }
  }, [authStatus, navigate, authentication, loader]);

  useEffect(() => {
    setLoader(false);
  }, []);

  return loader ? null : <>{children}</>;
};

export default AuthLayout;
