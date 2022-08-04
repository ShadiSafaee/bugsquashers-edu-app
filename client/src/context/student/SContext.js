import React, { useState, useEffect } from "react";
import StudentContext from "./StudentContext";
import { base_url } from "../../components/main/url";
const SContext = ({ children }) => {
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [lesson, setLesson] = useState({});
  const [submitFile, setSubmitFile] = useState({});

  const getModulesHandler = async () => {
    const url = ` ${base_url}/api/teacher/modules`;
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
    const url = `${base_url}/api/teacher/modules/lessons/${id}`;
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
  const getLessonHandler = async (id) => {
    const url = `${base_url}/api/teacher/lesson/${id}`;
    if (id) {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setLesson(data.data);
      } else {
        alert("Lesson not found");
      }
    }
  };
  const submitLessonHandler = async (userId, lessonId) => {
    const myForm = new FormData();
    myForm.append("lesson_id", lessonId);
    myForm.append("user_id", userId);
    myForm.append("file", submitFile);
    const postOption = {
      method: "POST",
      body: myForm,
    };
    const url = `${base_url}/api/user/addnewsubmission`;
    try {
      const res = await fetch(url, postOption);
      if (res.ok) {
        alert("Lesson Submitted!");
      } else {
        alert("Could not submitted");
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
        getLessonHandler,
        lesson,
        setLesson,
        submitFile,
        setSubmitFile,
        submitLessonHandler,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default SContext;
