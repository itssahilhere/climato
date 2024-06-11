import { login } from "../Controllers/auth.js";
import { signUp, fetchLeaderboard,bookrecycle,cancelrecycle } from "../Controllers/user.js";
import auth from '../Middleware/auth.js';
import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/bookrecycle",auth, bookrecycle);
router.get("/getleaderboard", fetchLeaderboard);
router.patch("/cancelrecycle",auth, cancelrecycle);

export default router;
