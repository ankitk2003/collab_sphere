import  Router  from "express";
import { userModel } from "../db";
const userRouter=Router();

userRouter.post("/signup",async(req,res)=>{
    const{email,password,firstname,lastname}=req.body;
    await userModel.create({
        email,
        password,
        firstname,
        lastname
    })
    res.json({
        message:"this is signup endpoint"
    })
})
userRouter.get("/signin",(req,res)=>{
    res.json({
        message:"this is signin endpoint"
    })
})
export { userRouter };
