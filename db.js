import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port : process.env.MYSQL_PORT,
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("Connected!");
});


export default connection;