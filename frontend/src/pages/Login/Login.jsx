import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const formSubmit = (ev) => {
    ev.preventDefault();
    console.log(username);
    console.log(password);
  };

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
                className="input"
                placeholder="admin@email.com"
                type="text"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="passwordContainer">
              <div className="password">Password</div>
              <input
                className="input"
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
