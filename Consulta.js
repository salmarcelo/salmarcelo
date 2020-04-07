const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "xrqbfpmjypeuab",
  host: "ec2-23-20-129-146.compute-1.amazonaws.com",
  database: "d2eg4iida4an59",
  password: "4119f8b8dbca569bd8fc95de7a95e7b9544f6d07a316408aa1f8bdcf80147202",
  port: "5432"
}); 


pool.query("SELECT * from CADCLIENTE", (err, res) => {
  console.log(err, res);
  pool.end();
});