// connect to node.js app with db

// const mysql = require("mysql2");
import mysql from "mysql2"; // ES2020

// require("dotenv").config();
import dotenv from "dotenv"; // ES2020
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Usage Example. Tested. Works. To test locally: You should run the following command from the project directory ONLY (package style):
// node config/db.mjs

// let sql = "SELECT * FROM posts;";
// pool.execute(sql, function (err, result) {
//   if (err) throw err;
//   // console.log(result);
//   result.forEach((res) => {
//     console.log(res.title);
//   });
// });

// due to use of mysql2 I can use async/await
// module.exports = pool.promise();

// In ES Modules (ESM), you don't use module.exports syntax. Instead, you use `export` statements. Here's how you can export pool.promise() in an ES module:
export default pool.promise(); // ES2020
