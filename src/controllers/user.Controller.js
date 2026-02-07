import { asynchandeler } from "../utils/asynchandeller.js";
import {ApiError} from "../utils/ApiError.js"
const userRegister= asynchandeler(async (req,res)=>{
    const {email,password,userName,fullName}=req.body;
     if(!email || email.trim ==="",
        !password || password.trim ==="",
        !userName || userName.trim ==="",
        !fullName || fullName.trim ==="" ){
        throw new ApiError(400, "all feilds are required !");
        }

     
})
export {userRegister}