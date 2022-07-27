import React, { useContext, useState, useEffect } from "react";
import SyntaxContext from "../../context/user/SyntaxContext";
import TeacherContext from "../../context/teacher/TeacherContext";

const Submission = ({ item, index }) => {
  const [mark, setMark] = useState("");

  const { user } = useContext(SyntaxContext);
  const { markSubmitHandler, getAllSubmission } = useContext(TeacherContext);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.module_name}</td>
      <td>{item.lesson_name}</td>
      <td>
        <a
          href={`https://bugsquashers-edu-app.herokuapp.com/${item.url}`}
          style={{
            color: "#1e62e1",
            textDecoration: "underline black",
          }}
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
              markSubmitHandler(user.id, item.lesson_id, item.user_id, mark);
              getAllSubmission();
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
};

export default Submission;
