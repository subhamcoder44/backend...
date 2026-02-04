import mongoose from 'mongoose'
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
export const User = mongoose.model("User", userSchema)