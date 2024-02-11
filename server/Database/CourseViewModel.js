import mongoose from "mongoose";

const schema = mongoose.Schema;

const CourseViewedSchema = new schema({
    purchasedUser_id: { type: mongoose.Types.ObjectId, required: true },
    course_id: { type: mongoose.Types.ObjectId, required: true },
    isViewed: { type: String, default: "false" },
    isPurchased: { type: String, default: "false" }
});

const CourseViewedModel = mongoose.model('CoursesViewed', CourseViewedSchema);

module.exports = CourseViewedModel;