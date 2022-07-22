import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import SyntaxContext from "../../context/user/SyntaxContext";
import { isExpired } from "react-jwt";
const LogOut = () => {
  const navigate = useNavigate();

  const { logOutHandler } = useContext(SyntaxContext);
  useEffect(() => {
    logOutHandler();
    return navigate("/", { replace: true });
  }, []);

  return null;
};

export default LogOut;
