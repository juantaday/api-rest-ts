"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StorageSchema = new mongoose_1.Schema({
    fileName: {
        type: String,
        requerid: true,
    },
    idUser: {
        type: String,
        requerid: true,
    },
    path: {
        type: String,
        requerid: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
const StorageModel = (0, mongoose_1.model)("storage", StorageSchema);
exports.default = StorageModel;
