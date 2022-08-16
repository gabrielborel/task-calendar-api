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
const Tag_1 = __importDefault(require("../models/Tag"));
class TagController {
    static listAllByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const tags = yield Tag_1.default.find({ user: userId });
            res.status(200).send({ tags });
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, color, userId } = req.body;
            const newTag = yield Tag_1.default.create({ user: userId, name, color });
            newTag.save((err) => {
                if (err) {
                    res.status(500).send({ err });
                }
            });
            res.status(201).send({ newTag });
        });
    }
    static remove(req, res) {
        const { id } = req.params;
        Tag_1.default.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            }
            res.status(200).send({ message: "Tag removed successfully" });
        });
    }
    static update(req, res) {
        const { id } = req.params;
        const { name, color } = req.body;
        Tag_1.default.findByIdAndUpdate(id, { $set: { name, color } }, (err) => {
            if (err) {
                res.status(500).send({ err });
            }
            res.status(200).send({ message: "Tag updated successfully" });
        });
    }
}
exports.default = TagController;
