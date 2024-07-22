import express from "express";
import { addNotes } from "../controllers/user.controller.js";
import { jwtAuthentication } from "../utils/jwtAuth.js";

const router = express.Router()


router.post("/add-note",jwtAuthentication,addNotes)

export default router;