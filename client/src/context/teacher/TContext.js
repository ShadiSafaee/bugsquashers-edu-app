import React, { useState, useEffect } from "react";
import TeacherContext from "./TeacherContext";
import { useNavigate } from "react-router";
const Tcontext = ({ children }) => {
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState({
    id: "",
    module_name: "",
    module_description: "",
    module_created_date: "",
  });
  const [lessons, setLessons] = useState([]);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    mod: "",
    type: "",
    file: "",
  });
  const [showEdit, setShowEdit] = useState(false);
  const [showLessonEdit, setShowLessonEdit] = useState(false);
  const [lesson, setLesson] = useState({
    lesson_name: "",
    lesson_description: "",
    lesson_type: "",
    lesson_url: "",
    lesson_created_date: "",
    module_id: "",
    lesson_file: {},
  });
  const navigate = useNavigate();

  const getModulesHandler = async () => {
    const url =
      "https://bugsquashers-edu-app.herokuapp.com/api/teacher/modules";
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
  const editModuleInputs = (id, val) => {
    switch (id) {
      case "name":
        setModule({ ...module, module_name: val });
        if (val.length === 0) {
          setErrorMessage({
            ...errorMessage,
            name: "Please write a module name",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            name: "",
          });
        }
        break;
      case "desc":
        setModule({ ...module, module_description: val });
        break;

      default:
        break;
    }
  };
  const editModuleHandler = async () => {
    if (errorMessage.name.length === 0 && module.module_name.length !== 0) {
      const url =
        "https://bugsquashers-edu-app.herokuapp.com/api/teacher/updatedmodule";
      const newDate = new Date();
      const fullDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
      const { module_name, module_description } = module;
      const user = {
        module_name: module_name,
        module_description: module_description,
        module_created_date: fullDate,
        id: module.id,
      };
      const putOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      try {
        const res = await fetch(url, putOptions);

        if (res.ok) {
          alert("done");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deleteModuleHandler = (id) => {
    const deleteOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };
    const url = `https://bugsquashers-edu-app.herokuapp.com/api/teacher/deletedmodule/${id}`;
    try {
      const res = fetch(url, deleteOptions);
      if (res.ok) {
        console.log("Module delete!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const newModuleHandler = async () => {
    const { module_name, module_description } = module;
    if (module.module_name.length !== 0) {
      const newDate = new Date();
      const fullDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
      const url =
        "https://bugsquashers-edu-app.herokuapp.com/api/teacher/addnewmodule";
      const user = {
        module_name,
        module_description,
        module_created_date: fullDate,
      };
      const postOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      try {
        const res = await fetch(url, postOption);

        if (res.ok) {
          console.log("user created!");
          navigate("/dashboard/teacher/teacher-Admin/modules", {
            replace: true,
          });
          setShowEdit(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // =============================Lessons ===========
  const getLessonsHandler = async () => {
    const url =
      "https://bugsquashers-edu-app.herokuapp.com/api/teacher/lessons";
    const res = await fetch(url);
    try {
      if (res.ok) {
        const data = await res.json();
        setLessons(data);
      } else {
        setLessons([...lessons]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteLessonHandler = (id) => {
    const deleteOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };
    const url = `https://bugsquashers-edu-app.herokuapp.com/api/teacher/deletedlesson/${id}`;
    try {
      const res = fetch(url, deleteOptions);
      if (res.ok) {
        console.log("lesson delete!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editLessonHandler = () => {};
  const editLessonInputs = (id, val) => {
    switch (id) {
      case "name":
        setLesson({ ...lesson, lesson_name: val });
        if (val.length === 0) {
          setErrorMessage({
            ...errorMessage,
            name: "Please write a lesson name",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            name: "",
          });
        }
        break;
      case "desc":
        setLesson({ ...lesson, lesson_description: val });
        break;
      case "mod":
        setLesson({ ...lesson, module_id: val });
        if (val === "none") {
          setErrorMessage({
            ...errorMessage,
            mod: "Please choose a module",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            mod: "",
          });
        }
        break;

      case "type":
        setLesson({ ...lesson, lesson_type: val });
        if (val === "none") {
          setErrorMessage({
            ...errorMessage,
            type: "Please choose a type",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            type: "",
          });
        }
        break;
      case "file":
        setLesson({ ...lesson, lesson_file: val });
        if (!val.name) {
          setErrorMessage({
            ...errorMessage,
            file: "Please choose a file",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            file: "",
          });
        }
        break;
      default:
        break;
    }
  };
  const newLessonHandler = async () => {
    const {
      lesson_name,
      lesson_url,
      lesson_type,
      lesson_file,
      module_id,
      lesson_created_date,
      lesson_description,
    } = lesson;
    if (
      lesson_name.length === 0 ||
      lesson_type === "none" ||
      !lesson_file.name ||
      module_id === "none"
    ) {
      return alert("Please fill all the fields");
    }
    const url =
      "https://bugsquashers-edu-app.herokuapp.com/api/teacher/addnewlesson";
    const newDate = new Date();
    const fullDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
    const myForm = new FormData();
    myForm.append("module_id", module_id);
    myForm.append("lesson_name", lesson_name);
    myForm.append("lesson_url", "aasdasd");
    myForm.append("lesson_description", lesson_description);
    myForm.append("lesson_type", lesson_type);
    myForm.append("lesson_created_date", fullDate);
    myForm.append("file", lesson_file);
    console.log(myForm);
    const postOption = {
      method: "POST",

      body: myForm,
    };
    try {
      const res = await fetch(url, postOption);
      if (res.ok) {
        console.log(res);
        navigate("/dashboard/teacher/teacher-Admin/lessons", {
          replace: true,
        });
      } else {
        console.log("Error");
        navigate("/dashboard/teacher/teacher-Admin/lessons", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
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
        editModuleInputs,
        editModuleHandler,
        errorMessage,
        setErrorMessage,
        showEdit,
        setShowEdit,
        deleteModuleHandler,
        newModuleHandler,
        getLessonsHandler,
        showLessonEdit,
        setShowLessonEdit,
        lesson,
        setLesson,
        deleteLessonHandler,
        editLessonHandler,
        editLessonInputs,
        getModulesHandler,
        newLessonHandler,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default Tcontext;
