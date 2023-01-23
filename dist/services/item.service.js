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
exports.deleteCar = exports.updateCar = exports.getCar = exports.getCars = exports.insertCar = void 0;
const item_model_1 = __importDefault(require("../models/item.model"));
const insertCar = (item) => __awaiter(void 0, void 0, void 0, function* () {
    return yield item_model_1.default.create(item);
});
exports.insertCar = insertCar;
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield item_model_1.default.find({});
});
exports.getCars = getCars;
const getCar = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield item_model_1.default.findOne({ _id });
});
exports.getCar = getCar;
const updateCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield item_model_1.default.findOneAndUpdate({ _id: id }, data, { new: true });
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield item_model_1.default.findOneAndRemove({ _id: id });
});
exports.deleteCar = deleteCar;
