const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Company",
  password: "root",
});

if (connection) {
  console.log("db connected");
} else {
  console.log("err");
}

module.exports = connection;
