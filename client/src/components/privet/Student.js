import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";
import StudentContext from "../../context/student/StudentContext";
const Student = () => {
  const { user } = useContext(SyntaxContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user.role !== "student") {
      return navigate("/", { replace: true });
    }
  }, [user]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Student;
