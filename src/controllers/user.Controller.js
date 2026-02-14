import { asynchandeler } from "../utils/asynchandeller.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js";

const userRegister= asynchandeler(async (req,res)=>{
    const {email,password,userName,fullName}=req.body;
    
    
     if(!email || email.trim ==="",
        !password || password.trim ==="",
        !userName || userName.trim ==="",
        !fullName || fullName.trim ==="" ){
        throw new ApiError(400, "all feilds are required !");
        }

const user = await User.findOne($or[{userName}],{email});
if(user){
     throw new ApiError(409, "username and email already exits" );

}

     
});

export {userRegister}