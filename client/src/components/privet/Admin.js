import React from "react";
import { useNavigate } from "react-router";
const Admin = ({ user }) => {
  const navigate = useNavigate();
  if (user.role !== "admin") {
    return navigate("/", { replace: true });
  }
  console.log(user);
  return <h1>Admin</h1>;
};

export default Admin;
