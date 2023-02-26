const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  registration: {
    type: Number,
    unique: true,
    required: [true, "Registration Number is required."],
  },
  course: {
    type: String,
    required: [true, "Course is required."],
  },
  branch: String,
  year: {
    type: Number,
    required: [true, "Year Number is required."],
  },
  photo: Object,
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
