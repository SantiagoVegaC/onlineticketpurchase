import { Router } from "express";
import {
  getEvents,
  getEventById,
  getFeaturedEvents,
} from "../controllers/event.controllers.js";
const router = Router();

router.get("/events", getEvents);
router.get("/events/:id", getEventById);
router.get("/featuredevents", getFeaturedEvents);

export default router;
