const { json } = require("express");
const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(4000);

app.get("/test", (req, res) => {
  res.json("this is a test");
});
