import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email) throw new Error("Email is required");
    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    const checkUserExist = await User.findOne({ email });

    if (checkUserExist) throw new Error("User already exist❌");

    const encryptPassword = await bcrypt.hash(password, 10);

    const user = await User({
      username,
      email,
      password: encryptPassword,
    });

    const userData = await user.save();

    const accessToken = jwt.sign({userData}, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "2h",
    });

    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration successfull🎉🎉",
      data: { userData: userData, token: accessToken }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
