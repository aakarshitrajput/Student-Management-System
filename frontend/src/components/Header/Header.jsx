import React, { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const navToggel = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };
  return (
    <div className="container">
      <div className="subContainer">
        <Link className="logoContainer">
          <IoSchool className="logo" />
          <div className="logoFont">
            Student<span>&nbsp;</span>Management<span>&nbsp;</span>System
          </div>
        </Link>

        <div className="studentSearchContainer">
          <Link className="studentLink">Students</Link>
          <input className="searchBox" placeholder="Search" />
        </div>
        <div className="AboutAdminContainer">
          <Link className="aboutLink">About</Link>
          <Link className="adminLink">Admin</Link>
        </div>

        <FiMenu className="MenuIcon" onClick={navToggel} />
      </div>

      <div className={navActive ? "navMenuActive" : "navMenuInactive"}>
        <div className="navLinks">
          <input className="searchBox" placeholder="Search" />
          <Link className="navLinkStudents">Students</Link>
          <Link className="navLinkAbout">About</Link>
          <Link className="navLinkAdmin">Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
