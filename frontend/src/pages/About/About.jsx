import React from "react";
import Header from "../../components/Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: "roboto",
          textAlign: "center",
          width: "100%",
          fontSize: 36,
          marginTop: 60,
        }}
      >
        About
      </div>
      <div
        style={{
          fontFamily: "roboto",
          textAlign: "left",
          fontSize: 26,
          marginTop: 40,
          marginRight: 60,
          marginLeft: 60,
          letterSpacing: 1,
          lineHeight: 1.5,
        }}
      >
        This is a student management system. It is a full stack web application
        built with React, Node, Express, and MongoDB. It is a simple application
        that allows you to add and delete students. It also allows you to search
        for students by their name and registration number.
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <button className="githubButton">
          <a
            className="githubLink"
            href="https://github.com/aakarshitrajput/Student-Management-System.git"
          >
            Github Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
