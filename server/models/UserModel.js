import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  password: { String },
  createdAt: {
    type: Date,
    default: new Date().getTime(),
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
