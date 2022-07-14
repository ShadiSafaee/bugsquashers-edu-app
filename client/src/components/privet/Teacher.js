import React, { useContext } from "react";
import { useNavigate } from "react-router";
import TeacherContext from "../../context/teacher/TeacherContext";
const Teacher = ({ user }) => {
  const navigate = useNavigate();
  const { test } = useContext(TeacherContext);
  // if (user["role"] === "student") {
  //   return navigate("/", { replace: true });
  // }
  console.log(test);
  return <h1>Teacher</h1>;
};

export default Teacher;
