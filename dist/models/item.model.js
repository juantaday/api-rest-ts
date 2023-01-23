"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    gas: {
        type: String,
        required: true,
        enum: ['gasoline', 'electric'],
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
});
const ItemModel = (0, mongoose_1.model)("Items", ItemSchema);
exports.default = ItemModel;
