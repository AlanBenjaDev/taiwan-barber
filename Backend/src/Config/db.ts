import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'x92KLWXa',
  database: 'taiwan_barber',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;