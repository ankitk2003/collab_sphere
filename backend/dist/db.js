"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    firstname: String,
    lastname: String,
});
const userModel = mongoose_1.default.model("users", userSchema);
exports.userModel = userModel;
