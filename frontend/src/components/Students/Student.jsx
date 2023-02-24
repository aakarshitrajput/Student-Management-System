import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Student = (data) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <FaUserAlt />
      <div>
        <div style={{ display: "flex" }}>
          <div>Name : </div>
          <div> {data.name}</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Registration Number : </div>
          <div>{data.registration}</div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>Course : </div>
          <div>{data.branch}</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Year : </div>
          <div>{data.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Student;
