import { Router } from "express";
import { businessModel } from "../db";
import { userMiddleware } from "../middleware/usermiddleware";

const businessRouter = Router();

businessRouter.post("/profile",userMiddleware,async (req, res) => {
  const { industry, websiteUrl, campaignGoals, targetAudience, budgetRange } = req.body;
  //@ts-ignore
  const userId = req.userId;
  try {
    await businessModel.create({
      userId,
      industry,
      websiteUrl,
      campaignGoals,
      targetAudience, // array.
      budgetRange,
    });
    res.json({
        message:"profile updated sucessfully"
    })
  } catch (error) {
    console.log("error in adding data", error);
  }
});
export{businessRouter};