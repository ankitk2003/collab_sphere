// import { userModel,creatorModel,businessModel};

import mongoose from "mongoose";
const { Schema, Types } = mongoose; // Destructure Types for ObjectId

const userSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    firstname: String,
    lastname: String,
    role: String
});

const creatorProfileSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'users',require:true }, // Reference to the user model
    bio: String,
    niche: String,
    platformLinks: {}, 
    followerCount: Number, 
    engagementRate: Number
});

const businessProfileSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'users' },
    industry: String,
    websiteUrl: String,
    campaignGoals: String,
    targetAudience: {}, 
    budgetRange: String
});

const userModel = mongoose.model("users", userSchema);
const creatorModel = mongoose.model("creatorProfile", creatorProfileSchema);
const businessModel = mongoose.model("businessProfile", businessProfileSchema);

export { userModel, creatorModel, businessModel };
