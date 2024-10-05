const mysql = require("mysql2");
const db = mysql.createConnection ({
    host: "127.0.0.1",
    user: "root",
    password: "1002525933",
    database: "taller6",
    port:3307
});
+
db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ("BD Mysql Conectado");
});

module.exports = db;
    