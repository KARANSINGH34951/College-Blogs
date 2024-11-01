import express from "express"
const app= express();
import { connectDB } from './config/dbConfig.js';

const PORT= process.env.PORT || 5000;

app.get("/",(req,res)=>{
  res.json({message:"Welcome to the backend"})
})


connectDB()
.then(()=>{
  console.log("database connected..");
  app.listen(PORT,()=>{
    console.log("server running..");
    
  })  
}).catch(err=>{
  console.log("error occur: ",err);
})