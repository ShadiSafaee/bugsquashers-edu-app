import React, { useContext, useEffect } from "react";
import StudentContext from "../../context/student/StudentContext";
import "../../styles/quize.css";
import { Link } from "react-router-dom";

const Quize = () => {
  const { modules, getModulesHandler, moduleHandler, lessons, setLessons } =
    useContext(StudentContext);
  useEffect(() => {
    getModulesHandler();
  }, [setLessons]);

  console.log(lessons);
  return (
    <article className="quize_art">
      <section className="quize_modules_sec">
        {modules.map((mod, index) => (
          <div
            onClick={() => moduleHandler(mod.id)}
            key={index}
            className="module_card"
          >
            <h3>{`Unit ${index + 1}`}</h3>
            <h2>{mod.module_name}</h2>
            <div>
              <p>{mod.module_description}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
        {console.log(lessons)}
        {lessons.length !== 0 &&
          lessons.map((lesson, index) => {
            return (
              <Link to={`lesson-${lesson.id}`} key={index}>
                <div className="lesson_card">
                  <h2>{lesson.lesson_name}</h2>
                </div>
              </Link>
            );
          })}
      </section>
    </article>
  );
};

export default Quize;
