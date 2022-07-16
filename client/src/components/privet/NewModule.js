import React, { useContext, useEffect } from "react";
import "../../styles/editModule.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TeacherContext from "../../context/teacher/TeacherContext";
const NewModule = () => {
  const navigate = useNavigate();
  const {
    setModule,
    module,
    errorMessage,
    editModuleInputs,
    newModuleHandler,
    setShowEdit,
  } = useContext(TeacherContext);
  useEffect(() => {
    setModule({
      id: "",
      module_name: "",
      module_description: "",
      module_created_date: "",
    });
  }, []);
  return (
    <section className="edit_module_sec">
      <h1>New Module</h1>
      <form
        className="module_form"
        onSubmit={(e) => {
          e.preventDefault();
          newModuleHandler();
        }}
      >
        <div className="input_container">
          <input
            className="module_input"
            type="text"
            value={module["module_name"]}
            onChange={(e) => editModuleInputs("name", e.target.value)}
            placeholder="Name..."
          ></input>
          <span className="input_message">{errorMessage["name"]}</span>
        </div>

        <div className="input_container">
          <textarea
            cols="40"
            rows="10"
            className="module_textarea"
            value={module["module_description"]}
            onChange={(e) => editModuleInputs("desc", e.target.value)}
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
          navigate("/dashboard/teacher/teacher-Admin/modules", {
            replace: true,
          });
          setShowEdit(false);
        }}
        className="btn module_btn cancel_btn"
      >
        Cancel
      </button>
    </section>
  );
};

export default NewModule;
