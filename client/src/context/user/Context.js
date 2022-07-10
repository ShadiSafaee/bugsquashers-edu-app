import React, { useState } from "react";
import SyntaxContext from "./SyntaxContext";
const Context = ({ children }) => {
  const [mobileNavClass, setMobileNavClass] = useState("false");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confpass: "",
    firstname: "",
    surname: "",
    country: "",
    dob: new Date(),
  });
  const registerFormHandler = (id, val) => {
    switch (id) {
      case "email":
        setRegister({ ...register, email: val });
        break;
      case "pass":
        setRegister({ ...register, password: val });
        break;
      case "confpass":
        setRegister({ ...register, confpass: val });
        break;
      case "country":
        setRegister({ ...register, country: val });
        break;
      case "dob":
        setRegister({ ...register, dob: val });
        break;
      case "fname":
        setRegister({ ...register, firstname: val });
        break;
      case "lname":
        setRegister({ ...register, surname: val });
        break;
      default:
        break;
    }
  };
  const loginFormHandler = (id, val) => {
    switch (id) {
      case "email":
        setLogin({ ...login, email: val });
        break;
      case "pass":
        setLogin({ ...login, password: val });
        break;
      default:
        break;
    }
  };
  const registerHandler = () => {
    console.log(register);
  };
  const loginHandler = () => {};

  return (
    <SyntaxContext.Provider
      value={{
        mobileNavClass,
        setMobileNavClass,
        login,
        setLogin,
        register,
        setRegister,
        registerHandler,
        loginHandler,
        loginFormHandler,
        registerFormHandler,
      }}
    >
      {children}
    </SyntaxContext.Provider>
  );
};

export default Context;
