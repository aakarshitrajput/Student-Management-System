const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecret = "csvdgfgnhfrdfs";
const cookieParser = require("cookie-parser");
var cors = require("cors");
require("dotenv").config();
const Student = require("./models/Student");
const { default: mongoose } = require("mongoose");

// express app
const app = express();

mongoose.connect(process.env.MONGODB_URL);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

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

// app.post("/create", async (req, res) => {
//   const { token } = req.cookies;
//   const { name, registration, course, branch, year, photo } = req.body;
//   try {
//     const studentDoc = await Student.create({
//       name,
//       registration,
//       course,
//       branch,
//       year,
//       photo,
//     });
//     res.json(studentDoc);
//   } catch (error) {
//     res.json(error);
//   }
// });

app.post("/create", (req, res) => {
  const { token } = req.cookies;
  const { name, registration, course, branch, year, photo } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, { admin }) => {
    if (err) throw err;
    const studentDoc = await Student.create({
      name,
      registration,
      course,
      branch,
      year,
      photo,
    });
    res.json(studentDoc);
  });
});

app.get("/students", async (req, res) => {
  res.json(await Student.find());
});

app.post("/search", async (req, res) => {
  const { search } = req.body;
  res.json(await Student.findOne({ search }));
});
