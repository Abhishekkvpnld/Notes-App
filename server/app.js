import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("server running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server running on port 5000");
});
