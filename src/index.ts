import express = require("express");
import 'dotenv/config';
import { routes } from "./routes";
import cors = require('cors');

const server = express();
server.use(cors())
server.use(express.json());

server.use(routes);


server.post('/', (req, res) => {
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

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is up and running. Listening to port ${process.env.SERVER_PORT}.`);
});
