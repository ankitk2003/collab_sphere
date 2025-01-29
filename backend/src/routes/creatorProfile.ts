import { Router } from "express";
import { creatorModel } from "../db";
import { userMiddleware } from "../middleware/usermiddleware";

const creatorRouter = Router();
creatorRouter.post("/profile",userMiddleware,async (req, res) => {
  const {niche,bio, platformLink, platformName,followerCount, engagementRate } = req.body;
  //@ts-ignore
  const userId=req.userId;
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

creatorRouter.get("/profile", async (req, res) => {
  const { id } = req.body;
  const foundUser = creatorModel.findOne({
    id,
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

export{creatorRouter}