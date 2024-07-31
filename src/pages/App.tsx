import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyles styles={{}} />
      <Routes>
        <Route path="/" element={<div>Wolf Landing Page</div>} />
      </Routes>
    </div>
  );
};

export default App;
