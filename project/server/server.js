import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

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
  // console.log(req.params.pid);
  connection.query(
    `SELECT * FROM product WHERE p_id = ${req.params.pid}`,
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/api/order", (req, res) => {
  let data = req.body;
  console.log(data);
  const id = Date.now().toString();
  const fname = data.ship.firstname;
  const lname = data.ship.lastname;
  const tel = data.ship.tel;
  const email = data.ship.email;
  const address = data.ship.address;
  const sDistrict = data.ship.subDistrict;
  const district = data.ship.district;
  const province = data.ship.province;
  const zipCode = data.ship.zipCode;
  for (let i in data.cart) {
    const pid = parseInt(data.cart[i].itemID);
    const color = data.cart[i].color;
    const storage = data.cart[i].storage;
    const qty = data.cart[i].qty;
    connection.query(
      `INSERT INTO newOrder (o_id, o_pid, o_color, o_storage, o_qty, o_firstname, o_lastname, o_email, o_tel, o_address, o_district, o_subDistrict, o_province, o_zipCode) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        id,
        pid,
        color,
        storage,
        qty,
        fname,
        lname,
        email,
        tel,
        address,
        district,
        sDistrict,
        province,
        zipCode,
      ]
    );
  }
  res.send("success");
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
