import fetch from 'cross-fetch';
import express = require('express');
export const routes = express();

routes.post('/', (req, res) => {
    if (req.body.url !== undefined) {
        fetch(req.body.url).then(response => {
            response.text().then(text => {
                res.send(text);
            });
        }).catch(error => {
            res.send(error);
        });
    }
});