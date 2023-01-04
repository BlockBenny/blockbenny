import enUS from "./locales/en-US.json";
import React from "react";

const AppContext = React.createContext({
  language: enUS,
  setLanguage: () => {},
});

export default AppContext;
