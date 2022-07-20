import React, { useState, useEffect } from "react";
import StudentContext from "./StudentContext";

const SContext = ({ children }) => {
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);
  const getModulesHandler = async () => {
    const url = "http://localhost:5000/api/teacher/modules";
    const res = await fetch(url);

    try {
      if (res.ok) {
        const data = await res.json();

        setModules(data);
      } else {
        setModules([...modules]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const moduleHandler = async (id) => {
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `http://localhost:5000/api/teacher/modules/lessons/${id}`;
    try {
      const res = await fetch(url, postOption);
      if (res.ok) {
        const data = await res.json();
        setLessons(data.data);
      } else {
        console.log("nothing found!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        modules,
        setModules,
        getModulesHandler,
        moduleHandler,
        lessons,
        setLessons,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default SContext;
