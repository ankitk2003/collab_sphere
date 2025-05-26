// import { userModel,creatorModel,businessModel};

import mongoose from "mongoose";
const { Schema, Types } = mongoose; // Destructure Types for ObjectId

const userSchema = new Schema({
  email: { type: String, required: true },
  password: String,
  username: String,
  role: String,
});

const creatorProfileSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "users", require: true }, // Reference to the user model
  username: String,
  bio: String,
  niche: String,
  platformName: String,
  platformLink: String,
  followerCount: Number,
  engagementRate: Number,
});

const businessProfileSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "users" },
  businessName: String,
  industry: String,
  websiteUrl: String,
  campaignGoals: String,
  targetAudience: [],
  budgetRange: String,
  posted: String,
});

const otpSchema = new Schema({
  email: { type: String, unique: true },
  otp: String,
  otpExpires: Date,
  hashedPassword: String,
  username: String,
  role: String,
  verified: { type: Boolean, default: false },
});

const messageSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
})

const userModel = mongoose.model("users", userSchema);
const creatorModel = mongoose.model("creatorProfile", creatorProfileSchema);
const businessModel = mongoose.model("businessProfile", businessProfileSchema);
const otpModel = mongoose.model("otp", otpSchema);
const messageModel=mongoose.model("message",messageSchema);
export { userModel, creatorModel, businessModel, otpModel ,messageModel };
