import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import axios from "axios";
import Student from "../../components/Students/Student";

const Home = () => {
  const [SearchedStudent, setSearchedStudent] = useState([]);
  const [Search, setSearch] = useState("");
  // axios.post("/search", { SearchedStudent }).then(({ data }) => {
  //   setSearchedStudent(data);
  // });

  const search = async (e) => {
    setSearch(e.target.value);
    console.log([e.target.value]);
    axios.post("/search-name", [e.target.value]).then(({ data }) => {
      console.log(data);
      setSearchedStudent(data);
      console.log(SearchedStudent);
    });
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15vh",
          flexDirection: "column",
        }}
      >
        <label className="search">Search </label>
        <input
          type="text"
          className="searchBox"
          placeholder="Student Name"
          onChange={search}
          value={Search}
        />
      </div>
      <div style={{ marginRight: 20, marginLeft: 20, marginTop: 20 }}>
        {SearchedStudent.map((student) => (
          <Student {...student} />
        ))}
      </div>
    </div>
  );
};

export default Home;
