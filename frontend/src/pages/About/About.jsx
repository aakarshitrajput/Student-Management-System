import React from "react";
import Header from "../../components/Header/Header";

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
        }}
      >
        This is a student management system. It is a full stack web application
        built with React, Node, Express, and MongoDB. It is a simple application
        that allows you to add and delete students. It also allows you to search
        for students by their name and registration number.
      </div>
    </div>
  );
};

export default About;
