import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    account_type: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      default: "Student",
    },
    active: {
      type: String,
      default: true,
    },
    additional_details: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Profile",
    },
    courses_enrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "Courses",
      },
    ],
    token: {
      type: String,
    },
    courseProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseProgress",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
