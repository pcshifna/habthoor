import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
const Layout = () => {
  return (
    <section>
      <Navbar />
      <div className={style.content}>
        <Outlet />
      </div>
      <footer>footer</footer>
    </section>
  );
};

export default Layout;
