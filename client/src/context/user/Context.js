import React, { useState, useEffect } from "react";
import SyntaxContext from "./SyntaxContext";
const Context = ({ children }) => {
  const [mobileNavClass, setMobileNavClass] = useState("mobile_nav");

  return (
    <SyntaxContext.Provider value={{ mobileNavClass, setMobileNavClass }}>
      {children}
    </SyntaxContext.Provider>
  );
};

export default Context;
