import React, { useState, useEffect } from "react";
import TeacherContext from "./TeacherContext";
const Tcontext = ({ children }) => {
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState({
    module_name: "",
    moudule_description: "",
    moudule_created_date: "",
  });
  const [lessons, setLessons] = useState([]);
  useEffect(() => {}, []);

  const getModulesHandler = () => {
    const url = "http://localhost:5000/api/";
  };
  return (
    <TeacherContext.Provider
      value={{
        modules,
        setModules,
        module,
        setModule,
        lessons,
        setLessons,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default Tcontext;
