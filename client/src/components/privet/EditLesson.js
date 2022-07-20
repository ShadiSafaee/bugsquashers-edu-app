import React, { useContext, useEffect } from "react";
import "../../styles/editModule.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TeacherContext from "../../context/teacher/TeacherContext";
const EditLesson = () => {
  const { id } = useParams();
  const newId = id.split("-")[0];
  const navigate = useNavigate();
  const {
    setLesson,
    lesson,
    lessons,
    errorMessage,
    editLessonInputs,
    editLessonHandler,
    setShowEdit,
    showLessonEdit,
    setShowLessonEdit,
  } = useContext(TeacherContext);

  useEffect(() => {
    const newId = id.split("-")[0];
    const target = lessons.find((item) => String(item.id) === newId);
    console.log(target);
    target
      ? setLesson(target)
      : navigate("/dashboard/teacher/teacher-Admin/lessons", {
          replace: true,
        });
  }, []);

  return (
    String(lesson["id"]) === newId && (
      <section className="edit_module_sec">
        <h1>Edit Lesson</h1>
        <form
          className="module_form"
          onSubmit={(e) => {
            e.preventDefault();
            editLessonHandler(e);
            navigate("/dashboard/teacher/teacher-Admin/lessons", {
              replace: true,
            });

            setShowLessonEdit(false);
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
    )
  );
};

export default EditLesson;
