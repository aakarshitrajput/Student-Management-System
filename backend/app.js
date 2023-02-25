const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecret = "csvdgfgnhfrdfs";
const cookieParser = require("cookie-parser");
var cors = require("cors");
require("dotenv").config();
const Student = require("./models/Student");
const { default: mongoose } = require("mongoose");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

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

// app.post("/admin", (req, res) => {
//   const { username, password } = req.body;
//   try {
//     if (username === "admin" && password === "admin") {
//       const passOK = true;
//       if (passOK) {
//         jwt.sign(
//           { username: username, password: password },
//           jwtSecret,
//           {},
//           (err, token) => {
//             if (err) throw err;
//             res.cookie("token", token).json("admin");
//           }
//         );
//       }
//     } else {
//       res.status(422).json("invalid credentials");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

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

app.post("/search-name", async (req, res) => {
  const Search = req.body[0];
  // res.json(Search);
  res.json(await Student.find({ name: new RegExp(Search, "i") }));
});

app.use("/Photos", express.static(__dirname + "/Photos"));
const photosMiddleware = multer({ dest: "Photos/" });
app.post("/uploadphoto", photosMiddleware.single("photos"), (req, res) => {
  const path = req.file.path;
  const originalname = req.file.originalname;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  res.json(newPath);
});
