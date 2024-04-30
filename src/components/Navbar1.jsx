import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/upvision_logo.png";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar1() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section-outer">
      <div className="navbar-section">
        <h1 className="navbar-title">
          <Link to="/">
            <img src={logo} className="navbar-logo" />
          </Link>
        </h1>
   
        </div>
        {/* Hamburger Icon */}
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="hamb-icon"
          />
        </div>
      </div>
    
  );
}
export default Navbar1;
