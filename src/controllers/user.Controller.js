import { asynchandeler } from "../utils/asynchandeller.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/Apiresponce.js"
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudnary.js"

const userRegister= asynchandeler(async (req,res)=>{
    const {email,password,userName,fullName}=req.body;
    
    
     if(!email || email.trim() === "" ||
        !password || password.trim() === "" ||
        !userName || userName.trim() === "" ||
        !fullName || fullName.trim() === "" ){
        throw new ApiError(400, "all fields are required !");
        }

const user = await User.findOne({$or: [{userName}, {email}]});
if(user){
     throw new ApiError(409, "username and email already exits" );

}
 const avatarLocalPath = req.files?.avatar[0]?.path;
  let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
     if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }
    
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    let coverImage;
    if (coverImageLocalPath) {
        coverImage = await uploadOnCloudinary(coverImageLocalPath)
    }
    if(!avatar){kkk
     throw new ApiError(500,"avatar missing")
    }
    const createuser= await User.create ({
     fullName,
     password,
     email,
     avatar:avatar.url,
      coverImage: coverImage?.url || "",
        userName: userName.toLowerCase()
    })
      const createdUser = await User.findById(createuser._id).select(
        "-password -refreshToken"
    )
      if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

});
 const loginUser= asynchandeler(async (req,res)=>{
    let {email, password}=req.body;
    if(!email || !password){
        throw new ApiError(400,"all fields are required")
    }
    const user= await User.findOne({email});
    if(!user){
        throw new ApiError(404,"user not found")
    }
    const isPasswordValid= await user.comparepassword(password);
    if(!isPasswordValid){
        throw new ApiError(401,"invalid password")
    }
    const accessToken= user.generateAccessToken();
    const refreshToken= user.refresAccessToken();
    return res.status(200).json(
        new ApiResponse(200, {accessToken,refreshToken}, "User logged in Successfully")
    )
})  

export {
  userRegister,
  loginUser

}