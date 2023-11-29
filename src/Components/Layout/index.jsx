import React from "react";
import Header from "../Header/index";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import Footer from "../Footer/index";
import SideDrawer from "./SideDrawer";
const Layout = () => {
  const [activeMenu, setActiveMenu] = React.useState(false);

  const handleClick = () => {
    setActiveMenu((prevState) => !prevState);
  };

  return (
    <section className={style.hi}>
      <Header handleClick={handleClick} />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
      <SideDrawer activeMenu={activeMenu} handleClick={handleClick} />
    </section>
  );
};

export default Layout;
