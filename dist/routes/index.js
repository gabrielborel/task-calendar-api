"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("../routes/UserRoutes"));
const TagRoutes_1 = __importDefault(require("../routes/TagRoutes"));
const TaskRoutes_1 = __importDefault(require("../routes/TaskRoutes"));
const cors_1 = __importDefault(require("cors"));
const router = (app) => {
    app.use((0, cors_1.default)(), express_1.default.json(), UserRoutes_1.default, TagRoutes_1.default, TaskRoutes_1.default);
};
exports.default = router;
