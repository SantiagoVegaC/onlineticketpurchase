import { Router } from "express";
import {
  getUserByData,
  registerUser,
} from "../controllers/user.controllers.js";
const router = Router();

router.post("/login", getUserByData);
router.post("/new_user", registerUser);

export default router;
