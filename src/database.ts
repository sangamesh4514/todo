import mysql from 'mysql2'
import util from 'util'

const db=mysql.createConnection({
  host:process.env.HOST,
  user:process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})


export default db;