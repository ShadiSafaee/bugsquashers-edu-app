import { createContext } from "react";
const Context = createContext({
  modules: [],
  setModules: () => {},
  module: {},
  setModule: () => {},
  lessons: [],
  setLessons: () => {},
  editModuleInputs: () => {},
  editModuleHandler: () => {},
  errorMessage: {},
  setErrorMessage: () => {},
  showEdit: false,
  setShowEdit: () => {},
  deleteModuleHandler: () => {},
  newModuleHandler: () => {},
  getLessonsHandler: () => {},
  showLessonEdit: false,
  setShowLessonEdit: () => {},
  lesson: {},
  setlesson: () => {},
  deleteLessonHandler: () => {},
  editLessonHandler: () => {},
  editLessonInputs: () => {},
  getModulesHandler: () => {},
  newLessonHandler: () => {},
});
export default Context;
