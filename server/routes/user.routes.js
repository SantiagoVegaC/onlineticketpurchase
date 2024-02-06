import { Router} from 'express'
import {getUsers, registerUser} from '../controllers/user.controllers.js'
const router = Router();

router.get("/users", getUsers);
router.get("/new_user", registerUser);


export default router;