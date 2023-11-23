import React from "react";
import Logo from "../../assets/logo.png";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ButtonImage from "../../assets/buttonimage.svg";
function Navbar() {
  return (
    <header className={style.header}>
      <div className={style.logoWrapper}>
        <img src={Logo} />
      </div>
      <nav className={style.navbar}>
        <ul>
          <b>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Clients</Link>
            </li>
            <li>
              <Link to="/">Brands</Link>
            </li>
            <li>
              <Link to="/">Media</Link>
            </li>
          </b>
        </ul>
      </nav>
      <div>
        {/* <div className={style.buttonImage}>
          <img src={ButtonImage} alt="" />
        </div> */}
        <button type="submit">
          <b>Contact Us</b>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
