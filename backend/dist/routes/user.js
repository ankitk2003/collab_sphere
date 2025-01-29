"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const JWT_user_password = "ankit123";
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, username, role } = req.body;
    try {
        const existingUser = yield db_1.userModel.findOne({
            email: email,
        });
        if (existingUser) {
            res.status(400).json({
                message: "user already exist",
            });
        }
        else {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield db_1.userModel.create({
                email,
                password: hashedPassword,
                username,
                role
            });
            res.json({
                message: "signed-up successfully",
            });
        }
    }
    catch (e) {
        console.log("error in adding data" + e);
    }
}));
//@ts-ignore
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield db_1.userModel.findOne({ email: email });
        if (!user) {
            return res.status(403).json({
                message: "Incorrect credentials",
            });
        }
        //@ts-ignore
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({
                message: "Incorrect credentials",
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
        }, JWT_user_password);
        res.json({
            token: token,
            userName: user.username,
            role: user.role,
        });
    }
    catch (e) {
        console.log("Error during signin: " + e);
        res.status(500).json({ message: "Internal server error" });
    }
}));
