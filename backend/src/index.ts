import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user";
import mongoose from "mongoose";
import { creatorRouter } from "./routes/creatorProfile";
import cors from "cors";
import { businessRouter } from "./routes/businessProfile";
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/creator",creatorRouter);
app.use("/api/v1/business",businessRouter)
async function main(){
await mongoose.connect("mongodb+srv://ankitdevx1808:ankit2003@cluster0.wlxth.mongodb.net/collab_sphere");
console.log("database connected");
    app.listen(3000,()=>{
        console.log(process.env.JWT_user_password);
    });
}
main();
