import React, { useContext, useEffect } from "react";
import TeacherContext from "../../../context/teacher/TeacherContext";

import "../../../styles/modulesTable.css";
import Submission from "../Submition";

const SubmissionTable = () => {
  const { submissions, getAllSubmission } = useContext(TeacherContext);
  useEffect(() => {
    getAllSubmission();
  }, []);
  return (
    submissions && (
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
                  <Submission
                    item={item}
                    index={index}
                    key={index}
                  ></Submission>
                );
              })
            )}
          </tbody>
        </table>
      </>
    )
  );
};

export default SubmissionTable;
