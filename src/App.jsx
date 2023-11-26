import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout";

import Home from "./Pages/Home/index";
function App() {
  return (
    <div className="app">
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
