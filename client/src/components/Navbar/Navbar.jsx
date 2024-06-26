import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png'
import srhulogo from '/srhulogo.png'
import Sidebar from '../sidebar/Sidebar'
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (

    <nav>
      <div className="navbar">
      <Link to={"/"}> <img src={logo} alt="logo" width={75} className="logo" /></Link>
        <ul className={`nav-links ${showMenu ? "show" : ""}`}>
          <li><Link to={"/YUVOTSAV'24"}>YUVOTSAV'24</Link></li>
          <li><Link to={"/NEWS"}>NEWS</Link></li>
          <li><Link to={"/ABOUT US"}>ABOUT US</Link></li>
          <li><Link to={"/CONTACT US"}>CONTACT US</Link></li>
        </ul>
        {/* <Link to={"https://srhu.edu.in"} target="blank" className="srhulogo"> <img src={srhulogo} className="srhulogo" alt="logo" /></Link></div> */}
        <img src={srhulogo} className="srhulogo" alt="logo" onClick={() => window.open("https://srhu.edu.in", "_blank")} />
        </div>
        <Sidebar showMenu={showMenu} />
    </nav >
  );
};

export default Navbar;
