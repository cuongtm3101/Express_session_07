const mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "cms_schema",
});

let db = pool.promise();

module.exports = db;
