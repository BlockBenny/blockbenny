import "../styles/globals.css";
import AppContext from "./helper";
import React from "react";
import enUS from "../locales/en-US.json";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = React.useState(enUS);
  const state = { language, setLanguage };

  return (
    <AppContext.Provider value={state}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}
