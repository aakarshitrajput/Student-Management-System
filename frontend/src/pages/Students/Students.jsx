import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Student from "../../components/Students/Student";

const Students = () => {
  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    axios.get("/students").then(({ data }) => {
      setAllStudents(data);
    });
  }, []);
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
        All Students
      </div>

      <div style={{ marginRight: 20, marginLeft: 20, marginTop: 20 }}>
        {allStudents.map((student) => (
          <Student {...student} />
        ))}
      </div>
    </div>
  );
};

export default Students;
