import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/databaseConnection.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();

const corsOptions = {
  origin:[process.env.FRONTEND_URL,"http://localhost:5173"],
  credentials: true,
};

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions)); 
app.use(cookieParser());

//Routes
app.use("/api/auth",authRoute);
app.use("/api",userRoute)

app.get("/", (req, res) => {
  res.send("server running");
});

const port = process.env.PORT || 5000;

dbConnection().then(()=>{
  app.listen(port, () => {
    console.log("server running on port 5000");
  });  
})