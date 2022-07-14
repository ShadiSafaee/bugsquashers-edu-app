import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
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
  }, [user]);
  return <h1>Teacher</h1>;
};

export default Teacher;
