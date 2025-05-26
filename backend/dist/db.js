"use strict";
// import { userModel,creatorModel,businessModel};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageModel = exports.otpModel = exports.businessModel = exports.creatorModel = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Types } = mongoose_1.default; // Destructure Types for ObjectId
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
const messageSchema = new mongoose_1.default.Schema({
    roomId: { type: String, required: true },
    senderId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
const userModel = mongoose_1.default.model("users", userSchema);
exports.userModel = userModel;
const creatorModel = mongoose_1.default.model("creatorProfile", creatorProfileSchema);
exports.creatorModel = creatorModel;
const businessModel = mongoose_1.default.model("businessProfile", businessProfileSchema);
exports.businessModel = businessModel;
const otpModel = mongoose_1.default.model("otp", otpSchema);
exports.otpModel = otpModel;
const messageModel = mongoose_1.default.model("message", messageSchema);
exports.messageModel = messageModel;
