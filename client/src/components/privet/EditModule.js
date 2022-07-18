import React, { useContext, useEffect } from "react";
import "../../styles/editModule.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TeacherContext from "../../context/teacher/TeacherContext";
const EditModule = () => {
  const { id } = useParams();
  const newId = id.split("-")[0];
  const navigate = useNavigate();
  const {
    setModule,
    module,
    modules,
    errorMessage,
    editModuleInputs,
    editModuleHandler,
    setShowEdit,
  } = useContext(TeacherContext);

  useEffect(() => {
    const newId = id.split("-")[0];
    const target = modules.find((item) => String(item.id) === newId);

    target
      ? setModule(target)
      : navigate("/dashboard/teacher/teacher-Admin/modules", {
          replace: true,
        });
  }, []);

  return (
    String(module["id"]) === newId && (
      <section className="edit_module_sec">
        <h1>Edit Module</h1>
        <form
          className="module_form"
          onSubmit={(e) => {
            e.preventDefault();
            editModuleHandler(e);
            navigate("/dashboard/teacher/teacher-Admin/modules", {
              replace: true,
            });

            setShowEdit(false);
            // setModule({ module_description: "", module_name: "" });
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
    )
  );
};

export default EditModule;
