"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "d361cfdrtgweewr4ew467";
const generateToken = (id) => {
    return (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, { expiresIn: "2h" });
};
exports.generateToken = generateToken;
const verifyToken = (jwt) => {
    return (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
};
exports.verifyToken = verifyToken;
