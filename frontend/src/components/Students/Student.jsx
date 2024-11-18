import React, { useEffect, useState } from "react";
import "./Student.css";

const Student = (data) => {
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
    <div className="studentCard">
      <div className="photoContainer">
        {data.photo?.data === undefined ? (
          <img
            src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
            alt="Profile Photo"
            className="profilePhoto"
          />
        ) : (
          <img
            src={`http://127.0.0.1:4000/${data.photo.data}`}
            alt="Profile Photo"
            className="profilePhoto"
          />
        )}
      </div>

      <div className="detailsContainer">
        <div className="detailItem">
          <strong>Name:</strong> <span>{data.name}</span>
        </div>
        <div className="detailItem">
          <strong>Registration Number:</strong> <span>{data.registration}</span>
        </div>
        <div className="detailItem">
          <strong>Course:</strong> <span>{data.branch}</span>
        </div>
        <div className="detailItem">
          <strong>Year:</strong> <span>{data.year}</span>
        </div>
      </div>
    </div>
  );
};

export default Student;
