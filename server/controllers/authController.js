import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    if (!(first_name && last_name && email && password)) {
      return res.status(403).json({
        success: false,
        message: "Please provide all the infos",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "Please proceed to sign in as you have already registered!",
      });
    }
    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
    });
    newUser.save();
    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Internal Server Error!!",
    });
  }
};
