import express from "express";
import {jwtAuthentication} from "../utils/jwtAuth.js";
import { getUser, login, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/get-user",jwtAuthentication,getUser);

export default router;