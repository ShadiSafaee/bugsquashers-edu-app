import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import StudentContext from "../../context/student/StudentContext";
import SyntaxContext from "../../context/user/SyntaxContext";
import "../../styles/lesson.css";
import { base_url } from "../main/url";
const Lesson = () => {
  const { getLessonHandler, lesson, setSubmitFile, submitLessonHandler } =
    useContext(StudentContext);
  const { user } = useContext(SyntaxContext);
  const { lessonId, name } = useParams();
  const navigate = useNavigate();
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
              <td colSpan="2">
                <a
                  href={`${base_url}/${lesson.lesson_url}`}
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
      <section className="lesson_form_sec">
        <h1>Submit New Lesson</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitLessonHandler(user["id"], lessonId);
            navigate(`/dashboard/student/${name}`, { replace: true });
          }}
        >
          <label htmlFor="upfile">
            <input
              type="file"
              id="upfile"
              placeholder="Upload here"
              className="upload_btn"
              onChange={(e) => setSubmitFile(e.target.files[0])}
            />
          </label>
          <button type="submit" className="btn submission_upload">
            Submit
          </button>
        </form>
      </section>
    </article>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Lesson;
