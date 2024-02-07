import { Router } from "express";
import { getEvents, getEventById } from "../controllers/event.controllers.js";
const router = Router();

router.get("/events", getEvents);
router.get("/events/:id", getEventById);

export default router;
