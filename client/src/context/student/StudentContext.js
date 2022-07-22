import { createContext } from "react";

const StudentContext = createContext({
  modules: [],
  setModules: () => {},
  getModulesHandler: () => {},
  ModuleHandler: () => {},
  lessons: [],
  setLessons: () => {},
  getLessonHandler: () => {},
  lesson: {},
  setLesson: () => {},
});

export default StudentContext;
