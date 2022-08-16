"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
mongoose_1.default.connect(process.env.MONGO_DB_CONNECT);
const database = mongoose_1.default.connection;
exports.default = database;
