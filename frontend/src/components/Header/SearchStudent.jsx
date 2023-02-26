import React, { useEffect, useState } from "react";
import "./SearchStudent.css";

const SearchStudent = (data) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div style={{}}>
      <div className="studentContainer">
        <div className="photoContainer">
          {data.photo === undefined ? (
            <img
              src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
              alt="Profile Photo"
              style={{
                height: 150,
                width: 150,
                objectFit: "cover",
                zoom: 1.3,
              }}
            />
          ) : (
            <img
              src={"http://65.2.167.64/" + data.photo.data}
              alt="Profile Photo"
              style={{
                height: 150,
                width: 150,
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          )}
        </div>

        <div className="allPropertiesContainer">
          <div className="nameRegContainer">
            <div className="studentProperties">
              <div>Name : </div>
              <div style={{ marginLeft: 5 }}> {data.name}</div>
            </div>
            <div className="studentProperties">
              <div>Registration Number : </div>
              <div style={{ marginLeft: 5 }}> {data.registration}</div>
            </div>
          </div>
          <div className="courseYearContainer">
            <div className="studentProperties">
              <div>Course : </div>
              <div style={{ marginLeft: 5 }}>{data.branch}</div>
            </div>
            <div className="studentProperties">
              <div>Year : </div>
              <div style={{ marginLeft: 5 }}>{data.year}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 1,
          width: windowSize[0],
          backgroundColor: "gray",
          marginLeft: -30,
        }}
      ></div>
    </div>
  );
};

export default SearchStudent;
