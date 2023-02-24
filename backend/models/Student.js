const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: String,
  registration: { type: Number },
  course: String,
  branch: String,
  year: Number,
  photo: String,
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
