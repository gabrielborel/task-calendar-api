"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TagController_1 = __importDefault(require("../controllers/TagController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .get("/tags/:userId", TagController_1.default.listAllByUserId)
    .post("/tags", TagController_1.default.create)
    .delete("/tags/:id", TagController_1.default.remove)
    .put("/tags/:id", TagController_1.default.update);
exports.default = router;
