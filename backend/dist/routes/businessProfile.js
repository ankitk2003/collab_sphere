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
exports.businessRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const usermiddleware_1 = require("../middleware/usermiddleware");
const businessRouter = (0, express_1.Router)();
exports.businessRouter = businessRouter;
businessRouter.post("/profile", usermiddleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { industry, websiteUrl, campaignGoals, targetAudience, budgetRange, businessName } = req.body;
    //@ts-ignore
    const userId = req.userId;
    try {
        yield db_1.businessModel.create({
            businessName,
            userId,
            industry,
            websiteUrl,
            campaignGoals,
            targetAudience, // array.
            budgetRange,
            posted: new Date().toLocaleDateString('en-GB') // Formats as DD/MM/YYYY
        });
        res.json({
            message: "profile updated sucessfully"
        });
    }
    catch (error) {
        console.log("error in adding data", error);
    }
}));
businessRouter.get("/profile", usermiddleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const foundUser = yield db_1.businessModel.findOne({
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
businessRouter.get("/all-business", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessProfiles = yield db_1.businessModel.find(); // Await the DB query
        res.json({ businessProfiles });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
}));
businessRouter.get("/get-name", usermiddleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const user = yield db_1.businessModel.findOne({
        userId: userId,
    });
    if (!user) {
        res.json({
            message: "user not found",
        });
    }
    else {
        // console.log("Fetched user:", user);
        res.json({
            businessName: user.businessName
        });
    }
}));
