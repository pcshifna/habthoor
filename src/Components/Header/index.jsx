import { useState } from "react";
import Logo from "../../assets/logo.png";
import style from "./Header.module.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";

function Header() {
  const [click,setClick]=useState(false);
  const handleClick =()=>{
    setClick(!click);
  }
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
      <div
        className={click ? style["reorderMenuDisplay"] : style["reorderMenu"]}
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
    </header>
  );
}

export default Header;
