const mysql = require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'node_complete',
    password: 'admin'
}); //Promise based POOL 
module.exports=pool.promise();