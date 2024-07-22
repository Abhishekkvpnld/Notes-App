import express from "express";
import { addNotes } from "../controllers/user.controller.js";

const router = express.Router()


router.post("/add-notes",addNotes)

export default router;