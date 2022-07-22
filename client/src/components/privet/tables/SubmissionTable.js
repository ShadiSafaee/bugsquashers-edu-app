import React, { useContext, useEffect } from "react";
import "../../../styles/submissiontable.css";
import TeacherContext from "../../../context/teacher/TeacherContext";
import "../../../styles/modulesTable.css";
import SyntaxContext from "../../../context/user/SyntaxContext";

const SubmissionTable = () => {
  const { submissions, getAllSubmission, setMark, mark, markSubmitHandler } =
    useContext(TeacherContext);
  const { user } = useContext(SyntaxContext);
  useEffect(() => {
    getAllSubmission();
  });

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
                  <td>{item.url}</td>
                  <td>{item.firstname + " " + item.surname}</td>
                  <td>
                    {!item.mark ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          markSubmitHandler(
                            user.id,
                            item.lesson_id,
                            item.user_id
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
