import { Router } from "express";
import {userRegister} from '../controllers/user.Controller.js'
import {upload} from "../middleware/multer.middleware.js"
const router = Router();
router.route("/register").post(
    upload.fields([{
        name:"avtar",
        maxCount: 1
    },
    {
        name:"coverimage",
        maxCount:1
    }]),
    
    userRegister)



export default router