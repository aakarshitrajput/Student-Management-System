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
  const [photo, setPhoto] = useState([]);

  const nameHandler = (ev) => {
    setName(ev.target.value);
    console.log(name);
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

  const submitHandler = async (ev) => {
    ev.preventDefault();
    const data = {
      name,
      registration,
      course,
      branch,
      year,
      photo,
    };

    try {
      (await axios
        .post("/create", data)
        .then(alert("Student Created Successfully"))) &&
        setName(" ") &&
        setRegistration(" ") &&
        setCourse(" ") &&
        setBranch(" ") &&
        setYear(" ") &&
        window.location.reload(false);
    } catch (error) {
      alert("You have to be logged in as Admin to Create a Student");
    }
  };

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/uploadphoto", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data } = response;
        console.log({ data });
        setPhoto({ data });
      });
  }

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
              className="inputup"
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
              className="inputup"
              value={registration}
              onChange={registrationHandler}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Course</label>
            <input
              type="text"
              className="inputup"
              value={course}
              onChange={courseHandler}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Branch</label>
            <input
              type="text"
              className="inputup"
              value={branch}
              onChange={branchHandler}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Year</label>
            <input
              type="number"
              className="inputup"
              value={year}
              onChange={yearHandler}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              alignItems: "center",
              marginBottom: 20,
              justifyContent: "center",
            }}
          >
            <label
              style={{
                fontFamily: "roboto",
                marginRight: 10,
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              <input type="file" className="hidden" onChange={uploadPhoto} />
              Add Photo
            </label>
            {photo.data === undefined ? null : (
              <img
                src={"http://127.0.0.1:4000/" + photo.data}
                style={{
                  height: 250,
                  width: 250,
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
          <button className="submitButton" onClick={submitHandler}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
