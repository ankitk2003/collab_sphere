"use strict";
// import mongoose from "mongoose";
// const { Schema } = mongoose;
// import  ObjectId  from "mongoose";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessModel = exports.creatorModel = exports.userModel = void 0;
// const userSchema = new Schema({
//     email: { type: String, required: true },
//     password: String,
//     firstname: String,
//     lastname: String,
//     role:String
// });
// const creatorProfileSchema=new Schema({
//     userId:ObjectId,
//     bio:String,
//     niche:String,
//     platformLinks:{},String,
//     follwerCount:Number,
//     engagementRate:Number
// })
// const businessProfileSchema=new Schema({
//     userId:ObjectId,
//     industry:String,
//     websiteUrl:String,
//     campaignGoals:String,
//     targetAudience:{},
//     budgetRange:String
// })
// const userModel = mongoose.model("users", userSchema);
// const creatorModel=mongoose.model("creatorProfile",creatorProfileSchema);
// const businessModel=mongoose.model("businessProfile",businessProfileSchema);
// export { userModel,creatorModel,businessModel};
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Types } = mongoose_1.default; // Destructure Types for ObjectId
const userSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    firstname: String,
    lastname: String,
    role: String
});
const creatorProfileSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'users' }, // Reference to the user model
    bio: String,
    niche: String,
    platformLinks: {}, // This remains an empty object; ensure proper structure
    followerCount: Number, // Fixed typo in "follwerCount"
    engagementRate: Number
});
const businessProfileSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'users' }, // Reference to the user model
    industry: String,
    websiteUrl: String,
    campaignGoals: String,
    targetAudience: {}, // Ensure proper structure for the object
    budgetRange: String
});
const userModel = mongoose_1.default.model("users", userSchema);
exports.userModel = userModel;
const creatorModel = mongoose_1.default.model("creatorProfile", creatorProfileSchema);
exports.creatorModel = creatorModel;
const businessModel = mongoose_1.default.model("businessProfile", businessProfileSchema);
exports.businessModel = businessModel;
