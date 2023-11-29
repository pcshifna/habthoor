import React from "react";
import style from "./SideDrawer.module.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ handleClick, activeMenu }) => {
  return (
    <div
      className={`${style["side-drawer"]} ${
        activeMenu && style.sideDrawerActive
      }`}
    >
      <div className={style.closeIcon}>
        <button type="submit" onClick={handleClick}>
          X
        </button>
      </div>
      <nav>
        <ul>
          <div className={style.longLine}></div>{" "}
          <li>
            <Link to="/">Home</Link>
          </li>
          <div className={style.longLine}></div>
          <li>
            <Link to="/">About Us</Link>
          </li>{" "}
          <div className={style.longLine}></div>
          <li>
            <Link to="/">Services</Link>
          </li>{" "}
          <div className={style.longLine}></div>
          <li>
            <Link to="/">Projects</Link>
          </li>{" "}
          <div className={style.longLine}></div>
          <li>
            <Link to="/">Clients</Link>
          </li>{" "}
          <div className={style.longLine}></div>
          <li>
            <Link to="/">Brands</Link>
          </li>{" "}
          <div className={style.longLine}></div>
          <li>
            <Link to="/">Media</Link>
          </li>{" "}
          <div className={style.longLine}></div>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
