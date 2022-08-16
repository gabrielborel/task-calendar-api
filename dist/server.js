"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
const $PORT = 3333;
dbConnect_1.default.on("error", console.log.bind(console, "Erro de conexão"));
dbConnect_1.default.once("open", () => {
    console.log("Connected with database.");
});
const app = (0, express_1.default)();
(0, routes_1.default)(app);
app.listen($PORT, () => console.log(`Server is running on port ${$PORT}.`));
