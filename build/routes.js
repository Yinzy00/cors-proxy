"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var express = require("express");
exports.routes = express();
exports.routes.post('/', function (req, res) {
    if (req.body.url !== undefined) {
        (0, cross_fetch_1.default)(req.body.url).then(function (response) {
            response.text().then(function (text) {
                res.send(text);
            });
        }).catch(function (error) {
            res.send(error);
        });
    }
});
