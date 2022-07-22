import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import StudentContext from "../../context/student/StudentContext";
import "../../styles/lesson.css";

const Lesson = () => {
  const { getLessonHandler, lesson } = useContext(StudentContext);
  const { lessonId } = useParams();

  useEffect(() => {
    getLessonHandler(lessonId);
  }, []);

  return lesson["lesson_name"] ? (
    <article className="lesson_art">
      <section className="lesson_info_sec">
        <h1>Lesson info</h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{lesson.lesson_name}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{lesson.lesson_description}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{lesson.lesson_type}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{lesson.lesson_created_date}</td>
            </tr>
            <tr>
              <td colSpan="1">
                <a
                  href={`http://localhost:5000/${lesson.lesson_url}`}
                  target="_blank"
                  download
                  rel="noreferrer"
                >
                  Download Lesson
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="lesson_form_sec"></section>
    </article>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Lesson;
