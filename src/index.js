import express from "express"
import  dotenv from 'dotenv'
import dbconnect from "./db/db.js";
const app = express();
dbconnect()
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("app running");
    
})