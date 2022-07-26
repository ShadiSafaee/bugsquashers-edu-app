import React, { useContext, useEffect } from "react";
import "../../styles/editModule.css";
import { useNavigate } from "react-router-dom";
import TeacherContext from "../../context/teacher/TeacherContext";
const NewLesson = () => {
  const navigate = useNavigate();
  const {
    setLesson,
    lesson,

    errorMessage,
    editLessonInputs,
    newLessonHandler,
    setShowLessonEdit,
    getModulesHandler,

    modules,
  } = useContext(TeacherContext);
  useEffect(() => {
    setLesson({
      id: "",
      lesson_name: "",
      lesson_description: "",
      lesson_type: "",
      lesson_url: "",
      lesson_created_date: "",
      module_id: "",
      lesson_file: {},
    });
    getModulesHandler();
  }, [setLesson]);

  return (
    <section className="edit_module_sec">
      <h1>New Lesson</h1>
      <form
        className="module_form"
        onSubmit={(e) => {
          e.preventDefault();
          newLessonHandler();
        }}
      >
        <div className="input_container">
          <input
            className="module_input"
            type="text"
            value={lesson["lesson_name"]}
            onChange={(e) => editLessonInputs("name", e.target.value)}
            placeholder="Name..."
          ></input>
          <span className="input_message">{errorMessage["name"]}</span>
        </div>

        <div className="input_container">
          <textarea
            cols="40"
            rows="10"
            className="module_textarea"
            value={lesson["lesson_description"]}
            onChange={(e) => editLessonInputs("desc", e.target.value)}
            placeholder="Description..."
            resize="none"
          ></textarea>
          <span className="input_message">{errorMessage["desc"]}</span>
        </div>
        <div className="input_container">
          <select
            className="module_select_tag"
            onChange={(e) => editLessonInputs("mod", e.target.value)}
            value={lesson["module_id"]}
          >
            <option value="none">Choose a Module</option>
            {modules.map((mod, index) => {
              return (
                <option key={index} value={mod.id}>
                  {mod.module_name}
                </option>
              );
            })}
          </select>
          <span className="input_message">{errorMessage["mod"]}</span>
        </div>
        <div className="input_container">
          <select
            className="my-select-menu"
            onChange={(e) => editLessonInputs("type", e.target.value)}
            value={lesson["lesson_type"]}
          >
            <option value="none">Type...</option>
            <option value="difficult">Difficult</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
          <span className="input_message">{errorMessage["type"]}</span>
        </div>
        <div className="input_container">
          <input
            type="file"
            value={lesson["file"]}
            onChange={(e) => editLessonInputs("file", e.target.files[0])}
          />
          <span className="input_message">{errorMessage["file"]}</span>
        </div>
        <button type="submit" className="btn module_btn">
          Submit
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/dashboard/teacher/teacher-Admin/lessons", {
            replace: true,
          });
          setShowLessonEdit(false);
        }}
        className="btn lesson_btn cancel_btn"
      >
        Cancel
      </button>
    </section>
  );
};

export default NewLesson;
