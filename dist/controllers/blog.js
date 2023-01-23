"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
const getItem = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_BLOG');
    }
};
exports.getItem = getItem;
const getItems = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_BLOG');
    }
};
exports.getItems = getItems;
const postItem = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_BLOG');
    }
};
exports.postItem = postItem;
const updateItem = (red, res) => {
};
exports.updateItem = updateItem;
const deleteItem = (red, res) => {
};
exports.deleteItem = deleteItem;
