"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .get("/tasks/:userId", TaskController_1.default.listAllByUserId)
    .post("/tasks", TaskController_1.default.create)
    .put("/tasks/:id", TaskController_1.default.update)
    .delete("/tasks/:id", TaskController_1.default.remove);
exports.default = router;
