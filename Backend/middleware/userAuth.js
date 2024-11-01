import jsonwebtoken from "jsonwebtoken";
import userModel from '../models/userModel.js';

export const UserAuth=async (req,res,next)=>{
  try {
    const cookies=req.cookies;

    const {token}=cookies;

    if(token){
      const decoded=jsonwebtoken.verify(token,"karan@1234");

      const {_id}= decoded;
      const user= await userModel.findById(_id);

      if(!user){
        throw new Error("user is not in db");
      }

      req.user=user;
        next();
    }
    else {
      res.status(401).send("Unauthorized request");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
}
