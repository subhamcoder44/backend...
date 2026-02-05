import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        maxlength:20,
        unique:true,
        

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true


    },
    fullName:{
        type:String,
        required:true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
        trim:true,

    },
    avatar:{
        type:String,
        required:true,

    },coverimage:{
        type:String,

    },
    refresToken:{
        type:String,

    },
   
    


},
 {
        timestamps:true
    }
)

userSchema.pre("save", async function (next)
{ if(!this.isModified ("password"))return next();
    this.password= await bcrypt.hash(this.password,10)
    next();
}) 
userSchema.methods.comparepassword=async function (password){
return await  bcrypt.compare(this.password)

}
userSchema.methods. generateAccessToken =function (){
jwt.sign({
    _id:this._id,
    email:this.email,
    userName:this.userName,
    fullName:this.fullName

},process.env.ACCESS_TOKEN_SECRET,
    process.env.ACCESS_TOKEN_EXPIRY
)

}

userSchema.methods.refresAccessToken= function(){
  jwt.sign({
    _id:this._id,
  

},process.env.REFRESH_TOKEN_SECRET,
    process.env.REFRESH_TOKEN_EXPIRY
)

  
}
export const User = mongoose.model("User", userSchema)