import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user";
import mongoose from "mongoose";
dotenv.config();
const app=express();
app.use(express.json());
app.use("/api/v1/user", userRouter);

async function main(){
await mongoose.connect("mongodb+srv://ankitdevx1808:ankit2003@cluster0.wlxth.mongodb.net/collab_sphere");
console.log("database connected");
    app.listen(3000,()=>{
        console.log(process.env.JWT_user_password);
    });
}
main();
