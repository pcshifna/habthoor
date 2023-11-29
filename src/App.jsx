import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout";

import Home from "./Pages/Home/index";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
