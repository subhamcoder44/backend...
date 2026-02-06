import { asynchandeler } from "../utils/asynchandeller.js";
const userRegister= asynchandeler(async (req,res)=>{
    res.status(200).json({
        message: "ok"
    })
})
export {userRegister}