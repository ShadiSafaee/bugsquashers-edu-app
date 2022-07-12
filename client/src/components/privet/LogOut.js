import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";

const LogOut = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(SyntaxContext);
  useEffect(() => {
    localStorage.removeItem("token");
    setUser({});
    navigate("/", { replace: true });
  }, [navigate]);
  if (!user) {
    return navigate("/");
  }

  return null;
};

export default LogOut;
