import React, { useContext, useEffect } from "react";
import TeacherContext from "../../../context/teacher/TeacherContext";
import "../../../styles/modulesTable.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
const LessonsTable = () => {
  const context = useContext(TeacherContext);
  const {
    lesson,
    setlesson,
    lessons,
    setShowLessonEdit,
    showLessonEdit,
    getLessonsHandler,
    deletelessonHandler,
  } = context;
  useEffect(() => {
    getLessonsHandler();
  }, []);
  return (
    <>
      <h1 className="dash_header">
        Lessons
        <Link
          to="new-lesson"
          className="dash_add_btn btn"
          onClick={() => setShowLessonEdit(true)}
        >
          Add new
        </Link>
      </h1>
      <table className="modules_table">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>url</td>
            <td>Date</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {lessons.length === 0 ? (
            <tr>
              <td> There is no lesson</td>
            </tr>
          ) : (
            lessons.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.lesson_name}</td>
                  <td>{item.lesson_description}</td>
                  <td>{item.lesson_type}</td>
                  <td>{item.lesson_url}</td>
                  <td>{item.lesson_created_date}</td>

                  <td>
                    <Link
                      to={`edit-lesson/${item.id}-${item.lesson_name}`}
                      onClick={() => setShowLessonEdit(true)}
                    >
                      <img src="/img/edit.png" alt="edit png"></img>
                    </Link>
                  </td>
                  <td>
                    <img
                      src="/img/delete.png"
                      alt="delete png"
                      onClick={() => deletelessonHandler(item.id)}
                    ></img>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {setShowLessonEdit && (
        <>
          <Outlet></Outlet>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
};

export default LessonsTable;
