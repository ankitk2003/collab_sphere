import { userModel,creatorModel,businessModel};

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

const userModel = mongoose.model("users", userSchema);
const creatorModel = mongoose.model("creatorProfile", creatorProfileSchema);
const businessModel = mongoose.model("businessProfile", businessProfileSchema);

export { userModel, creatorModel, businessModel };
