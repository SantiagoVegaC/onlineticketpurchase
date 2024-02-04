import { Router} from 'express'
import {getEvents} from '../controllers/event.controllers.js'
const router = Router();

router.get("/", getEvents)
router.get("/users")
router.post("/users")


export default router