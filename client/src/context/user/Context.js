import React, { useState, useEffect } from "react";
import SyntaxContext from "./SyntaxContext";
const Context = ({ children }) => {
  const [mobileNavClass, setMobileNavClass] = useState("mobile_nav");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confpass: "",
    country: "",
    dob: "",
  });
  const registerHandler = (id, val) => {};
  const loginHandler = (id, val) => {};

  return (
    <SyntaxContext.Provider value={{ mobileNavClass, setMobileNavClass }}>
      {children}
    </SyntaxContext.Provider>
  );
};

export default Context;
