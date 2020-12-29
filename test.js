(async () => {

    const mysql = require('mysql2/promise');
    const conn = await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud");
    /*await conn.query(`CREATE TABLE clientes (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(150) DEFAULT NULL,
        idade int DEFAULT NULL,
        uf varchar(2) NOT NULL,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `)
    
      for(let i=0; i < 1000; i++){
          await conn.query(`INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);`, [`nome${i}`, i, 'RS']);
      }*/

    //TESTE SEM CACHE
    /*console.time("dbsave");
    for (let x = 0; x < 1000; x++) {
        const [rows] = await conn.query(`select * from clientes where id=? limit 1`, [895]);
        console.log(rows[0].nome);
    }
    console.timeEnd("dbsave");*/

    //TESTE COM CACHE
    const redis = require('promise-redis')();
    const client = redis.createClient();

    client.on("error", (error) => {
        console.error(error);
    });

    const idCliente = 894;
    console.time("redissave");
    for (let x = 0; x < 1000; x++) {
        let cliente = await client.get(`${idCliente}`);
        if (!cliente) {
            const [rows] = await conn.query(`select * from clientes where id=? limit 1`, [idCliente]);
            cliente = rows[0];
            await client.set(`${idCliente}`, JSON.stringify(cliente));
            console.log(cliente.nome);
        }
        else
            console.log(JSON.parse(cliente).nome);
    }
    console.timeEnd("redissave");

})();
