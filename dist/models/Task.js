"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String },
    duration: { type: String },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tags: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Tag",
        },
    ],
    completed: { type: Boolean, default: false },
});
const Task = mongoose_1.default.model("Task", taskSchema);
exports.default = Task;
