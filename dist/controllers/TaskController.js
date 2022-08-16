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
const Task_1 = __importDefault(require("../models/Task"));
class TaskController {
    static listAllByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const tasks = yield Task_1.default.find({ user: userId });
            res.status(200).send({ tasks });
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTask = yield Task_1.default.create(req.body);
            newTask.save((err) => {
                if (err) {
                    res.status(500).send({ message: `Error on creating task - err ${err}` });
                }
            });
            res.status(201).send({ newTask });
        });
    }
    static remove(req, res) {
        const { id } = req.params;
        Task_1.default.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            }
            res.status(200).send({ message: "Task removed successfully" });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            Task_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    res.status(500).send({ err });
                }
                const task = yield Task_1.default.findById(id);
                res.status(200).send({ message: "Task updated successfully", task });
            }));
        });
    }
}
exports.default = TaskController;
