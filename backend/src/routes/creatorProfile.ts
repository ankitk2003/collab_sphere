import { Router } from "express";
import { creatorModel, userModel } from "../db";
import { userMiddleware } from "../middleware/usermiddleware";

const creatorRouter = Router();
creatorRouter.post("/profile", userMiddleware, async (req, res) => {
  const {
    niche,
    username,
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
    username,
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

creatorRouter.get("/all-profiles", async (req, res) => {
  try {
    const allProfiles = await creatorModel.find();
    res.json({
      profiles: allProfiles,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profiles", error });
  }
});


creatorRouter.get("/user-data", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const userData = await userModel.findOne({
    _id: userId,
  });
  if (!userData) {
    res.json({
      message: "user not found",
    });
  }
  else{
    res.json({
      userData
    })
  }
});

export { creatorRouter };
