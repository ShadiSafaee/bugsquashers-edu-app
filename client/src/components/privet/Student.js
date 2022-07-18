import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";
const Student = () => {
  const { user } = useContext(SyntaxContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role !== "student") {
      return navigate("/", { replace: true });
    }
  }, [user]);
  return <h1>student</h1>;
};

export default Student;
