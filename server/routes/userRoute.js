import express from "express";
import { addNotes, AllNotes, deleteNote, editNote, searchNotes, updateNotePinned } from "../controllers/user.controller.js";
import { jwtAuthentication } from "../utils/jwtAuth.js";

const router = express.Router()

router.get("/all-notes",jwtAuthentication,AllNotes);
router.post("/add-note",jwtAuthentication,addNotes);
router.put("/edit-note/:noteId",jwtAuthentication,editNote);
router.delete("/delete-note/:noteId",jwtAuthentication,deleteNote);
router.put("/update-note-pinned/:noteId",jwtAuthentication,updateNotePinned);
router.get("/search-notes",jwtAuthentication,searchNotes);


export default router;