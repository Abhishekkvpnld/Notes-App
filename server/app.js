import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/databaseConnection.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin:"*"}))

app.get("/", (req, res) => {
  res.send("server running");
});

const port = process.env.PORT || 5000;

dbConnection().then(()=>{
  app.listen(port, () => {
    console.log("server running on port 5000");
  });  
})