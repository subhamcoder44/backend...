
import  dotenv from 'dotenv'
import dbconnect from "./db/db.js";
import {app} from './app.js'

dbconnect()

dotenv.config()
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("app running");
    
})