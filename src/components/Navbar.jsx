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

function Navbar() {
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
        <ul className="navbar-items">
          <li>
            <a href="#hero" className="navbar-links">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-links">
              About Us
            </a>
          </li>
          <li>
            <a href="#message" className="navbar-links">
              Message
            </a>
          </li>
          <li>
            <a href="#events" className="navbar-links">
              Events
            </a>
          </li>
          <li>
            <a href="#team" className="navbar-links">
              Team
            </a>
          </li>
          <li>
            <a href="#alumni" className="navbar-links">
              <Link to="/alumni">Alumni</Link>
            </a>
          </li>

          <li>
            <a href="#footer" className="navbar-links">
              Contact Us
            </a>
          </li>
        </ul>
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>

          <ul className="mobile-navbar-links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                About Us
              </Link>
            </li>
            <li>
              <a onClick={openNav} href="#events">
                Events
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#team">
                Team
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#">
                Contact Us
              </a>
            </li>
          </ul>
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
    </div>
  );
}
export default Navbar;
