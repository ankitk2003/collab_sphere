import { Router } from "express";
import { userModel } from "../db";
import jwt from "jsonwebtoken";

const userRouter = Router();
const JWT_user_password = "ankit123";
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  try {
    const existingUser = await userModel.findOne({
      email: email,
    });
    if (existingUser) {
      res.status(400).json({
        message: "user already exist",
      });
    } else {
      await userModel.create({
        email,
        password,
        firstname,
        lastname,
      });
      res.json({
        message: "signed-up successfully",
      });
    }
  } catch (e) {
    console.log("error in adding data" + e);
  }
});

userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      // return either the user or undefined
      email: email,
      password: password,
    });
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_user_password
      );
      res.json({
        token: token,
        userName:user.firstname
      });
    } else {
      res.status(403).json({
        mesaage: "incorrect credentials",
      });
    }
});
export { userRouter };
