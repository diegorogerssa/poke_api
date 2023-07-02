import mysql from 'mysql2/promise';
import 'dotenv/config.js';



const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTION,
  connectionLimit: process.env.MYSQL_CONNECTIONS_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT,
});

export default connection;