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
exports.deleteItem = exports.updateItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const item_service_1 = require("../services/item.service");
const error_handle_1 = require("../utils/error.handle");
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, item_service_1.getCar)(id);
        res.send(response ? response : "NOT FOUNT");
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEM');
    }
});
exports.getItem = getItem;
const getItems = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield (0, item_service_1.getCars)());
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEM');
    }
});
exports.getItems = getItems;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield (0, item_service_1.insertCar)(body));
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEM', e);
    }
});
exports.postItem = postItem;
const updateItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        res.send(yield (0, item_service_1.updateCar)(id, body));
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_ITEM', e);
    }
});
exports.updateItem = updateItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = params;
    res.send(yield (0, item_service_1.deleteCar)(id));
});
exports.deleteItem = deleteItem;
