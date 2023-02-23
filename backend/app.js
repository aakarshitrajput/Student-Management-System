const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecret = "csvdgfgnhfrdfs";
const cookieParser = require("cookie-parser");

// express app
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

// listen for requests
app.listen(4000);

app.get("/test", (req, res) => {
  res.json("this is a test");
});

app.post("/admin", (req, res) => {
  const { username, password } = req.body;
  try {
    if (username === "admin" && password === "admin") {
      const passOK = true;
      if (passOK) {
        jwt.sign(
          { username: username, password: password },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json("admin");
          }
        );
      }
    } else {
      res.status(422).json("invalid credentials");
    }
  } catch (error) {
    console.log(error);
  }
});
