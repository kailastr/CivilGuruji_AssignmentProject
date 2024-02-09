import mongoose from "mongoose";

const schema = mongoose.Schema;

const CourseViewedSchema = new schema({
    user_id: { type: mongoose.Types.ObjectId, required: true },
    course_id: { type: mongoose.Types.ObjectId, required: true },
    isPurchased: { type: Boolean },
    viewCount: { type: Number, default: 1 }
});

const CourseViewedModel = mongoose.model('CoursesViewed', CourseViewedSchema);

module.exports = CourseViewedModel;