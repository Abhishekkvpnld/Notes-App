import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

//Register
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

    await user.save();

    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration successfull🎉🎉",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

//Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
console.log(email)
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    const userData = await User.findOne({ email: email });
    if (!userData) throw new Error("User not found");

    const checkPassword = await bcrypt.compare(password, userData?.password);
    if (!checkPassword) throw new Error("Please check password");

    const { password: userPassword, ...user } = userData.toObject();

    const accessToken = jwt.sign({ user }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "24h",
    });

    const cookieConfig = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
    };

    return res
      .cookie("NoteCookieToken", accessToken, cookieConfig)
      .status(200)
      .json({
        success: true,
        error: false,
        message: "Login successful✅",
        data: { user, token: accessToken },
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { user } = req.user;

    const isUser = await User.findById(user._id);
    if (!isUser) throw new Error("User not found");

    return res.status(200).json({
      user: {
        _id: isUser._id,
        username: isUser.username,
        email: isUser.email,
        createdAt: isUser.createdAt,
      },
      message: "user info",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
