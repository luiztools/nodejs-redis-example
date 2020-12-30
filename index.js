//index.js
(async () => {

    const redis = require('promise-redis')();
    const client = redis.createClient();

    client.on("error", (error) => {
        console.error(error);
    });

    const result = await client.set("key", "value");
    console.log(`result: ${result}`);

    //exemplos com expiração
    //const result = await client.set("key", "value", "EX", 60);
    //await client.expire('key', 60);

    const result2 = await client.get("key");
    console.log(`result2: ${result2}`);

})();