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
const originUrl = process.env.ORIGIN_URL;
const adminUser = process.env.ADMIN_USER;
const adminPass = process.env.ADMIN_PASS;

// express app
const app = express();

// connect to mongodb
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log("Connected to MongoDB..."));

//middleware
app.use(express.json());
app.use(cookieParser());

// for development
// app.use(cors({ credentials: true, origin: "http://127.0.0.1:4000" }));

// for production
app.use(cors({ credentials: true, origin: originUrl }));

// listen for requests
app.listen(4000);

app.get("/test", (req, res) => {
  res.json("this is a test");
});

app.get("/base", (req, res) => {
  const base = { originUrl };
  res.json(base);
});

// login admin
app.post("/admin", (req, res) => {
  const { username, password } = req.body;
  try {
    if (username === adminUser && password === adminPass) {
      const passOK = true;
      if (passOK) {
        jwt.sign(
          { username: username, password: password },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res
              .cookie("token", token, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                maxAge: 24 * 60 * 60 * 1000,
              })
              .json("admin");
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

//create student
app.post("/create", async (req, res) => {
  const { token } = req.cookies;
  const { name, registration, course, branch, year, photo } = req.body;
  const verifyUser = token ? jwt.verify(token, jwtSecret) : [];
  if (verifyUser.username === adminUser && verifyUser.password === adminPass) {
    try {
      const studentDoc = await Student.create({
        name,
        registration,
        course,
        branch,
        year,
        photo,
      });
      res.json(studentDoc);
    } catch (error) {
      res.json(error);
    }
  } else {
    res
      .status(422)
      .json("You have to be logged in as Admin to Create a Student");
  }
});

app.get("/students", async (req, res) => {
  res.json(await Student.find());
});

app.post("/search-name", async (req, res) => {
  const Search = req.body[0];
  // res.json(Search);
  res.json(await Student.find({ name: new RegExp(Search, "i") }));
});

app.post("/search-registration", async (req, res) => {
  let Search = req.body[0];
  Search = Number(Search);
  res.json(await Student.findOne({ registration: Search }));
});

app.use("/photos", express.static(__dirname + "/photos"));
const photosMiddleware = multer({ dest: "photos/" });
app.post("/uploadphoto", photosMiddleware.single("photos"), (req, res) => {
  const path = req.file.path;
  const originalname = req.file.originalname;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  res.json(newPath);
});
