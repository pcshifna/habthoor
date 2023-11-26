import React from "react";
import Header from "../Header/index";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import Footer from "../Footer/index";
const Layout = () => {
  return (
    <section>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
