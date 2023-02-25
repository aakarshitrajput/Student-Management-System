import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Login.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const formSubmit = async (ev) => {
    ev.preventDefault();
    try {
      await axios.post("/admin", { username, password });
      alert("login successfull");
      setRedirect(true);
    } catch (error) {
      alert(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/add-student"} />;
  }

  return (
    <div>
      <Header />
      <div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <form className="loginContainer">
            <div className="login">Login</div>
            <div className="emailContainer">
              <div className="email">Email</div>
              <input
                className="emailPassword"
                placeholder="admin@email.com"
                type="text"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="passwordContainer">
              <div className="password">Password</div>
              <input
                className="emailPassword"
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="*******"
              />
            </div>
            <button onClick={formSubmit} className="loginButton">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
