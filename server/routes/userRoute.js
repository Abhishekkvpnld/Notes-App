import express from "express";
import { addNotes, AllNotes, editNote } from "../controllers/user.controller.js";
import { jwtAuthentication } from "../utils/jwtAuth.js";

const router = express.Router()

router.get("/all-notes",jwtAuthentication,AllNotes);
router.post("/add-note",jwtAuthentication,addNotes);
router.put("/edit-note/:noteId",jwtAuthentication,editNote);

export default router;