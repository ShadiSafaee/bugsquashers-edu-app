import { createContext } from "react";

const StudentContext = createContext({ test: false, setTest: () => {} });

export default StudentContext;
