"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("dotenv/config");
var routes_1 = require("./routes");
var cors = require("cors");
var server = express();
server.use(cors());
server.use(express.json());
server.use(routes_1.routes);
server.post('/', function (req, res) {
    if (req.body.url !== undefined) {
        fetch(req.body.url).then(function (response) {
            response.text().then(function (text) {
                res.send(text);
            });
        }).catch(function (error) {
            res.send(error);
        });
    }
});
server.listen(process.env.SERVER_PORT, function () {
    console.log("Server is up and running. Listening to port ".concat(process.env.SERVER_PORT, "."));
});
