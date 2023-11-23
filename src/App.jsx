import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import B from "./Components/b";
import C from "./Components/c";
import Home from "./Pages/Home";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<div>about page</div>} />
          <Route path="/c" element={<div>about page</div>} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
