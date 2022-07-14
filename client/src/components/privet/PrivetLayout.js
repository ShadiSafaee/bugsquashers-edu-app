import React, { useEffect, useContext } from "react";
import { useNavigate, Outlet } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";

const PrivetLayout = () => {
  const { user, auth } = useContext(SyntaxContext);
  console.log(user);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    auth().then((res) => {
      if (!res) {
        console.log("auth");
        return navigate("/logout");
      }
    });
  }, []);
  if (!user.firstname || !token) {
    console.log(user, token);
    return navigate("/");
  }
  return (
    <section className="dashboard_section">
      <Outlet></Outlet>
    </section>
  );
};

export default PrivetLayout;
