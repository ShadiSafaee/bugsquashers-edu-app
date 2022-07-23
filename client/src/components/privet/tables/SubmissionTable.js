import React, { useContext, useEffect, useState } from "react";
import TeacherContext from "../../../context/teacher/TeacherContext";
import "../../../styles/modulesTable.css";
import SyntaxContext from "../../../context/user/SyntaxContext";

const SubmissionTable = () => {
  const [mark, setMark] = useState("");
  const { submissions, getAllSubmission, markSubmitHandler } =
    useContext(TeacherContext);
  const { user } = useContext(SyntaxContext);
  useEffect(() => {
    getAllSubmission();
  }, [setMark, markSubmitHandler]);

  return (
    <>
      <h1 className="dash_header">All Submissions</h1>
      <table className="modules_table">
        <thead>
          <tr>
            <th>#</th>
            <th>Module Name</th>
            <th>Lesson Name</th>
            <th>File</th>
            <th>Student Name</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {submissions.length === 0 ? (
            <tr>
              <th> There is no submitted file</th>
            </tr>
          ) : (
            submissions.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.module_name}</td>
                  <td>{item.lesson_name}</td>
                  <td>
                    <a
                      href={`http://localhost:5000/${item.url}`}
                      style={{ color: "#ffca00" }}
                      target="_blank"
                      download
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                  <td>{item.firstname + " " + item.surname}</td>
                  <td>
                    {!item.mark ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          markSubmitHandler(
                            user.id,
                            item.lesson_id,
                            item.user_id,
                            mark
                          );
                        }}
                      >
                        <input
                          type="text"
                          value={mark}
                          onChange={(e) => setMark(e.target.value)}
                        ></input>
                        <button type="submit">submit</button>
                      </form>
                    ) : (
                      item.mark
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default SubmissionTable;
