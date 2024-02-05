import { Router} from 'express'
import {getEvents, getEventById} from '../controllers/event.controllers.js'
const router = Router();

router.get("/", getEvents)
router.get("/events")
router.get("/events/:id", getEventById)


export default router