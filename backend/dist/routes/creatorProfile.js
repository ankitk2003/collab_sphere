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
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatorRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const usermiddleware_1 = require("../middleware/usermiddleware");
const creatorRouter = (0, express_1.Router)();
exports.creatorRouter = creatorRouter;
creatorRouter.post("/profile", usermiddleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { niche, bio, platformLink, platformName, followerCount, engagementRate, } = req.body;
    //@ts-ignore
    const userId = req.userId;
    yield db_1.creatorModel.create({
        userId: userId,
        niche,
        bio,
        platformName,
        platformLink,
        followerCount,
        engagementRate,
    });
    res.json({
        message: "profile created successfully",
    });
}));
creatorRouter.get("/profile", usermiddleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const foundUser = yield db_1.creatorModel.findOne({
        userId,
    });
    if (!foundUser) {
        res.json({
            message: "complete your profile first",
        });
    }
    else {
        res.json({
            foundUser,
        });
    }
}));
creatorRouter.get("/get-name", usermiddleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const username = yield db_1.userModel.findOne({
        _id: userId,
    });
    if (!username) {
        res.json({
            message: "user not found",
        });
    }
    else {
        res.json({
            username
        });
    }
}));
