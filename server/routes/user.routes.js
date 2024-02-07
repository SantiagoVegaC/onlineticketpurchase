import { Router } from "express";
import { getUsers, registerUser } from "../controllers/user.controllers.js";
const router = Router();

router.get("/login", getUsers);
router.post("/new_user", registerUser);

export default router;
