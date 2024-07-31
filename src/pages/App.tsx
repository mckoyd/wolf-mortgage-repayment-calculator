import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import { useGlobalStyles } from "../styles/global.styles";
import { useAppStyles } from "../styles/app.styles";

const App: React.FC = () => {
  const { classes } = useAppStyles();

  return (
    <div className={classes.appContainer}>
      <GlobalStyles styles={useGlobalStyles} />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
