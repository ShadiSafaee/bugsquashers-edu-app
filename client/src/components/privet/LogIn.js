import { React, useContext, useEffect } from "react";
import SyntaxContext from "../../context/user/SyntaxContext";
import { isExpired } from "react-jwt";
import { useNavigate } from "react-router";
import "../../styles/login.css";
const LogIn = () => {
  const navigate = useNavigate();
  const {
    login,
    loginHandler,
    setErrorMessage,
    errorMessage,
    setRegister,
    loginFormHandler,
  } = useContext(SyntaxContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const isEx = isExpired(token);
      console.log(isEx);
      if (!isEx) {
        navigate("/");
        return alert("Please log out first!");
      }
    }
    setRegister({
      email: "",
      password: "",
      confpass: "",
      firstname: "",
      surname: "",
      country: "",
    });
    setErrorMessage({
      email: "",
      password: "",
      confpass: "",
      firstname: "",
      surname: "",
      country: "",
    });
  }, []);

  return (
    <section className="login_section">
      <h2>Log In</h2>
      <form
        className="login_form"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler();
        }}
      >
        <div className="login_input_container">
          <input
            className="login_input"
            type="email"
            placeholder="Email..."
            value={login["email"]}
            onChange={(e) => {
              let val = e.target.value.replace(/\s/g, "");

              loginFormHandler("email", val);
            }}
            required
          />
          <span className="input_message">{errorMessage["email"]}</span>
        </div>

        <div className="login_input_container">
          <input
            className="login_input"
            type="password"
            placeholder="Password..."
            value={login["password"]}
            onChange={(e) => {
              let val = e.target.value.replace(/\s/g, "");
              loginFormHandler("pass", val);
            }}
            required
          />
          <span className="input_message">{errorMessage["password"]}</span>
        </div>

        <button className="login_btn btn" type="submit">
          Log In
        </button>
        {/* <Link to="/???">Forgot Password? Reset your password Here</Link> */}
      </form>
      <img src="/svg/girl.svg" alt="girl svg" className="login_svg_girl" />
      <img src="/svg/boy1.svg" alt="boy svg" className="login_svg_boy" />
    </section>
  );
};
export default LogIn;
