import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    CourseName: { type: String },
    courseImage: { type: URL },
    courseDescription: { type: String },
    coursePrice: { type: Number },
});

const viewModel = mongoose.model("Courses", CourseSchema);

module.exports = viewModel;