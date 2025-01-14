import mongoose from "mongoose";
const { Schema } = mongoose;
import  ObjectId  from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    firstname: String,
    lastname: String,
    role:String
});

const creatorProfileSchema=new Schema({
    userId:ObjectId,
    bio:String,
    niche:String,
    platformLinks:{},String,
    follwerCount:Number,
    engagementRate:Number
})

const businessProfileSchema=new Schema({
    userId:ObjectId,
    industry:String,
    websiteUrl:String,
    campaignGoals:String,
    targetAudience:{},
    budgetRange:String
})

const userModel = mongoose.model("users", userSchema);
const creatorModel=mongoose.model("creatorProfile",creatorProfileSchema);
const businessModel=mongoose.model("businessProfile",businessProfileSchema);
export { userModel,creatorModel,businessModel};
