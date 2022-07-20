import React, { useState, useEffect } from "react";
import StudentContext from "./StudentContext";

const SContext = ({ children }) => {
  const [test, setTest] = useState(false);

  return (
    <StudentContext.Provider value={{ test, setTest }}>
      {children}
    </StudentContext.Provider>
  );
};

export default SContext;
