//publisher.js
const express = require('express');
const app = express();
const queue = require("./queue");

app.use(express.json());

const router = express.Router();

router.post('/channel1', (req, res) => {
    queue.publish("channel1", req.body);
    res.json({ message: 'Your request will be processed by Channel 1!' });
});

router.post('/channel2', (req, res) => {
    queue.publish("channel2", req.body);
    res.json({ message: 'Your request will be processed by Channel 2!' });
});

app.use('/', router);

app.listen(3000);