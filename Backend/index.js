import express from "express"
import cookieParser from 'cookie-parser';
const app= express();
import { connectDB } from './config/dbConfig.js';
import userRouter from './routes/userRoute.js';
import blogRoute from './routes/BlogRoute.js';
import profileRouter from './routes/profileRoute.js';

const PORT= process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

//route
app.use("/user",userRouter);
app.use("/blog",blogRoute);
app.use("/profile",profileRouter)

app.get("/",(req,res)=>{
  res.json({message:"Welcome to the backend"})
})

connectDB()
.then(()=>{
  console.log("database connected..");
  app.listen(PORT,()=>{
    console.log("server running..",PORT);
    
  })  
}).catch(err=>{
  console.log("error occur: ",err);
})