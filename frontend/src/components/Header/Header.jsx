import React, { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchStudent from "./SearchStudent";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [Search, setSearch] = useState();

  const searchHandler = async (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    axios.post("/search-registration", [e.target.value]).then(({ data }) => {
      console.log(data);
      setSearchedStudent(data);
      console.log(searchedStudent);
    });
  };

  const navToggel = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };
  return (
    <div className="container">
      <div className="subContainer">
        <Link to={"/"} className="logoContainer">
          <IoSchool className="logo" />
          <div className="logoFont">
            Student<span>&nbsp;</span>Management<span>&nbsp;</span>System
          </div>
        </Link>

        <div className="studentSearchContainer">
          <Link className="studentLink" to={"/students"}>
            Students
          </Link>

          <input
            className="searchBoxTop"
            placeholder="Registration Number"
            type="number"
            onChange={searchHandler}
            value={Search}
          />
        </div>
        <div className="AboutAdminContainer">
          <Link className="aboutLink" to={"/about"}>
            About
          </Link>
          <Link to={"/login"} className="adminLink">
            Admin
          </Link>
        </div>

        <FiMenu className="MenuIcon" onClick={navToggel} />
      </div>

      <div className={navActive ? "navMenuActive" : "navMenuInactive"}>
        <div className="navLinks">
          <input
            className="searchBoxTop"
            placeholder="Registration Number"
            type="number"
            onChange={searchHandler}
            value={Search}
          />
          <Link className="navLinkStudents" to={"/students"}>
            Students
          </Link>
          <Link className="navLinkAbout" to={"/about"}>
            About
          </Link>
          <Link to={"/login"} className="navLinkAdmin">
            Admin
          </Link>
        </div>
      </div>
      {searchedStudent === null ? (
        <></>
      ) : (
        <SearchStudent {...searchedStudent} />
      )}
    </div>
  );
};

export default Header;
