import { useState } from "react";
import Logo from "../../assets/logo.png";
import style from "./Header.module.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";

function Header({handleClick}) {
 
  return (
    <header className={style.header}>
      <div className={style.logoWrapper}>
        <img src={Logo} />
      </div>
      <nav className={style.navbar}>
        <div className={style.onBigScreen}>
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
        </div>
        <div className={style.onSmallScreen}>
          <button type="submit" onClick={handleClick}>
            <ReorderIcon />
          </button>
        </div>
      </nav>
      <div className={style.contactButton}>
        <button type="submit">
          <b>Contact Us</b>
        </button>
      </div>

      {/* Side Drawer */}
      
    </header>
  );
}

export default Header;
