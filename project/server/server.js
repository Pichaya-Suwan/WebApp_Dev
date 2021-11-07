import express from "express";
import mysql from "mysql";
import cors from 'cors'

const app = express();
const port = 5000;

app.use(cors())

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "webappdev",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/api/product", (req, res) => {
  connection.query("SELECT * FROM product", (err, result) => {
    res.send(result);
  });
});

app.get("/api/product/:pid", (req, res) => {
  console.log(req.params.pid);
  connection.query(
    `SELECT * FROM product WHERE p_id = ${req.params.pid}`,
    (err, result) => {
      res.send(result);
    }
  );
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
