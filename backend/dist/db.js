"use strict";
// import { userModel,creatorModel,businessModel};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessModel = exports.creatorModel = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Types } = mongoose_1.default; // Destructure Types for ObjectId
const userSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    username: String,
    role: String
});
const creatorProfileSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'users', require: true }, // Reference to the user model
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
    targetAudience: [],
    budgetRange: String
});
const userModel = mongoose_1.default.model("users", userSchema);
exports.userModel = userModel;
const creatorModel = mongoose_1.default.model("creatorProfile", creatorProfileSchema);
exports.creatorModel = creatorModel;
const businessModel = mongoose_1.default.model("businessProfile", businessProfileSchema);
exports.businessModel = businessModel;
