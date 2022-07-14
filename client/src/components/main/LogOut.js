import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";

const LogOut = () => {
  const navigate = useNavigate();

  const { logOutHandler } = useContext(SyntaxContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
    logOutHandler();
  }, []);

  return null;
};

export default LogOut;
