//index.js
(async () => {

    const redis = require('promise-redis')();
    const client = redis.createClient('redis://default:8Vj1BIRQUplub95nIOnIa0GfddqakSkI@redis-14874.c276.us-east-1-2.ec2.cloud.redislabs.com:14874/');

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