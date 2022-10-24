(async () => {

    const mysql = require('mysql2/promise');
    const conn = await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud");
    
    //cria tabela e salva os clientes
    await conn.query(`CREATE TABLE clientes (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(150) DEFAULT NULL,
        idade int DEFAULT NULL,
        uf varchar(2) NOT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `)
    console.log("Tabela criada!");

    for(let i=0; i < 1000; i++){
        console.log(i);
        await conn.query(`INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);`, [`nome${i}`, i, 'RS']);
    }

    //TESTE SEM CACHE
    // console.time("dbsave");
    // for (let x = 0; x < 1000; x++) {
    //     const [rows] = await conn.query(`select * from clientes where id=895 limit 1`);
    //     console.log(x);
    // }
    // console.timeEnd("dbsave");

    //TESTE COM CACHE
    // const redis = require('redis');
    // const client = redis.createClient();
    // client.connect();

    // const idCliente = "894";
    // console.time("redissave");
    // for (let x = 0; x < 1000; x++) {
    //     let cliente = await client.get(idCliente);
    //     if (!cliente) {
    //         const [rows] = await conn.query(`select * from clientes where id=${idCliente} limit 1`);
    //         await client.set(idCliente, JSON.stringify(rows[0]));
    //     }
    //     else
    //         console.log(x);
    // }
    // console.timeEnd("redissave");

})();
