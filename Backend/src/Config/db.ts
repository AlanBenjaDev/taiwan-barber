import { createPool } from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  
  // CRÍTICO PARA AIVEN:
  ssl: {
    rejectUnauthorized: false, 

  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true, 
});

export default pool;
