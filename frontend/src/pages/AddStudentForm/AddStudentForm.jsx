import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./AddStudentForm.css";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [photo, setPhoto] = useState("");

  const nameHandler = (ev) => {
    setName(ev.target.value);
  };

  const registrationHandler = (ev) => {
    setRegistration(ev.target.value);
  };

  const courseHandler = (ev) => {
    setCourse(ev.target.value);
  };

  const branchHandler = (ev) => {
    setBranch(ev.target.value);
  };

  const yearHandler = (ev) => {
    setYear(ev.target.value);
  };

  const photoHandler = (ev) => {
    setPhoto(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const data = {
      name,
      registration,
      course,
      branch,
      year,
      photo,
    };
    console.log(data);
    axios.post("/create", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: 30,
          fontSize: 36,
          fontFamily: "roboto",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Add Student
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <form className="form">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label className="label">Full Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={nameHandler}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label className="label">Registration Number</label>
            <input
              type="number"
              className="input"
              value={registration}
              onChange={registrationHandler}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Course</label>
            <input
              type="text"
              className="input"
              value={course}
              onChange={courseHandler}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Branch</label>
            <input
              type="text"
              className="input"
              value={branch}
              onChange={branchHandler}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Year</label>
            <input
              type="number"
              className="input"
              value={year}
              onChange={yearHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
              marginBottom: 20,
              justifyContent: "center",
            }}
          >
            <label
              style={{ fontFamily: "roboto", marginRight: 10, fontSize: 18 }}
            >
              Add Photo
            </label>
            <button className="browseButton">Browse</button>
          </div>
          <div>
            <button className="submitButton" onClick={submitHandler}>
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
