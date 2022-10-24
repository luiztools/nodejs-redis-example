//subscriber2.js
console.log("Worker started");
const queue = require("./queue");
queue.subscribe("channel2", message => {
    console.log("processing");
    console.log(message);
})