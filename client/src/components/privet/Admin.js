import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";
const Admin = () => {
  const { user } = useContext(SyntaxContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== "admin") {
      return navigate("/", { replace: true });
    }
  }, [user]);

  return <h1>Admin</h1>;
};

export default Admin;
