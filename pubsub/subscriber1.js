//subscriber1.js
console.log("Worker started");
const queue = require("./queue");
queue.subscribe("channel1", message => {
    console.log("processing");
    console.log(message);
})