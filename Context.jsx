import { createContext } from "react";

export const SesionDataContext = createContext({
  id: "",
  email: "",
  token: "",
  isLogged: false,
});
