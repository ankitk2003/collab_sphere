import { Router } from "express";
import { userModel } from "../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userRouter = Router();
const JWT_user_password = "ankit123";
userRouter.post("/signup", async (req, res) => {
  const { email, password, username,role} = req.body;

  try {
    const existingUser = await userModel.findOne({
      email: email,
    });
    if (existingUser) {
      res.status(400).json({
        message: "user already exist",
      });
    }

 else {
      const hashedPassword=await bcrypt.hash(password, 10);
      await userModel.create({
        email,
        password:hashedPassword,
       username,
        role
      });
      res.json({
        message: "signed-up successfully",
      });
    }
  } catch (e) {
    console.log("error in adding data" + e);
  }
});
//@ts-ignore
userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email: email });
  
      if (!user) {
        return res.status(403).json({
          message: "Incorrect credentials",
        });
      }
//@ts-ignore
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(403).json({
          message: "Incorrect credentials",
        });
      }
  
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_user_password
      );
  
      res.json({
        token: token,
        userName: user.username,
        role:user.role,
      });
    } catch (e) {
      console.log("Error during signin: " + e);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
export { userRouter };

