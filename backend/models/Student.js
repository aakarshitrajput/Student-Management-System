const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: String,
  registration: { type: Number, unique: true },
  course: String,
  branch: String,
  year: Number,
  photo: Object,
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
