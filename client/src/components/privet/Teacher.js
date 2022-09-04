import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";
import { isExpired } from "react-jwt";
import TeacherContext from "../../context/teacher/TeacherContext";

const Teacher = () => {
  const navigate = useNavigate();
  const { user, isAuth } = useContext(SyntaxContext);
  useEffect(() => {
    if (user.role !== "teacher") {
      return navigate("/", { replace: true });
    }
    console.log("first");
  }, [user]);
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Teacher;
