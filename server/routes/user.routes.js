import { Router} from 'express'
import {getUsers} from '../controllers/user.controllers.js'
const router = Router();

router.get("/", getUsers)
router.get("/users")
router.post("/users")


export default router