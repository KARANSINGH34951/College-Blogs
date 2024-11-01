import express from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken"
import userModel from '../models/userModel.js';
const userRouter=express.Router();

userRouter.post("/signup",async (req,res)=>{
  try {
    const {name,email,password,bio}=req.body;

    const hashedpassword=await bcrypt.hash(password,8);

    const user=new userModel({
      name,
      email,
      password:hashedpassword,
      bio
    })

    const saveduser=await user.save();
    res.send(saveduser);
  } catch (error) {
    res.status(402).send({message:"Not Found !"})
  }
})

userRouter.post("/login",async (req,res)=>{
  try {
    
    const {email,password}=req.body;
    const user= await userModel.findOne({email})

    if(user){
      const comparepassword=await bcrypt.compare(password,user.password);

      if(comparepassword){

        const token=jsonwebtoken.sign({
          _id:user._id,
          email:user.email
        },"karan@1234",{expiresIn:"2h"});

        res.cookie("token",token);
        res.send(token)
      }
    }
  } catch (error) {
    res.status(401).send("Unauthorized request");
  }
})

userRouter.get("/logout",(req,res)=>{
  res.clearCookie("token");
  res.send("logout")
})

export default userRouter;