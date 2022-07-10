import { createContext } from "react";

const Context = createContext({
  mobileNavClass: false,
  setMobileNavClass: () => {},
  login: {},
  setLogin: () => {},
  register: {},
  setRegister: () => {},
  loginHandler: () => {},
});
export default Context;
