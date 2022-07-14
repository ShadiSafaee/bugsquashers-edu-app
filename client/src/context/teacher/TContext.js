import React, { useState } from "react";
import TeacherContext from "./TeacherContext";
const Tcontext = ({ children }) => {
  const [test, settest] = useState("test");
  return (
    <TeacherContext.Provider value={{ test }}>
      {children}
    </TeacherContext.Provider>
  );
};

export default Tcontext;
