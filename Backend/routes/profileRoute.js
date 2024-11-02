import express from "express";
import { UserAuth } from '../middleware/userAuth.js';

const profileRouter=express.Router();

profileRouter.get("/",UserAuth,(req,res)=>{
  res.send(req.user);
})

export default profileRouter;