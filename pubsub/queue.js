//queue.js
const redis = require('redis');
const client = redis.createClient();
client.connect();

client.on("error", (error) => {
    console.error(error);
});

async function publish(channel, value) {
    console.log('Message sent!');
    return client.publish(channel, JSON.stringify(value));
}

async function subscribe(channel, callback) {
    client.on("message", (channel, message) => {
        console.log('Message arrived!');
        callback(message);
    });

    client.subscribe(channel);
}

module.exports = {
    publish,
    subscribe
}