//index.js
(async () => {

    const redis = require('redis');
    const client = redis.createClient('redis://localhost:6379/');
    client.connect();

    client.on("error", (error) => {
        console.error(error);
    });

    //client.auth('8Vj1BIRQUplub95nIOnIa0GfddqakSkI');

    const result = await client.set("key", "value");
    console.log(`result: ${result}`);

    //exemplos com expiração
    //const result = await client.set("key", "value", "EX", 60);
    //await client.expire('key', 60);

    const result2 = await client.get("key");
    console.log(`result2: ${result2}`);

})();