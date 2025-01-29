import { Router } from "express";
import { creatorModel, userModel } from "../db";
import { userMiddleware } from "../middleware/usermiddleware";

const creatorRouter = Router();
creatorRouter.post("/profile", userMiddleware, async (req, res) => {
  const {
    niche,
    bio,
    platformLink,
    platformName,
    followerCount,
    engagementRate,
  } = req.body;
  //@ts-ignore
  const userId = req.userId;
  await creatorModel.create({
    userId: userId,
    niche,
    bio,
    platformName,
    platformLink,
    followerCount,
    engagementRate,
  });
  res.json({
    message: "profile created successfully",
  });
});

creatorRouter.get("/profile", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;

  const foundUser = await creatorModel.findOne({
    userId,
  });
  if (!foundUser) {
    res.json({
      message: "complete your profile first",
    });
  } else {
    res.json({
      foundUser,
    });
  }
});

creatorRouter.get("/get-name", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const username = await userModel.findOne({
    _id: userId,
  });
  if (!username) {
    res.json({
      message: "user not found",
    });
  }
  else{
    res.json({
      username
    })
  }
});

export { creatorRouter };
